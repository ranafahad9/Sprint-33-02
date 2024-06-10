/// <reference types="cypress" />

describe('Task # 11: Non billable check in Patient Profile', () => {
    // Common login before each test
    beforeEach(() => {
        cy.login('/');
        cy.wait(6000); // Wait for necessary actions to complete

        // Navigate to RPM page
        cy.contains('small', 'RPM')
            .should('exist')
            .click();

        // Add a global error handler to prevent Cypress from crashing on uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false prevents Cypress from failing the test
            return false;
        });
    });

    afterEach(() => {
        // Clear cookies after each test
        cy.clearCookies();
    });

    it('Task # 11: Non billable check in Patient Profile', function () {
        // Click on the "Patients" link
        cy.get('i.la-edit').eq(0).should('exist').click();
        cy.contains('label', 'Non Billable ').should('exist').click();




    });
});






