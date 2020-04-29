import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import PrivateRoute from './PrivateRoute'
import NavBar from './NavBar'
import Login from './user/Login'
import FriendsList from './friends/FriendsList'

const FriendsApp = () => {
  return (
    <>
    <Route path='/' component={NavBar} />
    <Container>        
      <Route path exact='/' component={Login} />
      <PrivateRoute path='/friends' component={FriendsList} />
    </Container>
  </>
  )
}

export default FriendsApp