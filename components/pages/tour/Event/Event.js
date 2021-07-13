import React, {useEffect, useState} from 'react';
import Image from 'next/image'
import cn from 'classnames';
import s from './Event.module.scss';

import { Lotus, Clock, Persons, Included, Dialogue } from '../../../shared/Icons/Icons';
import Button from '../../../shared/Button/Button';
import Datepicker from '../../../shared/Datepicker/Datepicker';

const Event = ({data}) => {
    const {title, description, image, duration, people, included, languages, cost, free_cancellation} = data;
    return (
        <div className={s.container}>
            <div className="container">
                <div className={s.content}>
                    {image !== null && <div className={s.content__image}>
                        <div className={s.content__image__discount}>
                            <div className={s.content__image__discount__content}>
                                <Lotus />
                                <span>– 30 OFF</span>
                            </div>
                        </div>
                        <div className={s.content__image__content} dangerouslySetInnerHTML={{ __html: image}}></div>
                    </div>}
                    <div className={s.content__about}>
                        <div className={s.content__about__title}>
                            <span>{title}</span>
                        </div>
                        <div className={s.content__about__description}>
                            <p>{description}</p>
                        </div>
                        <div className={s.content__about__details}>
                            <div className={s.content__about__details__date}>
                                <Datepicker />
                                <div className={s.content__about__details__cost}>
                                    <span>от {cost.toLocaleString()} ₽ / Чел.</span>
                                </div>
                            </div>
                            <div className={s.content__about__details__info}>
                                <div className={s.content__about__details__info__items}>
                                    {duration !== null && <div className={s.content__about__details__info__item}>
                                        <Clock className={s.duration} />
                                        <span>{duration}</span>
                                    </div>}
                                    {people !== null && <div className={s.content__about__details__info__item}>
                                        <Persons className={s.people} />
                                        <span>{people}</span>
                                    </div>}
                                    {included !== null && <div className={s.content__about__details__info__item}>
                                        <Included className={s.included} />
                                        <span><strong>Что включено:</strong> {included}</span>
                                    </div>}
                                    {languages !== null && <div className={s.content__about__details__info__item}>
                                        <Dialogue className={s.languages} />
                                        <span><strong>Языки тура:</strong> {languages}</span>
                                    </div>}
                                </div>
                                {free_cancellation && <div className={s.content__about__details__info__cancellation}>
                                    <span>Бесплатная отмена</span>
                                </div>}
                                <div className={s.content__about__details__info__button}>
                                    <Button rounded dark>Текст в кнопке</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;