import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Footer.module.scss';

import { Planet, Facebook, Instagram, Twitter } from '../../shared/Icons/Icons';

const Footer = () => {
    return (
        <footer className={s.container}>
            <div className="container">
                <div className={s.nav}>
                    <div className={s.nav__item}>
                        <div className={s.nav__item__title}>
                            <Link href="/">
                                <a>
                                    <span>О компании</span>
                                </a>
                            </Link>
                        </div>
                        <div className={s.nav__item__links}>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Кто мы</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Что мы делаем</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Команда</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.nav__item}>
                        <div className={s.nav__item__title}>
                            <Link href="/">
                                <a>
                                    <span>Для бизнеса</span>
                                </a>
                            </Link>
                        </div>
                        <div className={s.nav__item__links}>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Добавить пляжи</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Добавить услуги</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.nav__item}>
                        <div className={s.nav__item__title}>
                            <Link href="/">
                                <a>
                                    <span>Поддержка</span>
                                </a>
                            </Link>
                        </div>
                        <div className={s.nav__item__links}>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Связаться с нами</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Пользовательское соглашение</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Политика конфиденциальности</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Публичная оферта для поставщиков</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.nav__item}>
                        <div className={s.nav__item__title}>
                            <Link href="/">
                                <a>
                                    <span>Карьера</span>
                                </a>
                            </Link>
                        </div>
                        <div className={s.nav__item__links}>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Присоединиться к команде</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Список вакансий</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={s.nav__item}>
                        <div className={s.nav__item__title}>
                            <Link href="/">
                                <a>
                                    <span>Пресс-центр</span>
                                </a>
                            </Link>
                        </div>
                        <div className={s.nav__item__links}>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>
                                            <span>Подписка на пресс-релизы</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.bottom}>
                    <div className={s.bottom__copyright}>
                        <span>&copy; 2021 Breezzor inc. All rights reserved</span>
                    </div>
                    <div className={s.bottom__lang}>
                        <button>
                            <Planet />
                            <span>Русский (RU)</span>
                        </button>
                    </div>
                    <div className={s.bottom__social}>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>
                                        <Facebook />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>
                                        <Instagram />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>
                                        <Twitter />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;