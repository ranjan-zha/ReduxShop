import React, {Component} from 'react';

import './Header.css';



export default class Header extends Component {

    render(){
        return(
            <div className="">
                <nav className="navbar navbar-light bg-secondary justify-content-between navbar-dark fixed-top">
                <a className="navbar-brand">alco whiz E-Commerece!</a>
               </nav>
            </div>
        )
    }
}