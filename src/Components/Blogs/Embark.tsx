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
                                {embarkData.map((data: { url: string ; title: string ; published: string ; author: string ; summary: string ; }, i: any) => (
                                    <li key={i}>
                                        <div className="post">
                                            <div className="meta"><time>{data.published.substring(0,10)}</time> / <a href="https://framework.embarklabs.io/">Embark</a></div>
                                            <h4 ><a className="post-title" href={data.url}>{data.title}</a></h4>
                                            <div className="author" style={{ paddingRight: '10px' }}>By <div className="author-name">{data.author}</div></div>
                                            <div className="description" style={{ paddingRight: '10px' }}>{data.summary}</div>
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