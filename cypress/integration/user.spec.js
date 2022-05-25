describe('user form flow', () => {
	beforeEach(() => {
		cy.viewport(1600, 900);
		cy.visit('http://localhost:3000/');
	});

	it('user can save form', () => {
		// save form data

		cy.get('input[name="firstName"]').type('Eren');

		cy.get('input[name="lastName"]').type('Yeager');

		cy.get('input[name="email"]').type('erenyeager@gmail.com');

		cy.get('input[name="career"]').type('Attack Titan');

		cy.get('textarea[name="bio"]').type('Hello there my name is Eren Yeager!');

		cy.get('input[name="save"]').click();
	});
});
