import { deleteContact, get, post, put } from "./api_helper";
import * as url from "./url_helper";

// get all contact information
export const getItems = (params) => get(url.GET_CONTACT, { params });

// post new contact information
export const postItem = (data) => post(url.POST_CONTACT, data);