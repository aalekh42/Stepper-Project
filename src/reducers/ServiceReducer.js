import { LOAD_SERVICE } from "../constants/actionTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SERVICE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default ServiceReducer;
