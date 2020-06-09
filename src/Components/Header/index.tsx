// #region Global Imports
import React, { useState } from "react";
// #endregion Global Imports

// #region Local Imports
import "./style.scss";
// #endregion Local Imports

// #region Interface Imports
import { IHeading } from "./Heading";
// #endregion Interface Imports

const Header: React.FunctionComponent<IHeading.IProps> = (): JSX.Element => {

    const [active, setActive] = useState<Number>(0);


    return (
        <section className="intro intro-news">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="inner pt-150">
                            <h1 className="mb-50">Tutorials</h1>
                            <h3 className="teaser-1">                        
                                The Status Network Tutorial Archive
                            </h3>
                            <ul className="filters">
                                <li><a href="#" className={active === 0 ? "active" : ''} onClick={() => setActive(0)}>Embark</a></li>
                                <li><a href="#" className={active === 1 ? "active" : ''} onClick={() => setActive(1)}>Nimbus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    );
};

export { Header };
