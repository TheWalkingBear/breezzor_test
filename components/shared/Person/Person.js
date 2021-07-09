import React from 'react';
import s from './Person.module.scss';

import dateFormat from '../../../scripts/dateFormat';

const Person = ({data}) => {
    const {name, image, date} = data;
    return (
        <div className={s.person}>
            {image && <div className={s.person__photo} style={{ backgroundImage: `url(${image})`}} />}
            <div className={s.person__about}>
                <div className={s.person__about__name}>
                    <span>{name}</span>
                </div>
                <div className={s.person__about__date}>
                    <span>На сайте с {dateFormat(date)} г.</span>
                </div>
            </div>
        </div>
    )
}

export default Person;