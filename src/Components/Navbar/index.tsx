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
                    <a href="https://statusnetwork.com/">
                       <StatusNetwork/>
                    </a>
                </div >
                <Menu right disableAutoFocus pageWrapId={ "nav" } outerContainerId={ "main" } isOpen={ isOpen } >
                    <a href="https://statusnetwork.com/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Status Network
                    </a>                    
                    <a href="https://status.im/docs/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Status Docs
                    </a>
                    <a href="https://keycard.tech/docs/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Keycard Docs
                    </a>
                    <a href="https://framework.embarklabs.io/docs/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Embark Docs
                    </a>
                    <a href="https://nimbus.team/docs/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Nimbus Docs
                    </a>
                    <a href="https://vac.dev/research-log/" target="_blank" rel="noopener noreferrer" onClick={closeNav}>
                        Vac Research Log
                    </a>
                </Menu>
            </nav>
        </>
    )
};

export { Navbar };
