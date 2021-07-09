import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Place.module.scss';

import GoogleMapReact from 'google-map-react';

import { Taxi, ArrowRight } from '../../../shared/Icons/Icons';

const Place = ({data}) => {
    const {lat, lng, find_us, information} = data;
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
            position: { lat: lat, lng: lng },
            map
        });
        return marker;
    };
    return (
        <div className={s.container}>
            <div className="container">
                <div className={s.content}>
                    <div className={s.content__heading}>
                        <div className={s.content__heading__title}>
                            <span>Место проведения:</span>
                        </div>
                        <div className={s.content__heading__taxi}>
                            <button>
                                <Taxi />
                                Вызвать такси до места
                            </button>
                        </div>
                    </div>
                    <div className={s.content__map}>
                        <GoogleMapReact
                            defaultCenter={{lat: lat, lng: lng}}
                            defaultZoom={11}
                            onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                        />
                    </div>
                    <div className={s.content__info}>
                        {find_us && <div className={s.content__info__item}>
                            <div className={s.content__info__item__title}>
                                <span>Как нас найти:</span>
                            </div>
                            <div className={s.content__info__item__text}>
                                <span>{find_us}</span>
                            </div>
                            <div className={s.content__info__item__link}>
                                <a href="/" download>
                                    <span>Скачать схему ›</span>
                                    <ArrowRight />
                                </a>
                            </div>
                        </div>}
                        {information && <div className={s.content__info__item}>
                            <div className={s.content__info__item__title}>
                                <span>Подробности:</span>
                            </div>
                            <div className={s.content__info__item__text}>
                                <span>{information}</span>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Place;