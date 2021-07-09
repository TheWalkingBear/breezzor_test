import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Info.module.scss';

import { Mask, Distance, Spray } from '../../../shared/Icons/Icons';

const Info = ({data}) => {
    return (
        <div className={s.container}>
            <div className="container">
                <div className="list">
                    {data.map((item, index) => (
                        <div className={s.list__item} key={index}>
                            <div className={s.list__item__title}>
                                <span>{item.title}:</span>
                            </div>
                            <div className={s.list__item__text} dangerouslySetInnerHTML={{ __html: item.text }} />
                        </div>
                    ))}
                    <div className={s.list__item}>
                        <div className={s.list__item__title}>
                            <span>Информация о COVID-19:</span>
                        </div>
                        <div className={s.list__item__covid}>
                            <ul>
                                <li><Mask />Маска обязательна</li>
                                <li><Distance />Дистанция 1,5 метра</li>
                                <li><Spray />Проводится дизинфекция</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;