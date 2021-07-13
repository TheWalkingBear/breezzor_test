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
import Recommendations from '../../components/pages/tour/Recommendations/Recommendations';

import s from './Home.module.scss';

import { ArrowRight } from '../../components/shared/Icons/Icons';
import Rating from '../../components/shared/Rating/Rating';
import data from '../../config/demo.json';

const Home = (props) => {
    return (
        <Layout {...props} title="Breezzor" googleMaps>
            <div className={s.tourPage}>
                <PageHeading data={data} />
                <div id="overview" className="section">
                    <Gallery data={data.gallery} />
                    <Overview data={data.overview} />
                </div>
                <div id="organizer" className="section">
                    <Organizer data={data.organizer} />
                </div>
                <div id="information" className="section">
                    <Info data={data.information} />
                </div>
                <Place data={data.place} />
                <div className={s.tourPage__review}>
                    <div className="container">
                        <div className={s.tourPage__review__heading}>
                            <div className={s.tourPage__review__heading__title}>
                                <span>Отзывы:</span>
                            </div> 
                            <div className={s.tourPage__review__heading__link}>
                                <Link href="/">
                                    <a>
                                        <div className={s.tourPage__review__heading__link__rating}>
                                            <Rating count={4.5} />
                                        </div>
                                        <span className={s.tourPage__review__heading__link}>Читать всё</span>
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
                </div>
                <div id="dates" className="section">
                    <Event data={data.event} />
                </div>
                <Recommendations data={data.recommendations} />
            </div>
        </Layout>
    );
};

export default Home;
