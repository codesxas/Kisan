import { get, post } from "./api_helper";
import * as url from "./url_helper";

// get all contact information
export const getContacts = (config) => get(url.GET_CONTACT, { config });

// post new message
export const postMessage = (data) => post(url.POST_MESSAGE, data);

// get all history information
export const getMessages = (params) => get(url.GET_MESSAGE, { params });

// get all messages sent to a particular contact
export const getContactHistory = (params) =>
  get(url.GET_CONTACT_HISTORY, { params });
