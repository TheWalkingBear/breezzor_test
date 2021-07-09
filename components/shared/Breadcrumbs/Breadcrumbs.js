import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Breadcrumbs.module.scss';

const Breadcrumbs = ({data}) => (
    <div className={s.container}>
        {data && data.length ? (
            <div className={s.links}>
                {data.map((item, index) => 
                    item.href ? (
                        <Link href={item.href} key={index}>
                            <a>{item.name}</a>
                        </Link>
                    ) : (
                        <span key={index}>{item.name}</span>
                    )
                )}
            </div>
        ) : null}
    </div>
)

export default Breadcrumbs;