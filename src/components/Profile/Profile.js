import Form from '../Form/Form';

import ProfileDetails from '../ProfileDetails/ProfileDetails';

import './Profile.css';

const Profile = () => {
	return (
		<>
			<div className="profile-container">
				<section>
					<article>
						<h1 data-testid="user-profile">User Profile</h1>

						<p>Fill in your user details in the form below.</p>
					</article>

					<Form />
				</section>

				<section>
					<ProfileDetails />
				</section>
			</div>
		</>
	);
};

export default Profile;
