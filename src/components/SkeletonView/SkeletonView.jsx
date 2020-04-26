import React from 'react';
import { Instagram } from 'react-content-loader';
import styles from './SkeletonView.module.scss';

const SkeletonView = ({ number = 1 }) => {
	const renderer = new Array(number).fill(true);
	return (
		<>
			{renderer.map((view, index) => {
				return (
					<Instagram
						key={Date.now()}
						animate='true'
						speed={1}
						backgroundOpacity='0.9'
						foregroundColor='#ededed'
						className={styles.loader}
					/>
				);
			})}
		</>
	);
};

export default SkeletonView;
