const initialState = {
  exchanges: [],
  exchange: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_EXCHANGES_SUCCESS':
      return {...state, exchanges: action.payload}
    case 'ADD_EXCHANGE_SUCCESS':
      return {...state, exchange: action.payload, exchanges: [...state.exchanges, action.payload]}
    case 'USER_LOCATION_FETCH_SUCCESS':
      return {...state, userLocation: action.payload, userLocationLoaded: true}
    default:
      return state
  }
}
