import React, { FunctionComponent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

const Nimbus = () => {
    const home = useSelector((state: IStore) => state.home);
    const nimbusData: any = home.nimbusData
    
    let loadedAll = nimbusData.length !== 0

    return loadedAll ? (
        <>
            <div>Nimbus</div>
            <div>
                {nimbusData.map(data => (
                    <a href={data.url}><div>
                        {data.title}
                    </div></a>
                ))}
            </div>
        </>
    ) : null
}

export default Nimbus;