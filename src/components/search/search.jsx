import React from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { gifsFetchRequest, clear } from '../../redux/actions';
import Button from '../button/button';

const Search = () => {
	const inputRef = React.useRef(null);
	const dispatch = useDispatch();
	const debounceSearch = debounce((value) => {
		if (value) {
			dispatch(gifsFetchRequest(value));
		}
	}, 1000);

	const handleChange = (event) => {
		event.persist();
		debounceSearch(event.target.value);
	};

	const handleClear = () => {
		inputRef.current.value = '';
		dispatch(clear());
	};
	const inputClass = classNames('input', {});

	return (
		<div className='control'>
			<input
				ref={inputRef}
				type='text'
				className={inputClass}
				name='searchGifs'
				data-testid='searchGifs'
				placeholder='search..'
				onChange={handleChange}
			/>
			<Button
				text='clear'
				className='is-primary'
				ariaLabel='clear'
				handler={handleClear}
			/>
		</div>
	);
};

export default React.memo(Search);
