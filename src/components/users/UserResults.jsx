import React, { useEffect, useContext } from 'react'
// context
import GithubContext from '../../context/GithubContext'
// components
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'

const UserResults = () => {
  const { users, loading, fetchUsers } = useContext(GithubContext)

  // effect
  useEffect(() => {
    // run

    // clean up
    return () => {
      fetchUsers()
    }
  }, [])

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
