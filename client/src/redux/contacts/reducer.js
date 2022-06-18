import * as types from "./actionTypes";

const initialState = {
  contacts: [],
  historyContact: [],
  post: {},
  loadingItems: false,
  loadingHistoryItems: false,
  loadingPostDetails: false,
  error: {
    message: "",
  },
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS:
      state = { ...state, loadingItems: true };
      break;
    case types.GET_ITEM_SUCCESS:
      state = { ...state, contacts: action.payload, loadingItems: false };
      break;
    case types.GET_ITEM_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingItems: false,
      };
      break;

    case types.POST_ITEMS:
      state = { ...state, loadingPostDetails: true };
      break;
    case types.POST_ITEM_SUCCESS:
      state = { ...state, post: action.payload[0], loadingPostDetails: false };
      break;
    case types.POST_ITEM_FAIL:
      state = {
        ...state,
        error: {
          message: "Error",
        },
        loadingPostDetails: false,
      };
      break;

    case types.GET_HISTORY_ITEM_FAIL:
      state = {
        ...state,
        error: { message: "Error" },
        loadingFavoriteItems: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default PostReducer;
