/// <reference types="cypress" />

describe('Task #09: PEM Attempts column in CCM and RPM', () => {
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

    it('Task #09: PEM Attempts column in CCM and RPM', function () {
        cy.contains('span', 'Chronic Care').should('exist').click();
        cy.get('th[aria-label="PEM Attempts: activate to sort column ascending"]').eq(0).should('exist')
        cy.get('span.role-circle-name').eq(1).should('exist').click();
        cy.get('div[aria-hidden="false"] span').should('exist').click();
        cy.contains('span', 'Remote Patients').should('exist').click();
        cy.get('th[aria-label="PEM Attempts"]').eq(0).should('exist')
        cy.get('span.role-circle-name').eq(0).should('exist').click();

    });
});








