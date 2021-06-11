import React from 'react';
import { NavBar, Img, NavBarItems, MenuCont } from "./Style";
import { useHistory, useLocation } from "react-router-dom";
import Bellotero from "../../img/bellotero.svg";

const Navbar = ({ MenuItems }) => {
    const history = useHistory();
    const { pathname } = useLocation();

    const onChange = (route) => {
        if(route.includes("#") || pathname.includes(route)) return;
        history.push(route);
    }

    console.log(window.screen.width)

    return (
        <NavBar>
            <div>
                <Img src={Bellotero} alt="Bellotero.io img" />
            </div>
            <MenuCont>
            {
                MenuItems.map(({text, route}, index) => 
                    <NavBarItems 
                        key={index} 
                        onClick={() => onChange(route)}
                        $isSelected={pathname.includes(route)}
                    >
                        {text}
                    </NavBarItems>
                )
            }
            </MenuCont>
        </NavBar>
    );
};

export default Navbar;