/// <reference types="cypress" />

describe('Task # 12: Non-Billable column in Invoice Encounter Claims', () => {
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

    it('Task # 12: Non-Billable column in Invoice Encounter Claims', function () {
        // Click on the "Patients" link
        cy.contains('small', 'Reporting').should('exist').click();
        cy.contains('span', 'Invoices').should('exist').click();
        cy.get('button[title="View"] i').eq(0).should('exist').click();
        cy.get('[title="Billing Status"] > .datatable-header-cell-template-wrap > .datatable-header-cell-wrapper > .datatable-header-cell-label').should('exist')



    });
});






