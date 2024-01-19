import React from 'react'
import ReactDOM from 'react-dom'

import HeaderParallax from './components/HeaderParallax'
import NavBar from './components/NavBar'
import CustomCursor from './components/CustomCursor'



import './styles/main.scss'


const renderComponent = (Component, hook) => {
    if (document.getElementById(hook)) {
        ReactDOM.render(<Component />, document.getElementById(hook))
    }
}

renderComponent(HeaderParallax, 'parallax-header-hook')
renderComponent(NavBar, 'nav-hook')
renderComponent(CustomCursor, 'cursor-hook')
