import React from "react";
import './NavBar.css';

function NavBar({currentPage, setCurrentPage, navigationOptions}) {
    return (
        <div id="nav">
            <ul> {
                    navigationOptions.map((option) => <li key={option.key} className={
                        option.key === currentPage ? "active" : ""
                    }>
                        <button onClick={
                            () => setCurrentPage(option.key)
                        }>{option.displayName}</button>
                    </li>)
                }

            </ul>
    

        </div>
        
    );

}

export default NavBar;
