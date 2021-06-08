import {
  GET_ALL_STOCKS,
  GET_ALL_STOCKS_ERROR,
  GET_USER_STOCKS,
  GET_USER_STOCKS_ERROR,
  UPDATE_STOCK_BY_ID_ERROR,
  DELETE_STOCK_BY_ID_ERROR,
} from '../types';

import axios from 'axios';

export const getAllStocks = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/stock');
    dispatch({ type: GET_ALL_STOCKS, payload: data });
  } catch (e) {
    dispatch({
      type: GET_ALL_STOCKS_ERROR,
      payload: 'Something went wrong, please refresh the page to try again',
    });
  }
};

export const getUserStocks = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/user/stock', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatch({ type: GET_USER_STOCKS, payload: data.reverse() });
  } catch (e) {
    dispatch({
      type: GET_USER_STOCKS_ERROR,
      serverError: e,
      userError: 'Please refresh the page and try again',
    });
  }
};

export const updateStocksCompletedById =
  (id, completed, text) => async dispatch => {
    try {
      await axios.put(
        `/api/user/stock/${id}`,
        { text, completed: !completed },
        { headers: { authorization: localStorage.getItem('token') } }
      );
      const { data } = await axios.get('/api/user/stock', {
        headers: { authorization: localStorage.getItem('token') },
      });
      dispatch({ type: GET_USER_STOCKS, payload: data.reverse() });
    } catch (e) {
      dispatch({ type: UPDATE_STOCK_BY_ID_ERROR, payload: e });
    }
  };

export const deleteStockById = id => async dispatch => {
  try {
    await axios.delete(`/api/user/stock/${id}`, {
      headers: { authorization: localStorage.getItem('token') },
    });
    const { data } = await axios.get('/api/user/stock', {
      headers: { authorization: localStorage.getItem('token') },
    });
    dispatch({ type: GET_USER_STOCKS, payload: data.reverse() });
  } catch (e) {
    dispatch({ type: DELETE_STOCK_BY_ID_ERROR, payload: e });
  }
};
