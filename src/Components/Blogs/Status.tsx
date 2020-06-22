import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";
import SearchBox from "./SearchBox";
import { filterData } from "./utils";

const Status = () => {

    const home = useSelector((state: IStore) => state.home);
    const statusData: any = home.statusData;
    const keyword: string = home.searchKeyword;
    
    let loadedAll = false;
    if (statusData) {
        loadedAll = statusData.length !== 0
    }

    let filteredData = filterData(statusData, keyword)

    return loadedAll ? (
        <>
            <section className="news-list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SearchBox/>
                            <ul>
                                {filteredData.map((data: { url: string ; title: string; published_at: string; excerpt: string; author: string;}, i: any) => (
                                    <li key={i}>
                                        <div className="post">
                                            {data.published_at ? (<div className="meta"><time>{data.published_at.substring(0,10)}</time> / <a href="https://status.im/">Status</a></div>)
                                            : (<div className="meta"><a href="https://status.im/">Status</a></div>)}
                                            <h4 ><a className="post-title" href={data.url}>{data.title}</a></h4>
                                            {data.author ?
                                               (<div className="author" style={{ paddingRight: '10px' }}>By <div className="author-name">{data.author}</div></div>) :
                                               null
                                            }
                                            
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