import React, { Component } from 'react'

class WikiView extends Component {

  render() {
    return (
      <>
      <h3>Wikipedia</h3>
      <div className="wikiextract">{this.props.wikiInfo.query.pages[Object.keys(this.props.wikiInfo.query.pages)[0]].extract}</div>
      </>
    )
  }
}

export default WikiView
