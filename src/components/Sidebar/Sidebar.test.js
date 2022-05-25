import { screen, render } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('<Sidebar />', () => {
	it('has a search link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('search');
	});

	it('has a dashboard link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('dashboard');
	});

	it('has a assets link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('assets');
	});

	it('has a business link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('business');
	});

	it('has a data link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('data');
	});

	it('has a backups link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('backups');
	});

	it('has a support link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('support');
	});

	it('has a log-out link', () => {
		render(<Sidebar />);

		const el = screen.getByTestId('log-out');
	});
});
