import Sidebar from './components/Sidebar/Sidebar';

import Header from './components/Header/Header';

import Profile from './components/Profile/Profile';

import './App.css';

const App = () => {
	return (
		<>
			<div data-testid="container" className="container">
				<Sidebar />

				<main>
					<Header />

					<Profile />
				</main>
			</div>
		</>
	);
};

export default App;
