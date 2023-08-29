"use client"
import React from 'react'

const User = ({params}) => {
  return (
    <>  
        <h1>User Info</h1>
        <div>User Id :- {params.userId}</div>
    </>
  )
}

export default User