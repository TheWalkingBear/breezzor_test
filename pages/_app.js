import React, {useEffect, useState} from 'react';

import '../styles/style.scss';
import 'swiper/swiper.scss';
import 'antd/lib/image/style/index.css';
import 'antd/lib/affix/style/index.css';
// import 'antd/dist/antd.css';

import 'moment/locale/ru';

const App = (props) => {
	const {Component, pageProps} = props;

	const [isLoading, setIsLoading] = useState(true)

	return <Component {...pageProps} />;
};

export default App;