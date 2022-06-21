import * as types from "./actionTypes";

const initialState = {
  contacts: [],
  loadingContacts: false,

  selectedContact: {},
  loadingSelectedContacts: false,
  historyContact: [],
  post: {},
  loadingHistoryItems: false,
  loadingPostDetails: false,
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

    // case types.POST_ITEMS:
    //   state = { ...state, loadingPostDetails: true };
    //   break;
    // case types.POST_ITEM_SUCCESS:
    //   state = { ...state, post: action.payload[0], loadingPostDetails: false };
    //   break;
    // case types.POST_ITEM_FAIL:
    //   state = {
    //     ...state,
    //     error: {
    //       message: "Error",
    //     },
    //     loadingPostDetails: false,
    //   };
    //   break;

    // case types.GET_HISTORY_ITEM_FAIL:
    //   state = {
    //     ...state,
    //     error: { message: "Error" },
    //     loadingFavoriteItems: false,
    //   };
    //   break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
