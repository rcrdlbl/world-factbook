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

export const fetchExchanges = (countryCode) => dispatch => {
  return fetch(`http://localhost:3050/currency_exchanges/${countryCode}`)
  .then(response => response.json())
  .then(exchanges => dispatch({type: 'FETCH_EXCHANGES_SUCCESS', payload: exchanges}))
}
