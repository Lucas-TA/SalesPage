import { Outlet, Link } from "react-router-dom";
import React from 'react';
import CrwnLogo from '../../assets/crown.svg';
import './navigation-bar.styles.scss';

export default function NavigationBar() {
    return (
      <>
        <div className="navigation-bar">
            <Link className="logo-container" to='/'>
                <img src={CrwnLogo} alt="Your SVG" />
            </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                SHOP
            </Link>
            </div>
        </div>
        <Outlet />
      </>
    )
  }