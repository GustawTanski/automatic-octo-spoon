import { POST_TAG, GET_ALL_TAGS, generateAsyncAction } from "./actionGenerator";
import requestApi from "../api/index";

export const postTag = ({ tagName }) => {
	return generateAsyncAction(requestApi.post("/tags", { name: tagName }));
