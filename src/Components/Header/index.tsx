import React, { useState } from "react";
import "./style.scss";
import { IHeading } from "./Heading";
import { useDispatch } from "react-redux";
import { HomeActions } from "@Actions";

const Header: React.FunctionComponent<IHeading.IProps> = (): JSX.Element => {

    const [nowActive, setNowActive] = useState<Number>(0);
    const dispatch = useDispatch();

    const getEmbark = () => {
        setNowActive(0)
        dispatch(
            HomeActions.Active(nowActive)
        );
    }

    const getNimbus = () => {
        setNowActive(1)
        dispatch(
            HomeActions.Active(nowActive)
        );
    }
 
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
                                <li key="0"><a href="#" className={nowActive === 0 ? "active" : ''} onClick={() => getEmbark()}>Embark</a></li>
                                <li key="1"><a href="#" className={nowActive === 1 ? "active" : ''} onClick={() => getNimbus()}>Nimbus</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
    );
};

export { Header };
