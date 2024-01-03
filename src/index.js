import './styles/main.scss'
import HeaderParallax from './components/headerParallax'
import NavBar from './components/navBar'
import CustomCursor from './components/customCursor'
import Footer from './components/footer'

import React from 'react'
import ReactDOM from 'react-dom'


ReactDOM.render(<CustomCursor />, document.getElementById('cursor-hook'))
ReactDOM.render(<HeaderParallax />, document.getElementById('header-hook'))
ReactDOM.render(<NavBar />, document.getElementById('nav-hook'))
ReactDOM.render(<Footer />, document.getElementById('footer-hook'))


