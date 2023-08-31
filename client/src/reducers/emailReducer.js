/* eslint-disable import/no-anonymous-default-export */
import {
  EMAIL_SUCCESS,
  EMAIL_FAILURE,
  APPLICATION_SUCCESS,
  APPLICATION_FAILURE,
  APPLICATION_REDIRECT_RESET,
  APPLICATION_FAILURE_RESET,
  CONTACT_FAILURE_RESET,
  CONTACT_REDIRECT_RESET,
  APPLICATION_ON_SUCCESS,
  CONTACT_ON_SUCCESS,
} from '../actions/types';

const initialState = {
  emailSuccess: false,
  emailFailure: false,
  applicationSuccess: false,
  applicationFailure: false,
  applicationRedirect: false,
  contactRedirect: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SUCCESS:
      return {
        ...state,
        emailSuccess: true,
      };
    case EMAIL_FAILURE:
      return {
        ...state,
        emailFailure: true,
      };
    case APPLICATION_SUCCESS:
      return {
        ...state,
        applicationSuccess: true,
      };
    case APPLICATION_FAILURE:
      return {
        ...state,
        applicationFailure: true,
      };
    case APPLICATION_FAILURE_RESET:
      return {
        ...state,
        ApplicationFailure: false,
      };
    case CONTACT_FAILURE_RESET:
      return {
        ...state,
        emailFailure: false,
      };
    case APPLICATION_ON_SUCCESS:
      return {
        ...state,
        applicationRedirect: true,
      };
    case APPLICATION_REDIRECT_RESET:
      return {
        ...state,
        applicationRedirect: false,
        applicationSuccess: false,
      };
    case CONTACT_REDIRECT_RESET:
      return {
        ...state,
        contactRedirect: false,
        emailSuccess: false,
      };

    case CONTACT_ON_SUCCESS:
      return {
        ...state,
        contactRedirect: true,
      };
    default:
      return state;
  }
};
