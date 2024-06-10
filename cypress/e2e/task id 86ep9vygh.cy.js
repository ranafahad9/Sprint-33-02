/// <reference types="cypress" />

// Clear cookies after each test
afterEach(() => {
    cy.clearCookies();
});

// Add global uncaught exception handler
Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false prevents Cypress from failing the test on uncaught exceptions
    return false;
});

describe('Task #02: Facility Name column in Device Request – Admin App', () => {
    // Perform login before each test
    beforeEach(() => {
        cy.visit('/');
        cy.get('#defaultLoginFormEmail')
            .type('admin@ccm.com')
            .should('have.value', 'admin@ccm.com');
        cy.get('#defaultLoginFormPassword')
            .type('E5_#emWh')
            .should('have.value', 'E5_#emWh');
        cy.get('.align-items-center > .btn').click();
        cy.log('Login button clicked');
    });

    it('Task #02: Facility Name column in Device Request – Admin App', () => {

        cy.contains('small', 'RPM')
            .should('exist')
            .click();
        cy.get('a[href="/rpm-inventory/device-request"] span').eq(0)
            .should('exist')
            .click();
        cy.get('[title="Facility Name"] > .datatable-header-cell-template-wrap > .datatable-header-cell-wrapper > .datatable-header-cell-label').should('exist')
    });
});
