/// <reference types="cypress" />

describe('Task #03: Addition of RPM Status', () => {
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

    it('Task #03: Addition of RPM Status', function () {
     
        
        cy.contains('span', 'Remote Patients').should('exist').click();
        cy.get('table[id="rpm-datatable"] a').eq(5).should('exist').click();
        cy.contains('a', 'UnableToContact ').should('exist')
        cy.contains('a', 'Deferred ').should('exist')
        cy.contains('a', 'DeclineFurtherCare ').should('exist')

    });
});








