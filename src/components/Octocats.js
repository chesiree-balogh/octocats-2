import React, { useState, useEffect } from 'react'

import { Octocat } from './Octocat'

export const Octocats = () => {
  const [arrayOfOctocats, setArrayOfOctocats] = useState([])

  const fetchData = async () => {
    console.log('Using the effect')

    const response = await fetch('https://sdg-octodex.herokuapp.com/')
    const jsonDataFromTheApi = await response.json()
    setArrayOfOctocats(jsonDataFromTheApi.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className="octocats">
      <ul>
        {arrayOfOctocats.map((octocat) => {
          return (
            <Octocat
              key={octocat.number}
              octocatNumber={octocat.number}
              octocatName={octocat.name}
              imageSource={octocat.image}
            />
          )
        })}
      </ul>
    </section>
  )
}
