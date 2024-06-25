import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortPropertyEnum {
  RATING_DESC = 'rating',
  RATING_ASC = '-rating',
  TITLE_DESC = 'title',
  TITLE_ASC = '-title',
}

type Sort = { name: string; sortProperty: SortPropertyEnum };

interface filterSliceState {
  searchValue: string;
  typeId: number;
  sort: Sort;
}

const initialState: filterSliceState = {
  searchValue: '',
  typeId: 0,
  sort: { name: 'популярности', sortProperty: SortPropertyEnum.RATING_DESC },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setTypeId(state, action: PayloadAction<number>) {
      state.typeId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<filterSliceState>) {
      state.sort = action.payload.sort;
      state.typeId = Number(action.payload.typeId);
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;

export const selectSort = (state: RootState) => state.filter.sort;

export const { setTypeId, setSearchValue, setSort, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
