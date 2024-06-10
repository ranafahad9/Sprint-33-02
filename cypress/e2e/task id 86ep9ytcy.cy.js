/// <reference types="cypress" />

describe('Backend work.Task #04: BUG – TCM Status Filter is not working', () => {
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

    it('Backend work.Task #04: BUG – TCM Status Filter is not working', function () {
        // Navigate to the Transitional Care section
        cy.contains('span', 'Transitional Care')
            .should('exist')
            .click();

        // Open the TCM status filter dropdown
        cy.get('div.d-inline-flex button')
            .eq(2)
            .should('exist')
            .click();

        // Select the filter option
        cy.get('ng-select[appendto="body"] span')
            .eq(2)
            .should('exist')
            .click();

        // Choose the specific status 'In Hospital'
        cy.contains('span', 'In Hospital')
            .should('exist')
            .click();

        // Apply the filter
        cy.get('div.panel-body button')
            .should('exist')
            .click();

      
    });
});
