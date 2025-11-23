

import React from 'react'

const Card = ({children, bg='bg-brand'}) => {
  return (
    <div className={`${bg} p-6 rounded-lg shadow-md mx-4 text-center text-white`}>   
        {children}  
    </div>
  )
}

export default Card

