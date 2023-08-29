import Link from 'next/link'
import React from 'react'

const UserList = () => {
  return (
    <>
        <div>UserList</div>
        <ul>
            <li><Link href='/userList/1'>User 1</Link></li>
            <li><Link href='/userList/2'>User 2</Link></li>
            <li><Link href='/userList/3'>User 3</Link></li>
            <li><Link href='/userList/4'>User 4</Link></li>
        </ul>
    </>
  )
}

export default UserList