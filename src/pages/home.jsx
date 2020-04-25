import React from 'react';
import { useSelector } from 'react-redux';
import Search from '../components/search/search';
import styles from './home.module.scss';
import GifList from '../components/gifList/gifList';
import Notification from '../components/notification/notification';

const Home = () => {
	const [term, list, loader] = useSelector((state) => [
		state.term,
		state.gifs,
		state.loader,
	]);
	console.log('home render', term, list);
	return (
		<div className={styles.layout}>
			<section className={styles.searchSection}>
				<Search />
			</section>
			<section className={styles.listSection}>
				{loader ? (
					<span>loading</span>
				) : !list.length && term.length ? (
					<Notification size='small' text='no results' type='is-warning' />
				) : (
					<GifList list={list} />
				)}
			</section>
		</div>
	);
};

export default Home;
