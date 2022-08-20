export const initialState = {
  data: [],
  filterName: '',
  filterCategory: ''
};

export const ACTIONS = {
  FETCH_DATA: 'fetach-data',
  SET_FILTER_NAME: 'set-filter-name',
  SET_FILTER_CATEGORY: 'set-filter-category',
  RESET: 'reset'
};

export function dataReducer(state, {type, payload}) {
  switch (type) {
    case ACTIONS.FETCH_DATA:
      return {
        ...state, data: payload
      };
    case ACTIONS.SET_FILTER_NAME:
      return {
        ...state, filterName: payload
      };
    case ACTIONS.SET_FILTER_CATEGORY:
      return {
        ...state, filterCategory: payload
      };
    case ACTIONS.RESET:
      return {
        ...state,
        filterCategory: '',
        filterName: ''
      };
    default:
      return state;
  }
}