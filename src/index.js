import React from 'react'
import ReactDOM from 'react-dom'

import HeaderParallax from './components/headerParallax'
import NavBar from './components/navBar'
import CustomCursor from './components/customCursor'



import './styles/main.scss'


const renderComponent = (Component, hook) => {
    if (document.getElementById(hook)) {
        ReactDOM.render(<Component />, document.getElementById(hook))
    }
}

renderComponent(HeaderParallax, 'parallax-header-hook')
renderComponent(NavBar, 'nav-hook')
renderComponent(CustomCursor, 'cursor-hook')
