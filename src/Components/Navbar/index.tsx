import React, { useState } from 'react';
import { INavbar } from "./Navbar";
import { slide as Menu } from 'react-burger-menu';
import "./style.scss";
import StatusNetwork from '../../../public/static/images/status-network-logo.svg';

const Navbar: React.FunctionComponent<INavbar.IProps> = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false)

    const closeNav = () => {
      setIsOpen(false)
    }

    return (
        <>
            <nav id="nav">
                <div className='logo-container' >
                    <a href=".">
                       <StatusNetwork/>
                    </a>
                </div >
                <Menu right disableAutoFocus pageWrapId={ "nav" } outerContainerId={ "main" } isOpen={ isOpen } >
                    <a href="https://statusnetwork.com/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        About us
                    </a>
                    <a href="https://github.com/status-im" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Github
                    </a>
                    <a href="https://our.status.im/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Blog
                    </a>
                </Menu>
            </nav>
        </>
    )
};

export { Navbar };
