import React from 'react'
import App from './App'
import CountryContainer from './containers/CountryContainer'
import { Route, Switch } from 'react-router-dom'


export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/countries/:countryId" component={CountryContainer} />
      </Switch>
    </div>
  )
}
