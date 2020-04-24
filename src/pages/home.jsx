import React from 'react';
import Search from '../components/search/search';
import styles from './home.module.scss';
import GifList from '../components/gifList/gifList';

const Home = () => {
	return (
		<div className={styles.layout}>
			<section className={styles.searchSection}>
				<Search />
			</section>
			<section>{/* <GifList /> */}</section>
		</div>
	);
};

export default Home;
