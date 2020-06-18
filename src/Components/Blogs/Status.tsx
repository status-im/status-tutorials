import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

const Status = () => {

    const home = useSelector((state: IStore) => state.home);
    const statusData: any = home.statusData;
    
    let loadedAll = false;
    if (statusData) {
        loadedAll = statusData.length !== 0
    }

    return loadedAll ? (
        <>
            <section className="news-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li key="1">
                                    <div className="post">
                                        <div className="meta"><a href="https://status.im/">Status</a></div>
                                        <h4 ><a className="post-title" href="https://status.im/technical/build_status/status_react_quickstart.html">Status-React Quickstart Guide</a></h4>
                                        <div className="author" style={{ paddingRight: '10px' }}>By <div className="author-name">robin_percy</div></div>
                                        <div className="description" style={{ paddingRight: '10px' }}>Build Status-react on your machine.</div>
                                    </div>                         
                                </li>
                                <li key="2">
                                    <div className="post">
                                        <div className="meta"><a href="https://status.im/">Status</a></div>
                                        <h4 ><a className="post-title" href="https://status.im/technical/build_status/status_go.html">Build Status-Go</a></h4>
                                        <div className="description" style={{ paddingRight: '10px' }}>Status-go is an underlying part of Status depending on go-ethereum which is forked and modified by us.</div>
                                    </div>                         
                                </li>
                                {statusData.map((data: { url: string ; title: string; published_at: string; excerpt: string; author: string;}, i: any) => (
                                    <li key={i + 2}>
                                        <div className="post">
                                            <div className="meta"><time>{data.published_at.substring(0,10)}</time> / <a href="https://nimbus.team/">Status</a></div>
                                            <h4 ><a className="post-title" href={data.url}>{data.title}</a></h4>
                                            <div className="author" style={{ paddingRight: '10px' }}>By <div className="author-name">{data.author}</div></div>
                                            <div className="description" style={{ paddingRight: '10px' }}>{data.excerpt}</div>
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

export default Status;