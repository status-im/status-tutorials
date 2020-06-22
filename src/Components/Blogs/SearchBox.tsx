import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomeActions } from "@Actions";

const SearchBox = (data: any) => {

    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState<String>('');

    const handleChange = (e: { target: { value: React.SetStateAction<String>; }; }) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        dispatch(HomeActions.Search(keyword))
    },[keyword])

    return (
        <>
          <div>
            <input
              type="text"
              className="search-bar"
              placeholder="Author or title.."
              onChange={handleChange}
            >
            </input>
          </div>
        </>
    )
}

export default SearchBox;