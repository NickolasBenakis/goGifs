import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Search from '../components/search/search';
import styles from './home.module.scss';
import GifList from '../components/gifList/gifList';
import Notification from '../components/notification/notification';
import SkeletonView from '../components/SkeletonView/SkeletonView';

const Home = () => {
	const [term, list, loader] = useSelector(
		(state) => [state.term, state.gifs, state.loader],
		shallowEqual
	);
	return (
		<div className={styles.layout}>
			<section className={styles.searchSection}>
				<Search />
			</section>
			<section className={styles.listSection}>
				{loader ? (
					<SkeletonView number={2} />
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
