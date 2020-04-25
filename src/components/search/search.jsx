import React from 'react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { gifsFetchRequest } from '../../redux/actions';

const Search = () => {
	const dispatch = useDispatch();
	const debounceSearch = debounce(
		(value) => dispatch(gifsFetchRequest(value)),
		500
	);
	const handleChange = (e) => {
		e.persist();
		debounceSearch(e.target.value);
	};
	console.log('search render');

	return (
		<div className='control'>
			<input
				type='search'
				className='input'
				name='searchGifs'
				data-testid='searchGifs'
				placeholder='search...'
				onChange={handleChange}
			/>
		</div>
	);
};

export default React.memo(Search);
