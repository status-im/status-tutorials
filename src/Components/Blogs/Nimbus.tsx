import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

const Nimbus = () => {
    const home = useSelector((state: IStore) => state.home);
    const nimbusData: any = home.nimbusData;
    
    let loadedAll = false;
    if (nimbusData) {
        loadedAll = nimbusData.length !== 0
    }
    
    return loadedAll ? (
        <>
            <section className="news-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                {nimbusData.map((data: { url: string | undefined; title: string | undefined; published_at: string | undefined; summary: string | undefined; }, i: any) => (
                                    <li key={i}>
                                        <div className="post">
                                            <div className="meta"><time>{data.published_at}</time> / <a href="#">Nimbus</a></div>
                                            <h4><a href={data.url}>{data.title}</a></h4>
                                            <div className="author">{data.summary}</div>
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

export default Nimbus;