import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { COMMON_ERROR, SET_ALL_PROPERTIES } from '../types';

// export type PropertiesState {
//     properties: any;
// };

const initialState: any = {
    properties: [],
    loading: true,
    error: undefined,
  };

export const uiSlice = createSlice({
    name: "formData",
    initialState,
    reducers: {
        setFormData: (state, action) => {
            switch (action.type) {
              case SET_ALL_PROPERTIES:
                return {
                  ...state,
                  properties: action.payload,
                  loading: false,
                };
              case COMMON_ERROR:
                  return {
                      loading: false,
                      error: action.payload,
                  };
            
              default:
                return state;
            }
          },
          setValidationResult: (state, action) => {
            // state.validationResult.errors = action.payload;
          },
    },
});

export const { setFormData } = uiSlice.actions;

export const propertiesData = (state: RootState) => state.commonData;

export default uiSlice.reducer;