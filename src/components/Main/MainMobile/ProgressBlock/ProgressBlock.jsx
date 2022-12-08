import React from 'react';
import s from "./ProgressBlock.module.css"
import scope from "../../../../assets/images/scope.svg";
import puzzle from "../../../../assets/images/puzzle.svg";
import flag from "../../../../assets/images/Flag.svg";

const ProgressBlock = () => {
    return (
        <div className={s.main}>
            <div className={s.progress}>
                <div className={s.progress2}>
                    <div className={`${s.firstProgressBlock} ${s.progressBlock}`}>
                        <div className={s.imgBack}></div>
                        <img className={s.imgProg} src={scope} alt="flag"/>
                        <div className={s.progTextContainer}>
                            <div className={s.progBigText}>Команда проекта</div>
                            <div className={s.progSmallText}>заполненность</div>
                            <div className={s.progressBar}>
                                <div className={s.progressBarrProgress}>
                                </div>
                            </div>
                            <div className={s.progressPrecent}>100%</div>
                        </div>
                    </div>
                    <div className={`${s.secondProgressBlock} ${s.progressBlock}`}>
                        <div className={s.imgBack}></div>
                        <img className={s.imgProg} src={puzzle} alt="flag"/>
                        <div className={s.progTextContainer}>
                            <div className={s.progBigText}>Работа над идеей</div>
                            <div className={s.progSmallText}>формирование</div>
                            <div className={s.progressBar}>
                                <div className={s.progressBarrProgress}>
                                </div>
                            </div>
                            <div className={s.progressPrecent}>90%</div>
                        </div>
                    </div>
                    <div className={`${s.thirdProgressBlock} ${s.progressBlock}`}>
                        <div className={s.imgBack}></div>
                        <img className={s.imgProg} src={flag} alt="flag"/>
                        <div className={s.progTextContainer}>
                            <div className={s.progBigText}>Продукт</div>
                            <div className={s.progSmallText}>выполнено</div>
                            <div className={s.progressBar}>
                                <div className={s.progressBarrProgress}>
                                </div>
                            </div>
                            <div className={s.progressPrecent}>20%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBlock;