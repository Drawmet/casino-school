import React,{Component} from 'react';
import './Header.css'
import logo from '../assets/example-logo.png'
import menu from '../assets/menu.png'

export default class Header extends Component{
    render(){
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
            <a className="navbar-brand" href="index.html"><img src={logo} alt="Логотип"/></a>
                <div className="top-nav">
                    <span className="menu"><img src={menu} alt=""/></span>
                    <ul className="nav1 navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href="home.html" className="scroll">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" className="scroll">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" className="scroll">Team</a></li>
                    </ul>
                    </div>
        </nav>
        );
    }
}