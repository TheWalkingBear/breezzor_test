import React, {useEffect, useState} from 'react';
import Link from "next/link";
import s from './Button.module.scss'

const Button = ({href, onClick, children}) => {
    if(href) {
        return (
            <Link href={href}>
                <a className={s.button}>
                    <span>{children}</span>
                </a>
            </Link>
        )
    } else {
        return (
            <button className={s.button} onClick={() => onClick && onClick()}>
                <span>{children}</span>
            </button>
        )
    }
}

export default Button;