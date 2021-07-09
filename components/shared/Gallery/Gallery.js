import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Gallery.module.scss';

import { Image } from 'antd';

import {Images} from '../Icons/Icons';

const Gallery = ({data}) => {
    return (
        <div className={s.container}>
                <div className="container">
                    <Image.PreviewGroup>
                        {data.map((item) => (
                            <div className={s.item} key={item.id}>
                                <Image src={item.image} />
                            </div>
                        ))}
                    </Image.PreviewGroup>
                </div>
        </div>
    )
}

export default Gallery;