import * as types from "./actionTypes";

const initialState = {
  contacts: [],
  loadingContacts: false,

  selectedContact: {},
  loadingSelectedContacts: false,

  sendingMessage: false,
  postMessage: {},

  loadingMessages: false,
  messages: [],

  loadingHistory: false,
  history: [],

  error: {
    message: "",
  },
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CONTACTS:
      state = { ...state, loadingContacts: true };
      break;
    case types.GET_CONTACTS_SUCCESS:
      state = { ...state, contacts: action.payload, loadingContacts: false };
      break;
    case types.GET_CONTACTS_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingContacts: false,
      };
      break;

    case types.GET_SELECTED_CONTACT:
      state = { ...state, loadingSelectedContacts: true };
      break;
    case types.GET_SELECTED_CONTACT_SUCCESS:
      state = {
        ...state,
        selectedContact: action.payload,
        loadingSelectedContacts: false,
      };
      break;
    case types.GET_SELECTED_CONTACT_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingSelectedContacts: false,
      };
      break;

    case types.POST_MESSAGE:
      state = { ...state, sendingMessages: true };
      break;
    case types.POST_MESSAGE_SUCCESS:
      state = {
        ...state,
        postMessage: action.payload[0],
        sendingMessage: false,
      };
      break;
    case types.POST_MESSAGE_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        sendingMessage: false,
      };
      break;

    case types.GET_MESSAGES:
      state = { ...state, loadingMessages: true };
      break;
    case types.GET_MESSAGES_SUCCESS:
      state = {
        ...state,
        messages: action.payload[0],
        loadingMessages: false,
      };
      break;
    case types.GET_MESSAGES_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingMessages: false,
      };
      break;

    case types.GET_CONTACT_HISTORY:
      state = { ...state, loadingHistory: true };
      break;
    case types.GET_CONTACT_HISTORY_SUCCESS:
      state = {
        ...state,
        history: action.payload[0],
        loadingHistory: false,
      };
      break;
    case types.GET_CONTACT_HISTORY_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingHistory: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
