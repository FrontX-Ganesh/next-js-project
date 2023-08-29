"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const router = useRouter()
  return (
    <>
        <div>Login</div><br />
        <button onClick={() => router.push("/login/user-login")}>Go to User Login page</button>
    </>
  )
}

export default Login