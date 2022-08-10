import React from 'react'
import style from './style/country.module.css'

const Country = (props) => {
    const {name, flags, capital, population, area} = props.country;
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} className={style.flag} alt={name.common} />
            <h3>Name: {name.common}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Populatin: {population}</h3>
            <h3>Area: {area}</h3>   
        </div>
    </article>
  )
}

export default Country