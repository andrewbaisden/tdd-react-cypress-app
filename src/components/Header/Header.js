import './Header.css';

const Header = () => {
	return (
		<>
			<header>
				<div className="page-title">
					<h1 data-testid="info">Information</h1>

					<div>📝</div>
				</div>

				<div className="page-info">
					<div className="secure">🛡</div>

					<div role="alert" className="notifications">
						🔔
					</div>

					<button data-testid="confirm-btn">Confirm</button>
				</div>
			</header>
		</>
	);
};

export default Header;
