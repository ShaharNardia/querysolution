const initialState = {
    currentPage: ''
  };
  
  const mainreducer = (state = initialState, action) => {
    switch (action.type) {
      case "SetCurrentPage":
      console.log(action);
        return { state, currentPage: action.currentPage };

        default:
        return state;
    }
  };
  
  export default mainreducer;
  