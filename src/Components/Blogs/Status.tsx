import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

const Status = () => {

    return (
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
                                <li key="3">
                                    <div className="post">
                                        <div className="meta"><a href="https://status.im/">Status</a></div>
                                        <h4 ><a className="post-title" href="https://our.status.im/reproducable-builds-with-nix/">Reproducible Builds with Nix</a></h4>
                                        <div className="author" style={{ paddingRight: '10px' }}>By <div className="author-name">Jakub Sokołowski</div></div>
                                        <div className="description" style={{ paddingRight: '10px' }}>Nix is a tool which uses a subset of Haskel programming language to define the entire tree of software dependencies necessary to manage an entire Linux operating system: NixOS.</div>
                                    </div>                         
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Status;