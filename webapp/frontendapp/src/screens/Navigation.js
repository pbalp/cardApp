import React, { useState } from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import LoginScreen from './Login/LoginScreen';
import './Navigation.css';
import axios from 'axios';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';

//import './User/UserScreen.css';

const tabs = [{
    route: "/user/home",
    //icon: faHome,
    label: "Home"
},{
    route: "/user/academic",
    //icon: faSearch,
    label: "Academic"
},{
    route: "/user/calendar",
    //icon: faSearch,
    label: "Calendar"
},{
    route: "/user/profile",
    //icon: faUserCircle,
    label: "Profile"
}]

const Navigation = (navigation) => {
    //const [show, setShow] = useState(true);
    const logout = () => {
        //event.preventDefault();
        localStorage.setItem("navigation", false);

        try {
            axios({
                method: "delete",
                url: 'http://localhost:3001/api/user/logout',
                config: { headers: { "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*" } } //"Content-Type": "application/json"
            })
            .then(response => {
                console.log("Response ", response);
            })
            .catch(function(error) {
                console.log("error axios logout");
                console.log(error);
            });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light sticky-top" 	role="navigation">
                <div className="container-fluid top-nav">
                    <a className="navbar-brand" href="/user/home">
                        <img src={require('../logo.png')} className="img"/>
                    </a>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink exact="true" to="/login" className="nav-link" onClick={logout}/* element={<LoginScreen />}*/>
                                Logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </nav>
            <nav className="navbar fixed-bottom navbar-light d-block bottom-tab-nav" role="navigation"> 
                <Nav className="w-100">
                <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) =>(
                                <NavItem key={`tab-${index}`}>
                                    <NavLink to={tab.route} className="nav-link bottom-nav-link" activeclasscame="active">
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            
                                            <div className="bottom-tab-label">{tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            )) //<FontAwesomeIcon size="lg" icon={tab.icon}/>
                        }
                    </div>
                </Nav>
            </nav>
        </div>
    )
};/*{ Bottom Tab Navigator}*/ /*d-lg-none */
/*
            <nav className="navbar navbar-expand-md navbar-light sticky-top" 	role="navigation">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home">Brand</a>
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink to="/search" className="nav-link">
                                Search
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" className="nav-link">
                                Login
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </nav>
*/

/*
                    <div className=" d-flex flex-row justify-content-around w-100">
                        {
                            tabs.map((tab, index) =>(
                                <NavItem key={`tab-${index}`}>
                                    <NavLink to={tab.route} className="nav-link bottom-nav-link" activeclasscame="active">
                                        <div className="row d-flex flex-column justify-content-center align-items-center">
                                            <FontAwesomeIcon size="lg" icon={tab.icon}/>
                                            <div className="bottom-tab-label">{tab.label}</div>
                                        </div>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </div>
*/


export default Navigation;