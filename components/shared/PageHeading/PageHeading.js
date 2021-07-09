import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './PageHeading.module.scss';

import { Affix } from 'antd';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {Share, Bookmark, Binoculars, Account, Warning, Calendar} from '../Icons/Icons';

const PageHeading = ({data}) => {
    const {title, breadcrumbs} = data;
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
                <Affix offsetTop={98}>
                    <div className={s.tabs}>
                        <button>
                            <Binoculars />
                            <span>Обзор</span>
                        </button>
                        <button>
                            <Account />
                            <span>Организатор</span>
                        </button>
                        <button>
                            <Warning />
                            <span>Информация</span>
                        </button>
                        <button>
                            <Calendar />
                            <span>Выбрать даты</span>
                        </button>
                    </div>
                </Affix>
            </div>
        </div>
    )
}

export default PageHeading;