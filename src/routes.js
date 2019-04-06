import React from 'react'
import App from './App'
import CountryContainer from './containers/CountryContainer'
import CountryListView from './components/CountryListView'
import CreditsView from './components/CreditsView'
import { Route, Switch } from 'react-router-dom'


export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/countries" component={CountryListView} />
        <Route exact path="/credits" component={CreditsView} />
        <Route path="/countries/:countryId" component={CountryContainer} />
      </Switch>
    </div>
  )
}
