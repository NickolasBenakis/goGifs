import React from 'react';

const Gif = ({ gif }) => {
	return (
		<li>
			<img src={gif.photo} alt='gif' />
		</li>
	);
};

export default Gif;
