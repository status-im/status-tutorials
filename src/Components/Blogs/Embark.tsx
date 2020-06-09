import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

const Embark = () => {
    const home = useSelector((state: IStore) => state.home);
    const embarkData: any = home.embarkData
    
    let loadedAll = false;
    if (embarkData) {
        loadedAll = embarkData.length !== 0
    }

    return loadedAll ? (
        <>
            <section className="news-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                {embarkData.map((data: { url: string ; title: string ; published: string ; summary: string ; }, i: any) => (
                                    <li key={i}>
                                        <div className="post">
                                            <div className="meta"><time>{data.published.substring(0,10)}</time> / <a href="#">Embark</a></div>
                                            <h4 ><a className="post-title" href={data.url}>{data.title}</a></h4>
                                        </div>                                    
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    ) : null
}

export default Embark;