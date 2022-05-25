import { useState } from 'react';

import './Form.css';

const Form = () => {
	const [firstName, setFirstName] = useState('');

	const [lastName, setLastName] = useState('');

	const [email, setEmail] = useState('');

	const [career, setCareer] = useState('');

	const [bio, setBio] = useState('');

	const [data, setData] = useState('');

	const formSubmit = (e) => {
		e.preventDefault();

		const user = {
			firstName: firstName,

			lastName: lastName,

			email: email,

			career: career,

			bio: bio,
		};

		const formData = JSON.stringify(user);

		console.log(formData);

		setData(formData);

		clearForm();
	};

	const clearForm = () => {
		setFirstName('');

		setLastName('');

		setEmail('');

		setCareer('');

		setBio('');
	};

	return (
		<>
			<div>
				<form onSubmit={formSubmit} className="profile-details-form-container">
					<div>
						<label data-testid="firstname">First Name</label>

						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							placeholder="First Name"
						/>
					</div>

					<div>
						<label data-testid="lastname">Last Name</label>

						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							placeholder="Last Name"
						/>
					</div>

					<div>
						<label data-testid="email">Email</label>

						<input
							type="text"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
						/>
					</div>

					<div>
						<label data-testid="career">Career</label>

						<input
							type="text"
							name="career"
							value={career}
							onChange={(e) => setCareer(e.target.value)}
							placeholder="Career"
						/>
					</div>

					<div>
						<label data-testid="bio">Bio</label>

						<textarea name="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio"></textarea>
					</div>

					<div>
						<input name="save" type="submit" value="Save" />
					</div>
				</form>

				<div className="form-output">
					<p>Output</p>

					<div>{data}</div>
				</div>
			</div>
		</>
	);
};

export default Form;
