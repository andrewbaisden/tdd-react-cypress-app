import './Sidebar.css';

const Sidebar = () => {
	return (
		<>
			<aside>
				<div className="profile-sidebar-container">
					<div className="profile-image">😎</div>

					<div className="profile-user">
						<p>Welcome back,</p>

						<h1>Eren Yeager</h1>
					</div>

					<button className="settings">⚙️</button>
				</div>

				<nav>
					<a href="/" data-testid="search">
						🔍 Search
					</a>

					<a href="/" data-testid="dashboard">
						🏠 Dashboard
					</a>

					<a href="/" data-testid="assets">
						💷 Assets
					</a>

					<a href="/" data-testid="business">
						💼 Business
					</a>

					<a href="/" data-testid="data">
						📈 Data
					</a>

					<a href="/" data-testid="backups">
						🛠 Backups
					</a>
				</nav>

				<div className="support-log-out">
					<a href="/" data-testid="support">
						💬 Support
					</a>

					<a href="/" data-testid="log-out">
						⇥ Log Out
					</a>
				</div>
			</aside>
		</>
	);
};

export default Sidebar;
