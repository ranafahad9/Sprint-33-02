/// <reference types="cypress" />

describe('UI work.Task #05: Select all messages for Cura AI', () => {
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

    it('UI work.Task #05: Select all messages for Cura AI', function () {
        // Click on the "Patients" link
        cy.contains('small', 'Reporting').should('exist').click();
        cy.contains('span', 'Invoices').should('exist').click();
        cy.get('i.la-eye').eq(0).should('exist').click();
        cy.get('p.cursor-pointer strong').eq(1).should('exist').click();
        cy.get('[title="Patient Name"] > .datatable-header-cell-template-wrap').should('exist')
        cy.get('[title="Session Name"] > .datatable-header-cell-template-wrap > .datatable-header-cell-wrapper > .datatable-header-cell-label').should('exist')
        cy.get('[title="Date"] > .datatable-header-cell-template-wrap > .datatable-header-cell-wrapper > .datatable-header-cell-label').should('exist')



    });
});






