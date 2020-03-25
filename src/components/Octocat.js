import React from 'react'
export const Octocat = (props) => {
  return (
    <li>
      <section>
        <img alt={props.octocatName} src={props.imageSource} />
      </section>
      <section>
        <p className="black">#{props.octocatNumber}</p>
        <p className="bold">{props.octocatName}</p>
      </section>
    </li>
  )
}
