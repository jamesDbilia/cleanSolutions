import { SET_BANNER_VIEW, SET_MENU_VIEW } from './types';

export const setBanner = (inView) => {
  return {
    type: SET_BANNER_VIEW,
    payload: inView,
  };
};

export const setNavOpen = (open) => {
  return {
    type: SET_MENU_VIEW,
    payload: open,
  };
};
