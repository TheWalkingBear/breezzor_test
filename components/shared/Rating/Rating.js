import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Rating.module.scss';

import { Like } from '../Icons/Icons';

const Rating = ({count}) => {
    return (
        <div className={s.content}>
            <Like />
            <span>{count}</span>
        </div>
    )
}

export default Rating;