import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../components/logo.svg'
import {FaCartArrowDown} from 'react-icons/fa'

export default class navbar extends Component {
    
    state= {
        navbarState: false,
        navbarClass: "collapse navbar-collapse",
        menus: [ {
            id: 1,
            name: "Home",
            url: "/",
        }, {
            id: 2,
            name: "About us",
            url: "/about",
        }, {
            id: 3,
            name: "Services",
            url: "/services",
        }, {

            id: 4,
            name: "Contact",
            url: "/contact",
        } ]
    }

    myToggler = () => {
        this.state.navbarState ? this.setState({
            navbarState: false,
            navbarClass: "collapse navbar-collapse"
        }) : this.setState({
            navbarState: true,
            navbarClass: "collapse navbar-collapse show"
        });
    }
  
    render() {
    return (
      <>
      <nav className='navbar navbar-expand-sm bg-theme text-white'>
        <Link to="/" className='navbar-brand shadow-lg'>
                    <img src={Logo} alt="" width="40px" />
        </Link>
        <button className='navbar-toggler' onClick={this.myToggler} type='button'>
            <span className='text-white'>Menu</span>
        </button>
        <div className={this.state.navbarClass}>
            <ul className="navbar-nav ml-auto mr-5">
                { this.state.menus.map(menu => {
                    return (
                        <li key={menu.id} className="nav-item">
                        <Link to={menu.url} className='nav-link text-white'>{menu.name}</Link>
                    </li>     
                )
                })}
                <li className="nav-item">
                    <Link to='/' className='nav-link text-white'><FaCartArrowDown className='cart-icon'/></Link>
                </li>
            </ul>
        </div>
      </nav>
      </>
    )
  }
}
