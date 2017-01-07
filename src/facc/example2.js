import React from 'react'
import { LoginButton, LogoutButton } from 'ui'
import LoggedUser from 'LoggedUser'

function example2(){
  return (
    <LoggedUser>
      {username => (
        username ? <LogoutButton/>  : <LoginButton/>
      )}
    </LoggedUser>
  )
}
