import React, { Component } from 'react'
import wikiLogo from '../static/wikilogo.svg'

class WikiView extends Component {

  render() {
    return (
      <>
      <h3><img className="wikiLogo" alt="Wikipedia Logo" src={wikiLogo}></img></h3>
      <div className="wikiextract">{this.props.wikiInfo.query.pages[Object.keys(this.props.wikiInfo.query.pages)[0]].extract}</div>
      </>
    )
  }
}

export default WikiView
