const initialState = {
  venues: [],
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_VENUES":
      return {
        ...state,
        venues: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
