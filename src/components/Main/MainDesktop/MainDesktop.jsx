import React, {useState} from "react";
import s from "./Main.module.css"
import newLogo from "../../../assets/images/Group 3.svg"
import robot from "../../../assets/images/Group 1234.png"
import mouse from "../../../assets/images/Group 14.svg"
import flag from "../../../assets/images/Flag.svg"
import scope from "../../../assets/images/scope.svg"
import puzzle from "../../../assets/images/puzzle.svg"
import Keyboard from "./Keyboard/Keyboard";
import {useDispatch} from "react-redux";
import {contatcGlowing, contatcGlowOFF} from "../../../redux/dummyReducer";
import {animateScroll as scroll} from "react-scroll";

const MainDesktop = () => {

    const dispatch = useDispatch()
    const [counter, setCouner] = useState(1)

    const scrollToBottom = () => {
        scroll.scrollToBottom();
    };

    const ContactButtonHandler = () => {
        scrollToBottom()
        dispatch(contatcGlowing())
        setTimeout(() => {
            dispatch(contatcGlowOFF())
        }, 10000)
    }

    const StartButtonHandler = () => {
        setCouner(counter + 1)
        console.log(counter)
        if (counter > 2) {
            setCouner(1)
        }
    }

    let text
    if (counter === 1) {
        text = `Ни для кого не секрет, что дети любят игры, но каждый ребёнок рано или поздно становится взрослым, и
        глубоко в душе каждого взрослого игры - это отпечаток детства, ассоциирующийсяс чем-то приятным. Но для детей,
        как и для взрослых, важны саморазвитие и образование, так как же совместить «приятное» с «полезным»?`

    } else if (counter === 2) {
        text = `Перед людьми рано или поздно встает судьбоносный выбор образования и профессии. С развитием общества - 
        информационные технологии становятся неотъемлемой частью человечества. В то же время, IT-сфера напрямую влияет 
        на рынок труда, динамичность которого курируется постоянным развитием IT-технологий, а работодатели, в свою 
        очередь, требуют от специалистов набор соответствующих навыков, точно предсказать которые невозможно.`

    } else if (counter === 3) {
        text = `Объединение обучения и игровой составляющей в одном приложении с разными IT направлениями и языками 
        программирования.
        Во-первых - увлечение детей и взрослых программированием. 
        Во-вторых - отсутствие привязанности к какому-либо языку и направлению, выбор остается за пользователем.
        В-третьих - вклад в сферу GameDev и образования.`

    }

    return (
        <div className={s.main}>
            <div className={s.projectName}>
                <span className={s.projectNameMain}>VirtualCode<span className={s.blue}>Lab</span></span>
                <span className={s.projectNameSecond}>игра-симулятор разработчика (виртуальная лаборатория
                    программирования)</span>
            </div>
            <img className={s.newLogo} src={newLogo} alt="NEW"/>
            <div className={s.contentB}>
                <div className={s.minidiv}></div>
                <div className={s.minidiv2}></div>
                <div className={s.container}>
                    <div className={s.contentA}>
                        <div className={s.blackBlock}>
                            <div className={s.blackBlock2}>
                                <img className={s.robot} src={robot} alt="robot"/>
                                <div className={s.textBlock}>

                                    <div className={s.bigText}><span><span
                                        className={s.blue}>Что</span> это такое?</span></div>
                                    <div className={s.whiteLine}></div>
                                    <div className={s.smallText}><span>{text}</span></div>
                                    <div className={s.buttons}>
                                        <a>
                                            <div className={s.startButton} onClick={StartButtonHandler}>Пуск</div>
                                        </a>
                                        <a href="#" onClick={ContactButtonHandler}>
                                            <div className={s.contactButton}>Контакты</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.contentC}>
                        <Keyboard/>
                    </div>
                    <div className={s.contentD}>
                        <div className={s.textContainer}>
                            <div className={s.bigTextContainer}>
                                <span className={s.bigText}>Основная <span className={s.pink}>информация</span></span>
                                <div className={s.whiteLine2}></div>
                                <div className={s.firstTextBlock}>
                                    <span className={s.headerText}>Цель проекта <br/><br/></span>
                                    <span className={s.smallTextBlock}>Обучение программированию и подготовка
                                        пользователей к специальности разработчика в игровом формате. Элементы юмора,
                                        музыкальное сопровождение и неожиданные ситуации скрасят геймплей игроков. </span>
                                </div>
                                <div className={s.secondTextBlock}>
                                    <span className={s.headerText}>Функционал <br/><br/></span>
                                    <span className={s.smallTextBlock}> <div className={s.miniC}/> Прохождение готовых образовательных и игровых сюжетов
                                        <br/><br/><div className={s.miniC}/> Редактор уровней - возможность создавать свои сюжеты и задачи
                                        <br/><br/><div className={s.miniC}/> Онлайн-режим -  противостояние и повышение своих навыков разработчика
                                        в реальном времени
                                        <br/><div className={s.miniCl}/> Рейтинг-таблица с решенными пользователем кейсами </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className={s.mouseImage} src={mouse} alt="mouse"/>
                        </div>

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
                </div>
            </div>
        </div>
    )
}

export default MainDesktop