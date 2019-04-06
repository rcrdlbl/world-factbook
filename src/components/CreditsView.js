import React from 'react'
import { Link } from 'react-router-dom'

const CreditsView = () => {
  return (
    <>
    <div className='CountryBasic'>
      <Link to="/" className="searchLink">««back</Link>
    </div>
    <div>
      avara font: Raphaël Bastide <a href="https://www.velvetyne.fr/fonts/avara/">src</a>
    </div>
    <div>
      targeting reticle: Wikimedia Commons <a href="https://commons.wikimedia.org/wiki/File:PSO1-reticle.svg">src</a>
    </div>
    <div>
      country info paragraphs: wikipedia
    </div>
    <div>
      map topography: naturalearth
    </div>
    </>
  )
}

export default CreditsView
