import * as types from "./actionTypes";

// get contact items/list (paginated data)
export const getContactItems = (params) => {
  return {
    type: types.GET_ITEMS,
    params,
  };
};
export const getContactItemsSuccess = (payload) => {
  return {
    type: types.GET_ITEM_SUCCESS,
    payload,
  };
};
export const getContactItemsFail = (error) => {
  return {
    type: types.GET_ITEM_FAIL,
    payload: error,
  };
};

// post message detail-item
export const postMessageItem = (payload) => {
  return {
    type: types.POST_ITEMS,
    payload,
  };
};
export const postMessageItemSuccess = (post) => {
  return {
    type: types.POST_ITEM_SUCCESS,
    payload: post,
  };
};
export const postMessageItemFail = (error) => {
  return {
    type: types.POST_ITEM_FAIL,
    payload: error,
  };
};

// get history items/list (paginated data)
export const getHistoryItems = (params) => {
  return {
    type: types.GET_ITEMS,
    params,
  };
};
export const getHistoryItemsSuccess = (payload) => {
  return {
    type: types.GET_HISTORY_ITEM_SUCCESS,
    payload,
  };
};
export const getHistoryItemsFail = (error) => {
  return {
    type: types.GET_HISTORY_ITEM_FAIL,
    payload: error,
  };
};