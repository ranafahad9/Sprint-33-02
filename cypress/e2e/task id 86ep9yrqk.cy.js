/// <reference types="cypress" />

describe('UI work.Task #03: No Chronic Condition in Filter', () => {
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

    it('UI work.Task #03: No Chronic Condition in Filter', function () {
        cy.contains('span', 'Chronic Care').should('exist').click();
        cy.get('button[title="Filter"]').should('exist').click();
        cy.get('ng-select[placeholder="Select chronic Condition"] input').should('exist').click();
        cy.contains('span', 'No Chronic Condition').should('exist')
    

    });
});








