import React from 'react';
import { Link, HashRouter, Route } from 'react-router-dom';

import logo from "../../images/prpblackred.png";
import { getDevice } from '../../helpers/helperMethods';

class Header extends React.Component {

    state = {
        expandNav : false
    };
    
    device = null;
    navs = [
        "HOME",
        "ABOUT US",
        "GALLERY",
        "CLIENT"
    ]

    constructor(props) {
        super(props);
        this.device = getDevice();
    }

    componentDidMount() {
        if (window.location.hash === "#/") {
            window.location.hash = "#/home";

        }
    }

    expandNavbar = () => {
        this.setState({
            expandNav : !this.state.expandNav
        });
    }

    render = () => {
        return (
            <div className="header">
                <nav className="box-shadow">
                    <div className="flexbox">
                        <div className="flexbox" id="logo-container">
                            <HashRouter>
                                <img src={logo} alt="company-logo" className="company-logo" />   
                                <div className={"transition-navbar tab-and-up-hidden " + (this.state.expandNav ? "expand" : "")} id="main-nav-mob">
                                    <ul className={"ul-none flexbox-col " + (this.state.expandNav ? "mob-navbar" : "") }>
                                        {
                                            this.navs.map((nav,index) => {
                                                let navroute = nav.toLowerCase().replace(/[' ']/g,'')
                                                return <Route key={index} path={nav.toLowerCase()} children={({ match }) => (
                                                    <li key={index} className={ "nav-item " + (window.location.hash.startsWith("#/"+navroute) ? 'nav-item-active' : '')}>
                                                      <Link to={navroute} >{nav}</Link>
                                                    </li>
                                                  )}/>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="mob-hidden" id="main-nav">
                                    <ul className="ul-none flexbox">
                                        {
                                            this.navs.map((nav,index) => {
                                                let navroute = nav.toLowerCase().replace(/[' ']/g,'')
                                                return <Route key={index} path={nav.toLowerCase()} children={({ match }) => (
                                                    <li key={index} className={ "nav-item " + (window.location.hash.startsWith("#/"+navroute) ? 'nav-item-active' : '')}>
                                                      <Link to={navroute} >{nav}</Link>
                                                    </li>
                                                  )}/>
                                            })
                                        }
                                    </ul>
                                </div>
                            </HashRouter>
                        </div>
                        <div id="navbar-button">
                            <button id="collapse-button" className="fa fa-bars" onClick={this.expandNavbar}></button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;