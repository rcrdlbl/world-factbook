export const fetchUserLocation = () => dispatch => {
  return fetch('https://api.ipgeolocation.io/ipgeo?apiKey=2b1627a69cc441feb63b250c1e0f79cf')
  .then(response => response.json())
  .then(location => dispatch({type:'USER_LOCATION_FETCH_SUCCESS', payload: location}))
}

export const createCurrencyExchange = (currencies) => dispatch => {
  return fetch('http://localhost:3050/currency_exchanges', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(currencies)
  })
  .then(response => response.json())
  .then(exchange => {
    console.log(exchange)
    dispatch({type: 'ADD_EXCHANGE_SUCCESS', payload: exchange})
  })
}
