import React from 'react'
import restaurantsData from "../patesserieData"
import {Link} from "react-router-dom";
const Patesseries = () => {
  return (
    <div>
    <section className="restaurant-list">
    {restaurantsData.map((patesseries) => (
      <div className="restaurant-card">
        <img src={patesseries.image} alt={patesseries.name} />
        <h2>{patesseries.name}</h2>
        <p>{patesseries.description}</p>
        <p>{patesseries.position}</p>
        <p>{patesseries.contact.email}</p>
        <p>{patesseries.contact.phone}</p>
        <Link to={`/${patesseries.title}/restaurent/`}> <button> Go to this resto </button>
    </Link>

      </div>
    ))}
  </section>
  </div>
  )
}

export default Patesseries
