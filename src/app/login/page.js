"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter()
  return (
    <>
        <div>Login</div>
        <button onClick={ () => router.push("/about")}>Go to about page</button>
    </>
  )
}

export default Login