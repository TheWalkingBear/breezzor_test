import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './TourCard.module.scss';

import { Bookmark, Location, Like } from '../Icons/Icons';

const TourCard = ({slug, name, image, short_description, cost, location, duration, rating, best_offer}) => {
    return (
        <div className={s.content}>
            <div className={s.heading}>
                {image !== null && <div className={s.heading__image}>
                    <Link href="/">
                        <a>
                            <img src={image} />
                        </a>
                    </Link>
                </div>}
                {best_offer && <div className={s.tag}>
                    <span>Best offer</span>
                </div> }
                <button className={s.toFavorites}>
                    <Bookmark />
                </button>
                <div className={s.heading__location}>
                    <Location />
                    <span>{location}</span>
                </div>
            </div>
            <div className={s.description}>
                <div className={s.description__title}>
                    <Link href="/">
                        <a>
                            <span>{name}</span>
                        </a>
                    </Link>
                </div>
                <div className={s.description__details}>
                    <div className={s.description__details__cost}>
                        <span>{cost}</span>
                    </div>
                    <div className={s.description__details__rating}>
                        <Like />
                        <span>{rating}</span>
                    </div>
                </div>
                <div className={s.description__duration}>
                    <span>Duration: {duration}</span>
                </div>
                <div className={s.description__text}>
                    <span>{short_description}</span>
                </div>
            </div>
        </div>
    )
}

export default TourCard;