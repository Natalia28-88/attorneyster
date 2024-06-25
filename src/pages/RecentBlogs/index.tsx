import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Navigation from '../../components/Navigation';
import TitleCenter from '../../components/TitleCenter';
import BlogsTitleAndDate from '../../components/BlogsTypeAndDate';
import Blog, { BlogProps } from '../../components/Blog';
import Types from '../../components/Blog/Types';
import { Sort } from '../../components/Blog/Sort';
import Skeleton from '../../components/Blog/Skeleton';
import {
  selectFilter,
  setSearchValue,
  setTypeId,
} from '../../redux/slices/filterSlice';
import { BtnRemove, Search } from '../../utils/icons';
import styles from './RecentBlogs.module.scss';

const RecentBlogs = () => {
  const dispatch = useDispatch();
  const { typeId, sort } = useSelector(selectFilter);
  const sortType = sort.sortProperty;

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [value, setValue] = React.useState('');

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  const onClickType = React.useCallback((id: number) => {
    dispatch(setTypeId(id));
  }, []);

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const type = typeId > 0 ? `type=${typeId}` : '';

    axios
      .get(
        `https://659ebba647ae28b0bd36955c.mockapi.io/items?${type}&sortBy=${sortBy}&order=${order}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  }, [typeId, sortType]);

  const onChangeSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const itemsFilter = items.filter(
    (item: { title: string; text: string }) =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.text.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#161d27' }}>
      <div className="content">
        <Navigation />
        <TitleCenter titleTop="Recent Blogs" />
        <div className={styles.wrapper}>
          <div className={styles.wrapper__left}>
            <img
              src="img/recentBlogs/recent-blogs-title.png"
              alt="Recent Blogs"
            />
          </div>
          <div className={styles.wrapper__right}>
            <BlogsTitleAndDate
              type="Corporate Law"
              date="Friday, February 4, 2022"
            />
            <h2>The Difference between Information & Legal Advice</h2>
            <p>
              Collaborative on low-hanging fruit to identify a ballpark value
              added activity to beta matrix economically test override the
              digital.
            </p>
            <Link to="#" className={styles.link}>
              View More
            </Link>
          </div>
        </div>
        <div className={styles.searchBlock}>
          <img src={Search} alt="Search" />
          {value && (
            <img
              onClick={onClickClear}
              className="cu-p ml-10"
              src={BtnRemove}
              alt="Clear"
            />
          )}
          <input
            ref={inputRef}
            onChange={onChangeSearchInput}
            value={value}
            placeholder="Поиск..."
          />
        </div>
        <div className={styles.typeBlock}>
          <Types value={typeId} onChangeType={onClickType} />
          <Sort />
        </div>
        <div className={styles.blogs}>
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : itemsFilter.map((obj: BlogProps) => (
                <Blog key={obj.id} {...obj} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
