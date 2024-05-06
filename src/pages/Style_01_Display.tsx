import React from "react";

// imports
import NavLinks_Style_01 from "../components/nav_links/NavLinks_Style_01.tsx";
import Navbar_Style_01 from "../components/navbars/Navbar_Style_01.tsx";
import Hero_Style_01 from "../components/Hero/Hero_Style_01.tsx";

const Style_01_Display: React.FC = () => {

    return (
        <div>
            <Navbar_Style_01/>
           <NavLinks_Style_01/>
            <Hero_Style_01/>

        </div>
    )
}

export default Style_01_Display;