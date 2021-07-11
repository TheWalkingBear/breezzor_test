import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Header.module.scss';

import {Search} from '../../shared/Icons/Icons'
import Logo from '../../shared/Logo/Logo';
import Button from '../../shared/Button/Button';

import { Affix } from 'antd';

const Header = () => {
    return (
        <Affix offsetTop={0}>
            <header className={s.container}>
                <div className="container">
                    <div className={s.logo}>
                        <Logo />
                    </div>
                    <nav className={s.nav}>
                        <Link href="/">
                            <a>
                                <span>Пляжи</span>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <span>Breezzor pass</span>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <span>Впечатления</span>
                            </a>
                        </Link>
                        <Link href="/">
                            <a>
                                <span>Маршруты</span>
                            </a>
                        </Link>
                    </nav>
                    <div className={s.search}>
                        <button>
                            <Search />
                        </button>
                    </div>
                    <div className={s.action}>
                        <Button>Текст в кнопке</Button>
                    </div>
                </div>
            </header>
        </Affix>
    )
}

export default Header;