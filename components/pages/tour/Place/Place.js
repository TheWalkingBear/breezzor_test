import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Place.module.scss';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import { Taxi, ArrowRight } from '../../../shared/Icons/Icons';

const mapStyles = {
    width: '100%',
    height: '100%'
};

const Place = (props) => {
    const {lat, lng, find_us, information} = props.data;
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
                        <Map
                            google={props.google}
                            zoom={14}
                            style={mapStyles}
                            zoomControl={false}
                            fullscreenControl={false}
                            mapTypeControl={false}
                            streetViewControl={false}
                            initialCenter={
                                {
                                    lat: lat,
                                    lng: lng
                                }
                            }
                        >
                            <Marker
                                icon={{
                                    url: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20443.1%20512%22%3E%3Cpath%20fill%3D%22%234983E1%22%20d%3D%22M378.2%2064.9C336.4%2023%20280.7%200%20221.6%200%20162.4%200%20106.7%2023%2064.9%2064.9S0%20162.4%200%20221.5c0%2059.2%2023%20114.8%2064.9%20156.7l117.7%20117.7c10.4%2010.4%2024.2%2016.1%2039%2016.1%2014.7%200%2028.6-5.7%2038.9-16.1l117.7-117.7c41.8-41.8%2064.9-97.5%2064.9-156.7%200-59.1-23-114.8-64.9-156.6zM221.6%20270.8c-27.2%200-49.3-22.1-49.3-49.3%200-27.2%2022.1-49.3%2049.3-49.3%2027.2%200%2049.3%2022.1%2049.3%2049.3-.1%2027.2-22.2%2049.3-49.3%2049.3z%22%2F%3E%3Cpath%20fill%3D%22%230053D9%22%20d%3D%22M378.2%2064.9C336.4%2023%20280.7%200%20221.6%200v172.3c27.2%200%2049.3%2022.1%2049.3%2049.3%200%2027.2-22.1%2049.3-49.3%2049.3V512c14.7%200%2028.6-5.7%2038.9-16.1l117.7-117.7c41.8-41.8%2064.9-97.5%2064.9-156.7%200-59.1-23-114.8-64.9-156.6z%22%2F%3E%3C%2Fsvg%3E',
                                    anchor: new google.maps.Point(37,47),
                                    scaledSize: new google.maps.Size(37,47)
                                }}
                                position={{lat: lat, lng: lng}}
                            />
                        </Map>
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
                                    <span>Скачать схему</span>
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

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8MMg32Zt7DDzbJ7VMEWQ8LwH-rS7fEdY'
})(Place);