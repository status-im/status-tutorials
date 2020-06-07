import React, { FunctionComponent, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IStore } from "@Redux/IStore";

const Embark = () => {
    const home = useSelector((state: IStore) => state.home);
    const embarkData: any = home.embarkData
    
    let loadedAll = embarkData.length !== 0

    return loadedAll ? (
        <>
            <div>Embark</div>
            <div>
                {embarkData.map((data: { url: string | undefined; title: React.ReactNode; }) => (
                    <a href={data.url}><div>
                    {data.title}
                    </div></a>
                ))}
            </div>
        </>
    ) : null
}

export default Embark;