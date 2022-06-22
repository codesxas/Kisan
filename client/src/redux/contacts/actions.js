import * as types from "./actionTypes";

// get contact items/list
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

// get contact by id
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

// post message
export const postMessage = (payload) => {
  return {
    type: types.POST_MESSAGE,
    payload,
  };
};
export const postMessageSuccess = (post) => {
  return {
    type: types.POST_MESSAGE_SUCCESS,
    payload: post,
  };
};
export const postMessageFail = (error) => {
  return {
    type: types.POST_MESSAGE_FAIL,
    payload: error,
  };
};

// get all message history
export const getMessages = (params) => {
  return {
    type: types.GET_MESSAGES,
    params,
  };
};
export const getMessagesSuccess = (payload) => {
  return {
    type: types.GET_MESSAGES_SUCCESS,
    payload,
  };
};
export const getMessagesFail = (error) => {
  return {
    type: types.GET_MESSAGES_FAIL,
    payload: error,
  };
};

// get contact history
export const getContactHistory = (params) => {
  return {
    type: types.GET_CONTACT_HISTORY,
    params,
  };
};
export const getContactHistorySuccess = (payload) => {
  return {
    type: types.GET_CONTACT_HISTORY_SUCCESS,
    payload,
  };
};
export const getContactHistoryFail = (error) => {
  return {
    type: types.GET_CONTACT_HISTORY_FAIL,
    payload: error,
  };
};
