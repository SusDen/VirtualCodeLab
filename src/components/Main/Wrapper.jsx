import React from "react";
import {useMediaQuery} from "react-responsive";
import MainMobile from "./MainMobile/MainMobile";
import MainDesktop from "./MainDesktop/MainDesktop";

const Main = (props) => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    return isDesktop ? <MainDesktop/> : <MainMobile/>
}

export default Main