import React from "react";
import { HeaderNav } from "./HeaderNav";
import { HeaderMenu } from "./HeaderMenu";
import "../../css/header.css"


const Header: React.FC = () => {
    return (
        <header>
            <HeaderNav />
            <hr />
            <HeaderMenu />
            <hr />
        </header>
    )
}

export default Header;