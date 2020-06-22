import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";
import SearchBox from "./SearchBox";
import { filterData } from "./utils";

const Subspace = () => {
    const home = useSelector((state: IStore) => state.home);
    const subspaceData: any = home.subspaceData;
    const keyword: string = home.searchKeyword;
    
    let loadedAll = false;
    if (subspaceData) {
        loadedAll = subspaceData.length !== 0
    }

    let filteredData = filterData(subspaceData, keyword)

    const reduceExcerpt = (string: String) => {
        if (string.length >= 140) 
        return string.substring(0,140) + '...'
    }

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
                                            <div className="meta"><time>{data.published_at.substring(0,10)}</time> / <a href="https://nimbus.team/">Nimbus</a></div>
                                            <h4 ><a className="post-title" href={data.url}>{data.title}</a></h4>
                                            <div className="author" style={{ paddingRight: '10px' }}>By <div className="author-name">{data.author}</div></div>
                                            <div className="description" style={{ paddingRight: '10px' }}>{reduceExcerpt(data.excerpt)}</div>
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

export default Subspace;