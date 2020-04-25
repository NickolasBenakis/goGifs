import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './search';
import store from '../../redux/store';

describe('test searchbar', () => {
	beforeEach(() => {
		render(
			<Provider store={store}>
				<Search />
			</Provider>
		);
	});

	test('should be rendered ', () => {
		expect(screen.getByTestId('searchGifs')).toBeInTheDocument();
	});

	test('should change input ', async () => {
		const searchBar = screen.getByTestId('searchGifs');
		await userEvent.type(searchBar, 'nikos');
		expect(searchBar).toHaveValue('nikos');
	});
});
