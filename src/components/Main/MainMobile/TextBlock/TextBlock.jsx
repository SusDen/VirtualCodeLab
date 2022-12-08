import React from 'react';
import s from "./TextBlock.module.css"

const TextBlock = () => {
    return (
        <div className={s.main}>
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
        </div>
    );
};

export default TextBlock;