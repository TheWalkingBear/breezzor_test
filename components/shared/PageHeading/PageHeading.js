import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './PageHeading.module.scss';

import { Affix } from 'antd';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {Share, Bookmark, Binoculars, Account, Warning, Calendar} from '../Icons/Icons';

const PageHeading = ({data}) => {
    const {title, breadcrumbs} = data;

    useEffect(() => {
        window.addEventListener('scroll', changeTabState);

        return () => {
          window.removeEventListener('scroll', changeTabState);
        };
    }, []);
    
    const [activeTabIndex, setActiveTabIndex] = useState(null)

    const scrollToSection = (section) => {
        const id = `#${section}`;
        const yOffset = -200; 
        const element = document.querySelector(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({top: y, behavior: 'smooth'});
    }
    const changeTabState = () => {
        const sections = document.querySelectorAll('.section');

        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop - 200) {}

        if(activeTabIndex !== index) {
            setActiveTabIndex(index);
        }
    }

    return (
        <div className={s.container}>
            <div className="container">
                <div className={s.heading}>
                    <div className={s.heading__breadcrumbs}>
                        <Breadcrumbs data={breadcrumbs} />
                    </div>
                    <div className={s.heading__actions}>
                        <button className={s.heading__actions__share}>
                            <Share />
                            <span>Поделиться</span>
                        </button>
                        <button className={s.heading__actions__favorite}>
                            <Bookmark />
                            <span>В избраное</span>
                        </button>
                    </div>
                </div>
                <div className={s.title}>
                    <h1>{title}</h1>
                </div>
            </div>
            <Affix offsetTop={98}>
                <div className={s.tabs}>
                    <button className={activeTabIndex === 0 ? s.active : null} onClick={() => scrollToSection('overview')}>
                        <Binoculars className={s.overview} />
                        <span>Обзор</span>
                    </button>
                    <button className={activeTabIndex === 1 ? s.active : null} onClick={() => scrollToSection('organizer')}>
                        <Account className={s.organizer} />
                        <span>Организатор</span>
                    </button>
                    <button className={activeTabIndex === 2 ? s.active : null} onClick={() => scrollToSection('information')}>
                        <Warning className={s.info} />
                        <span>Информация</span>
                    </button>
                    <button className={activeTabIndex === 3 ? s.active : null} onClick={() => scrollToSection('dates')}>
                        <Calendar className={s.date} />
                        <span>Выбрать даты</span>
                    </button>
                </div>
            </Affix>
        </div>
    )
}

export default PageHeading;