import React from 'react';
import s from "./Footer.module.css"
import mail from "../../assets/images/icon _Mail_.svg"
import telegram from "../../assets/images/icon _telegram fill_.svg"
import {useSelector} from "react-redux";

const Footer = () => {

    const {contactGlow} = useSelector((state) => state.dummy)

    let style
    if (contactGlow) {
        style = {
            boxShadow: '0 0 20px red'
        }
    } else {
        style = {}
    }


    return <div className={s.main}>
        <div className={s.textBlocks}>
            {/*<ul className={s.leftSide}>*/}
            {/*    <li><a href="#">Mobile app</a></li>*/}
            {/*    <li><a href="#">Community</a></li>*/}
            {/*    <li><a href="#">Company</a></li>*/}
            {/*</ul>*/}
            {/*<ul className={s.rightSide}>*/}
            {/*    <li><a href="#">Help desk</a></li>*/}
            {/*    <li><a href="#">Blog</a></li>*/}
            {/*    <li><a href="#">Resources</a></li>*/}
            {/*</ul>*/}
        </div>
        <div className={s.projectName}>VirtualCodeLab</div>
        <div className={s.contactButtons} id="ContactButtons">
            <div className={s.mailBlock}>
                <a href="mailto:virtcodelab@gmail.com" target="_blank">
                    <img src={mail} alt="mail" style={style}/>
                </a>
            </div>
            <div className={s.telegramBlock}>
                <a href="https://t.me/tembitt" target="_blank">
                    <img src={telegram} alt="telegram" style={style}/>
                </a>
            </div>
        </div>
    </div>
};

export default Footer;