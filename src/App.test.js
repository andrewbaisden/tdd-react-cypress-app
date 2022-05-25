import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
	it('has a container div', () => {
		render(<App />);

		const el = screen.getByTestId('container');

		expect(el.className).toBe('container');
	});
});
