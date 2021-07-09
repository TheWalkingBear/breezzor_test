import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Overview.module.scss';

const Overview = ({data}) => {
    return (
        <div className={s.container}>
            <div className="container">
                <div className={s.title}>
                    <span>Обзор тура:</span>
                </div>
                <div className={s.description} dangerouslySetInnerHTML={{ __html: data }} />
            </div>
        </div>
    )
}

export default Overview;