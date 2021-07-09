import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './ReviewItem.module.scss';

import Person from '../Person/Person';

const ReviewItem = ({data}) => {
    const {person, text} = data;
    return (
        <div className={s.content}>
            <div className={s.content__person}>
                <Person data={person} />
            </div>
            <div className={s.content__text} dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
    )
}

export default ReviewItem;