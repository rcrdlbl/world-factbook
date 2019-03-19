import React from 'react'
import App from './App'
import CountryContainter from './containters/CountryContainer'
import { Route, Switch, Redirect } from 'react-router-dom'


export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/countries/:countryId" component={countryContainer} />
      </Switch>
    </div>
  )
}
