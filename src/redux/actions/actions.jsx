import { FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS } from "./actionsTypes";

export const projectRequest = () => ({
  type: FETCH_PROJECTS_REQUEST
});
export const projectSuccess = (data) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: data,
});

export const projectFailure = (error) => ({
  type: FETCH_PROJECTS_FAILURE,
  payload: error,
});