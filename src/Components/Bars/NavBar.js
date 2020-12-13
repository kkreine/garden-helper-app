import React from "react";

function NavBar({currentPage, setCurrentPage, navigationOptions}) {
    return (
        <div>
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
