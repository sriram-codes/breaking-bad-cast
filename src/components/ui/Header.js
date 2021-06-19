import React from 'react'
import logo from '../../images/logo.png'
import '../ui/Header.css'

const Header = () => {
    return (
        <header className='center'>
            <img src={logo} alt='' />
            <span>A learning experience following <a href="https://www.youtube.com/watch?v=YaioUnMw0mo">this tutorial by Traversy Media</a></span>
        </header>
    )
}

export default Header
