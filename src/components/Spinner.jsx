import React from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
const override = {
    display: "block",
    margin: "100px auto"
}

const Spinner = () => {
  return (
        <PacmanLoader
        color="#008CFF"
        cssOverride={override}
        size={60}
        />
  )
}

export default Spinner