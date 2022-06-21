import * as types from "./actionTypes";

// get contact items/list (paginated data)
export const getContact = (params) => {
  return {
    type: types.GET_CONTACTS,
    params,
  };
};
export const getContactsSuccess = (payload) => {
  return {
    type: types.GET_CONTACTS_SUCCESS,
    payload,
  };
};
export const getContactsFail = (error) => {
  return {
    type: types.GET_CONTACTS_FAIL,
    payload: error,
  };
};

export const getSelectedContact = (params) => {
  return {
    type: types.GET_SELECTED_CONTACT,
    params,
  };
};
export const getSelectedContactSuccess = (payload) => {
  return {
    type: types.GET_SELECTED_CONTACT_SUCCESS,
    payload,
  };
};
export const getSelectedContactFail = (error) => {
  return {
    type: types.GET_SELECTED_CONTACT_FAIL,
    payload: error,
  };
};


// // post message detail-item
// export const postMessageItem = (payload) => {
//   return {
//     type: types.POST_ITEMS,
//     payload,
//   };
// };
// export const postMessageItemSuccess = (post) => {
//   return {
//     type: types.POST_ITEM_SUCCESS,
//     payload: post,
//   };
// };
// export const postMessageItemFail = (error) => {
//   return {
//     type: types.POST_ITEM_FAIL,
//     payload: error,
//   };
// };

// // get history items/list (paginated data)
// export const getHistoryItems = (params) => {
//   return {
//     type: types.GET_ITEMS,
//     params,
//   };
// };
// export const getHistoryItemsSuccess = (payload) => {
//   return {
//     type: types.GET_HISTORY_ITEM_SUCCESS,
//     payload,
//   };
// };
// export const getHistoryItemsFail = (error) => {
//   return {
//     type: types.GET_HISTORY_ITEM_FAIL,
//     payload: error,
//   };
// };