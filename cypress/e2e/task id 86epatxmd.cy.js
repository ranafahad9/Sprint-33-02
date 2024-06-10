/// <reference types="cypress" />

describe('UI work.Task #05: Select all messages for Cura AI', () => {
    // Common login before each test
    beforeEach(() => {
        // Login to the application
        cy.login('/');

        // Wait for necessary actions to complete (consider replacing with specific waits if possible)
        cy.wait(6000);

        // Navigate to RPM page
        cy.contains('small', 'RPM')
            .should('exist')
            .click();

        // Add a global error handler to prevent Cypress from crashing on uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test on uncaught exceptions
            return false;
        });
    });

    // Clear cookies after each test
    afterEach(() => {
        cy.clearCookies();
    });

    it('UI work.Task #05: Select all messages for Cura AI', function () {
        // Click on Cura AI icon
        cy.get('img[src="../../assets/img/ai.svg"]')
            .first()
            .should('exist')
            .click();


    
    });
});
