import { get, post } from "./api_helper";
import * as url from "./url_helper";

// get all contact information
export const getItems = (params) => get(url.GET_CONTACT, { params });

// post new message
export const postItem = (data) => post(url.POST_MESSAGE, data);

// get all history information
export const getHistoryItems = (params) => get(url.POST_MESSAGE, { params });
