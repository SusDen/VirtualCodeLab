import React, {useState} from 'react';
import s from "./Phone.module.css"
import {contatcGlowing, contatcGlowOFF} from "../../../../redux/dummyReducer";
import {useDispatch} from "react-redux";
import {animateScroll as scroll} from "react-scroll";
import robot from "../../../../assets/images/PhoneRobot.png"

const Phone = () => {
    const dispatch = useDispatch()
    const [counter, setCouner] = useState(1)
    const StartButtonHandler = () => {
        setCouner(counter + 1)
        console.log(counter)
        if (counter > 2) {
            setCouner(1)
        }
    }
    const ContactButtonHandler = () => {
        scroll.scrollToBottom();
        dispatch(contatcGlowing())
        setTimeout(() => {
            dispatch(contatcGlowOFF())
        }, 10000)
    }

    let text
    let buttonText
    if (counter === 1) {
        text = `Ни для кого не секрет, что дети любят игры, но каждый ребёнок рано или поздно становится взрослым, и
        глубоко в душе каждого взрослого игры - это отпечаток детства, ассоциирующийсяс чем-то приятным. Но для детей,
        как и для взрослых, важны саморазвитие и образование, так как же совместить «приятное» с «полезным»?`
        buttonText = `Пуск`
    } else if (counter === 2) {
        text = `Перед людьми рано или поздно встает судьбоносный выбор образования и профессии. С развитием общества - 
        информационные технологии становятся неотъемлемой частью человечества. В то же время, IT-сфера напрямую влияет 
        на рынок труда, динамичность которого курируется постоянным развитием IT-технологий, а работодатели, в свою 
        очередь, требуют от специалистов набор соответствующих навыков, точно предсказать которые невозможно.`
        buttonText = `Далее`
    } else if (counter === 3) {
        text = `Объединение обучения и игровой составляющей в одном приложении с разными IT направлениями и языками 
        программирования.
        Во-первых - увлечение детей и взрослых программированием. 
        Во-вторых - отсутствие привязанности к какому-либо языку и направлению, выбор остается за пользователем.
        В-третьих - вклад в сферу GameDev и образования.`
        buttonText = `Далее`
    }
    return (
        <div>

            <div className={s.main}>
                <div className={s.phoneBlock}>
                    <div className={s.blackPhoneBlock}>
                        <div className={s.blueLine}></div>
                        <div className={s.circleSmall}></div>
                        <div className={s.circleBig}></div>
                        <div className={s.phoneTextBlock}>
                            <div className={s.bigText}><span className={s.blue}>Что</span> это такое?</div>
                            <div className={s.whiteLine}></div>
                            <div className={s.smallText}>{text}</div>
                            <div className={s.buttons}>
                                <div className={s.startButton} onClick={StartButtonHandler}>{buttonText}</div>
                                <div className={s.contactButton} onClick={ContactButtonHandler}>Контакты</div>
                            </div>
                            <div className={s.robotImage}>
                                <img src={robot} alt="robot"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Phone;