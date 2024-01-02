import './styles/main.scss'
import HeaderParallax from './components/headerParallax'
import NavBar from './components/navBar'

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<HeaderParallax />, document.getElementById('header-hook'))
ReactDOM.render(<NavBar />, document.getElementById('nav-hook'))

