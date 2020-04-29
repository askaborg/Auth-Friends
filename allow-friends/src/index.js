import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
import FriendsApp from './components'

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <FriendsApp />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
)