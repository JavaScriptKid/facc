import React from 'react'
import LoggedUser from 'LoggedUser'

function example1(){
  return (
    <LoggedUser>
      {username => (
        <div>{username}</div>
      )}
    </LoggedUser>
  )
}
