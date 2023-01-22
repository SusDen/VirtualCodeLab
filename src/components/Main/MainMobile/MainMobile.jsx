import React from 'react';
import s from "./MainMobile.module.css"
import Phone from "./Phone/Phone";
import TextBlock from "./TextBlock/TextBlock";
import ProgressBlock from "./ProgressBlock/ProgressBlock";

const MainMobile = () => {
    return (
        <div className={s.main}>
            <div className={s.projectName}>
                <div className={s.projectNameMain}>VirtualCode<span className={s.blue}>Lab</span></div>
                <div className={s.projectNameSecond}>виртуальная лаборатория и <br/> тренажер по программированию
                </div>
            </div>
            <Phone/>
            <div className={s.contentB}>
                <div className={s.contentMargin}></div>
                <div className={s.contentContainer}>
                    <TextBlock/>
                    <div className={s.contentMargin2}></div>
                    <ProgressBlock/>
                </div>
            </div>
        </div>
    );
};

export default MainMobile;