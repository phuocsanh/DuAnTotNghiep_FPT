import actionTypes from "../Action/constants";

const initialState = {
  authDiaLog: false,
  openDrawer: true,
  openSearch: false,
  openNotify: false,
  openCart: false,
  isSubmitting: false,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.openDialog:{
      return {...state, authDiaLog: true }
    }
    case actionTypes.closeDialog:{
      return {...state, authDiaLog: false }
    }
    case actionTypes.onOffDrawerConstant: { 
      return {...state, openDrawer: action.openDrawer }
    }
    case actionTypes.onOffSearchConstant: {
      return {...state, openSearch: !state.openSearch }
    }
    case actionTypes.onOffCartConstant: {
      return {...state, openCart: !state.openCart }
    }
    case actionTypes.onOffNotificationConstant: {
      return {...state, openNotify: !state.openNotify }
    }
    case actionTypes.submitSearch: {
      return {...state, isSubmitting: action.payload}
    }
    default: return {...state}
  }
}