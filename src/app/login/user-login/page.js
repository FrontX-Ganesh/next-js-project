import Link from 'next/link'
import React from 'react'

const UserLogin = () => {
  return (
    <>
      <div>User Login</div><br />
      <Link href="/userList"> Go to User page</Link>
    </>
  )
}

export default UserLogin