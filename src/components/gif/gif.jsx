import React from 'react';
import classNames from 'classnames';
import styles from './gif.module.scss';

const Gif = ({ gif }) => {
	const cardClass = classNames('card', [styles.cardContainer]);
	const imageClass = classNames('card-image', [styles.imageContainer]);
	return (
		<div className={cardClass}>
			<div className={imageClass}>
				<figure className='image is-4by3'>
					<img src={gif.images.original.url} alt='Placeholder' />
				</figure>
			</div>
			<div className='card-content'>
				<div className='content'>
					{gif.title}
					{/* <a>@bulmaio</a>.<a href='#'>#css</a> <a href='#'>#responsive</a> */}
					<br />
					<time dateTime={gif.import_datetime}>{gif.import_datetime}</time>
				</div>
			</div>
		</div>
	);
};

export default Gif;
