import React from 'react';
import Gif from '../gif/gif';

const GifList = ({ list }) => {
	return (
		<ul>
			{list.map((gif, index) => {
				return <Gif key={gif.id} gif={gif} />;
			})}
		</ul>
	);
};

export default GifList;
