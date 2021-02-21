import React, {Component} from 'react';

import './Header.css';
import $ from 'jquery';


export default class Header extends Component {

    componentDidMount(){
        // $(document).ready(function() {
        //     $('.bd-example-modal-lg').modal('show');
        //   });
    }

    render(){
        return(
            <div className="">
                <nav className="navbar navbar-light bg-secondary justify-content-between navbar-dark fixed-top">
                <a className="navbar-brand">alco whiz E-Commerese!</a>
               </nav>
            </div>
        )
    }
}