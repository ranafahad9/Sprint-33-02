/// <reference types="cypress" />

describe('Task #07: Quick Notes Search', () => {
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

    it('Task #07: Quick Notes Search', function () {
        // Navigate to Patients section
        cy.get('[title="Patients"] > .ng-star-inserted > span')
            .should('exist')
            .click();

        // Handle uncaught exceptions locally for this test
        cy.on('uncaught:exception', (err, runnable) => {
            // Log the error and continue the test
            console.error('Uncaught Exception:', err.message);
            return false; // Prevent Cypress from failing the test
        });

        // Hover over the desired element to reveal the hover-triggered options
        cy.get('button[triggers="hover"] i')
            .eq(0)
            .trigger('mouseover');

        // Click on the pencil icon (edit action) forcefully if needed
        cy.get('i.fa-pencil')
            .eq(3)
            .should('exist')
            .click({ force: true });

        // Locate the search input, clear any existing text, and type the search term
        cy.get('input[placeholder="Search"]')
            .should('exist')
            .clear()
            .type('zia');

  
    });
});
