import React from 'react';
import Gif from '../gif/gif';
import Notification from '../notification/notification';

const GifList = ({ list = [] }) => {
	console.log('List render', list);

	if (!list.length) {
		return null;
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
