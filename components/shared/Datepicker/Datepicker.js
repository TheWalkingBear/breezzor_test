import React, {useEffect, useState} from 'react';
import Link from "next/link";
import cn from 'classnames';
import s from './Datepicker.module.scss';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import ru from 'date-fns/locale/ru';

const Datepicker = ({data}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    return (
        <div className={s.container}>
            <DatePicker
                locale={ru}
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
            />
        </div>
    )
}

export default Datepicker;