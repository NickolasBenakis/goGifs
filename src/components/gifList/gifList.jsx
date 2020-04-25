import React from 'react';
import Gif from '../gif/gif';
import Notification from '../notification/notification';

const GifList = ({ list }) => {
	console.log('List render');

	if (!list) {
		return null;
	}
	if (!list.length) {
		return <Notification text='no gifs' type='is-warning' size='small' />;
	}

	return (
		<ul>
			{list.map((gif) => {
				return <Gif key={gif.id} gif={gif} />;
			})}
		</ul>
	);
};

export default GifList;
