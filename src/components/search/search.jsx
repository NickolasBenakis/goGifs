import React from 'react';
import { debounce } from 'lodash';
import { connect } from 'react-redux';
import { changeSearchTerm } from '../../redux/actions';
import { selectCurrentTerm } from '../../redux/selectors';

const Search = ({ term, changeTerm }) => {
	const debounceSearch = debounce((value) => changeTerm(value), 500);
	const handleChange = (e) => {
		e.persist();
		debounceSearch(e.target.value);
	};

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

const mapStateToProps = (state) => ({
	term: selectCurrentTerm(state),
});

const mapDispatchToProps = (dispatch) => ({
	changeTerm: (item) => dispatch(changeSearchTerm(item)),
});

export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Search));
