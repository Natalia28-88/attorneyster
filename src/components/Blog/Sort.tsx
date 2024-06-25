import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SortPropertyEnum,
  selectSort,
  setSort,
} from '../../redux/slices/filterSlice';

import styles from './Blog.module.scss';
import { ArrowTop } from '../../utils/icons';

type listItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export const list: listItem[] = [
  { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC },
  { name: 'рейтингу', sortProperty: SortPropertyEnum.RATING_ASC },
  {
    name: 'алфавиту в обратном порядке',
    sortProperty: SortPropertyEnum.TITLE_DESC,
  },
  { name: 'алфавиту от А до Я', sortProperty: SortPropertyEnum.TITLE_ASC },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const onClickListItem = (obj: listItem) => {
    dispatch(setSort(obj));
    setOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <div ref={sortRef} className={styles.sort} onClick={() => setOpen(!open)}>
        <div className={styles.sort__label}>
          <img
            src={ArrowTop}
            alt="arrow"
            className={open ? styles.active : ''}
          />
          <b>Сортировка по:</b>
          <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (
          <div className={styles.sort__popup}>
            <ul>
              {list.map((obj, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(obj)}
                  className={
                    sort.sortProperty === obj.sortProperty ? styles.active : ''
                  }
                >
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
