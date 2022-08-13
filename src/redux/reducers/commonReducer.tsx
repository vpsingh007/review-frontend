import { COMMON_ERROR, SET_SUCCESS_MESSAGE, SET_ALL_PROPERTIES, SET_SINGLE_PROPERTY, SET_LOADER } from '../types'

const initialState = {
  properties: [],
  singleProperty: {},
  loading: false,
  errorToaster: false,
  successToaster: false,
  errorMessage: {},
  successMessage: ''
}

const commonReducer = (
  state = initialState,
  action: { type: any; payload: any },
) => {
  switch (action.type) {
    case SET_ALL_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
        loading: false,
      }
    case SET_SINGLE_PROPERTY:
      return {
        ...state,
        singleProperty: action.payload,
        loading: false,
      }
    case COMMON_ERROR:
      return {
        loading: false,
        errorToaster: true,
        successToaster: false,
        errorMessage: action.payload,
      }
    case SET_LOADER:
      return {
        ...state,
        loading: true,
      }
    case SET_SUCCESS_MESSAGE:
      return {
        loading: false,
        errorToaster: false,
        successToaster: true,
        successMessage: action.payload,
      }
    default:
      return state
  }
}

export default commonReducer
