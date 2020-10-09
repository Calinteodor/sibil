import React from "react";
import PropTypes from "prop-types";

function Header({name}){
    return (
        <h1 className="page-title">
            {name}
        </h1>
    )
}

Header.propTypes = {
    name: PropTypes.string.isRequired
};

export default Header;