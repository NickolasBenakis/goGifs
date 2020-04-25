import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Gif from '../gif/gif';
import Notification from '../notification/notification';

const GifList = () => {
	const list = useSelector((state) => state.gifs, shallowEqual);
	console.log('List render');

	if (!list) {
		return null;
	}
	if (!list.length) {
		return <Notification text='no gifs' type='is-warning' />;
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
