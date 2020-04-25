import React from 'react';
import classNames from 'classnames';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { gifsFetchRequest, clear } from '../../redux/actions';
import Button from '../button/button';

const Search = () => {
	const inputRef = React.useRef(null);
	const dispatch = useDispatch();
	const debounceSearch = debounce(
		(value) => dispatch(gifsFetchRequest(value)),
		450
	);
	const handleChange = (e) => {
		e.persist();
		if (e.target.value !== '' && e.target.value.length < 2) {
			e.target.classList.add('is-danger');
		} else {
			e.target.classList.remove('is-danger');
			e.target.classList.add('is-success');
		}
		if (e.target.value === '' || e.target.value.length < 2) return;
		debounceSearch(e.target.value);
	};
	const handleClicks = (e) => {
		e.persist();
		console.log(e.keyCode);
	};
	const handleClear = (e) => dispatch(clear());
	const inputClass = classNames('input', {});

	return (
		<div className='control'>
			<input
				ref={inputRef}
				type='search'
				className={inputClass}
				name='searchGifs'
				data-testid='searchGifs'
				placeholder='search..'
				onChange={handleChange}
				onKeyDown={handleClicks}
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
