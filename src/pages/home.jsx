import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Search from '../components/search/search';
import styles from './home.module.scss';
import GifList from '../components/gifList/gifList';

const Home = () => {
	const list = useSelector((state) => state.gifs, shallowEqual);
	return (
		<div className={styles.layout}>
			<section className={styles.searchSection}>
				<Search />
			</section>
			<section className={styles.listSection}>
				<GifList list={list} />
			</section>
		</div>
	);
};

export default Home;
