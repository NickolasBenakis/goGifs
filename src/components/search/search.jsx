import React from 'react';
import { debounce } from 'lodash';

const Search = () => {
	const [term, setTerm] = React.useState('');
	const dbSetTerm = debounce((currentTerm) => setTerm(currentTerm), 1000);
	const handleChange = (e) => {
		e.persist();
		dbSetTerm(e.target.value);
	};
	console.log('render search', term);
	return (
		<div className='control'>
			<input
				type='search'
				className='input'
				name='searchGifs'
				id='searchGifs'
				placeholder='search...'
				onChange={handleChange}
			/>
		</div>
	);
};

export default React.memo(Search);
