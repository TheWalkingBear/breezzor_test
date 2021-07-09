import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Layout from '../../layouts/default';

import PageHeading from '../../components/shared/PageHeading/PageHeading';
import Gallery from '../../components/shared/Gallery/Gallery';
import Overview from '../../components/pages/tour/Overview/Overview';
import Organizer from '../../components/pages/tour/Organizer/Organizer';
import Info from '../../components/pages/tour/Info/Info';
import Place from '../../components/pages/tour/Place/Place';
import ReviewItem from '../../components/shared/ReviewItem/ReviewItem';
import Event from '../../components/pages/tour/Event/Event';
import s from './Home.module.scss';

import { Like, ArrowRight } from '../../components/shared/Icons/Icons';
import data from '../../config/demo.json';

const Home = (props) => {
    return (
        <Layout {...props} title="Breezzor" googleMaps>
            <div className={s.tourPage}>
                <PageHeading data={data} />
                <Gallery data={data.gallery} />
                <Overview data={data.overview} />
                <Organizer data={data.organizer} />
                <Info data={data.information} />
                <Place data={data.place} />
                <div className={s.tourPage__review}>
                    <div className={s.tourPage__review__heading}>
                        <div className={s.tourPage__review__heading__title}>
                            <span>Отзывы:</span>
                        </div> 
                        <div className={s.tourPage__review__heading__link}>
                            <Link href="/">
                                <a>
                                    <div className={s.tourPage__review__heading__link__like}>
                                        <Like />
                                    </div>
                                    <span>Читать всё</span>
                                    <div className={s.tourPage__review__heading__link__like__arrow}>
                                        <ArrowRight />
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className={s.tourPage__review__content}>
                        <ReviewItem data={data.review} />
                    </div>
                </div>
                <Event data={data.event} />
            </div>
        </Layout>
    );
};

export default Home;
