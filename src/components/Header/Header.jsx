import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.companyName}>
                <span>VirtualCodeLab</span>
            </div>
            {/*<div className={s.menuList}>*/}
            {/*    <ul>*/}
            {/*        <li><a href="#">Features</a></li>*/}
            {/*        <li><a href="#">Pricing</a></li>*/}
            {/*        <li><a href="#">Community</a></li>*/}
            {/*        <li><a href="#">Support</a></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </div>
    );
}

export default Header;
