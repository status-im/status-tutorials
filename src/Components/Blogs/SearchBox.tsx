import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { HomeActions } from "@Actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
            <div style={{ display: 'inline-flex', alignItems: 'center', marginTop: '25px', marginBottom: '10px' }}>
              <div>
                <FontAwesomeIcon icon={faSearch} color="grey" className="searchIcon"/>
              </div>
              <div>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Author or title.."
                  onChange={handleChange}
                >
                </input>
              </div>
            </div>
          

        </>
    )
}

export default SearchBox;