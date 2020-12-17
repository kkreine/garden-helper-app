import React, {useState} from 'react';
import LoadButton from '../Buttons/LoadButton/LoadButton';

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyling = {width:"20rem", background: "#F2F1F9", border:"none", padding:"0.5rem", margin:"1rem"};
    const [userEntry, setUserEntry] = useState('');
    return (
        <div>
            <input
                style={BarStyling}
                key="search-bar"
                value={userEntry}
                placeholder={"Search plant"}
                onChange={(ev) => setUserEntry(ev.target.value)}
            />
            <LoadButton handler={(ev) => setKeyword(userEntry)}
                        label="Search"></LoadButton>
        </div>
    );
}

export default SearchBar;