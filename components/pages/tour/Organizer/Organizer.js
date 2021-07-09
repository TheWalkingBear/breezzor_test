import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Organizer.module.scss';

import dateFormat from '../../../../scripts/dateFormat';
import { Confirmation } from '../../../shared/Icons/Icons';
import Person from '../../../shared/Person/Person';

const Organizer = ({data}) => {
    const {name, image, confirmed, description, date} = data;
    return (
        <div className={s.container}>
            <div className="container">
                <div className={s.heading}>
                    <div className={s.heading__title}>
                        <span>Организатор:</span>
                    </div>
                    {confirmed && <div className={s.heading__confirmed}>
                        <Confirmation />
                        <span>Личность подтверждена</span>
                    </div>}
                </div>
                <div className={s.content}>
                    <div className={s.content__person}>
                        <Person data={{name, image, date}} />
                    </div>
                    {description !== null && <div className={s.content__description} dangerouslySetInnerHTML={{ __html: description}} />}
                </div>
            </div>
        </div>
    )
}

export default Organizer;