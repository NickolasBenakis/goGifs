import React from 'react';

const Gif = ({ gif }) => {
	return (
		<li>
			<h2>{gif.title}</h2>
			<img src={gif.images.original} alt='gif' />
		</li>
	);
};

export default Gif;
