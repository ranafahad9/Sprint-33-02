// cypress/support/commands.js (Reusable commands)


Cypress.Commands.add('navigateToRPMPage', () => {
    cy.contains('small', 'RPM').should('exist').click();
});

Cypress.Commands.add('navigateToPatientsSection', () => {
    cy.get('i.la-edit').eq(0).should('exist').click(); // Select the first edit icon
});

Cypress.Commands.add('verifyInsurancePlanLabel', () => {
    cy.get('label[for="insurancePLan"]').eq(0).should('exist'); // Verify first insurance plan label
});

Cypress.Commands.add('verifyPrimaryInsuranceID', () => {
    cy.contains('label', 'Primary Insurance ID').should('exist'); // Verify first verify PrimaryInsurance ID
});

Cypress.Commands.add('verifySecondaryInsuranceID', () => {
    cy.contains('label', 'Secondary Insurance ID').should('exist'); // Verify Secondary Insurance ID
});

// cypress/integration/task_03_add_patient_form.spec.js (Test case)
describe('Task # 03: Changes in Add Patient Form', () => {
    beforeEach(() => {
        cy.login('/'); // Replace with appropriate login URL
        cy.navigateToRPMPage();
    });

    afterEach(() => {
        cy.clearCookies();
    });

    it('verifies changes in Add Patient Form - Insurance Plan Label', () => {
        // Navigate to Patients section using reusable command
        cy.navigateToPatientsSection();

        // Locally handle uncaught exceptions for this test
        cy.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught Exception:', err.message);
            return false; // Prevent Cypress from failing the test
        });

        // Verify the Insurance Plan label using reusable command
        cy.verifyInsurancePlanLabel();
        // Verify the PrimaryInsurance ID using reusable command
        cy.verifyPrimaryInsuranceID();
        // Verify the Secondary Insurance ID using reusable command
        cy.verifySecondaryInsuranceID();
    });
});
