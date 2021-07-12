import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Info.module.scss';

import { Mask, Distance, Spray, ArrowRight } from '../../../shared/Icons/Icons';

const Info = ({data}) => {
    return (
        <div className={s.container}>
            <div className="container">
                <div className={s.title}>
                    <span>Важная информация</span>
                </div>
                <div className={s.list}>
                    {data.map((item, index) => (
                        <div className={s.list__item} key={index}>
                            <div className={s.list__item__title}>
                                <span>{item.title}:</span>
                            </div>
                            <div className={s.list__item__text} dangerouslySetInnerHTML={{ __html: item.text }} />
                            {item.link && <div className={s.list__item__link}>
                                <Link href={item.link}>
                                    <a>
                                        <span>Подробнее</span>
                                        <ArrowRight />
                                    </a>
                                </Link>
                            </div>}
                        </div>
                    ))}
                    <div className={s.list__item}>
                        <div className={s.list__item__title}>
                            <span>Информация о COVID-19:</span>
                        </div>
                        <div className={s.list__item__covid}>
                            <ul>
                                <li><Mask className={s.mask} />Маска обязательна</li>
                                <li><Distance className={s.distance} />Дистанция 1,5 метра</li>
                                <li><Spray className={s.spray} />Проводится дизинфекция</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;