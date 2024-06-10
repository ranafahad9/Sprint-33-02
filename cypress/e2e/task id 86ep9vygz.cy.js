// cypress/support/commands.js (Reusable commands)


Cypress.Commands.add('navigateToRPMPage', () => {
    cy.contains('small', 'RPM').should('exist').click();
});

Cypress.Commands.add('navigateToTCMDashboard', () => {
    cy.contains('span', 'Transitional Care').should('exist').click();
});

Cypress.Commands.add('verifyTCMDashboardSummary', () => {
    cy.get('strong').contains('Active TCM Patients').should('exist');
    cy.get('small').contains('In Process').should('exist');
    cy.get('small').contains('In Hospital').should('exist');
    cy.get('p').contains('Init Comm.').should('exist');
    cy.get('p').contains('Discharge Form').should('exist');
    cy.get('p').contains('Non Face to Face').should('exist');
    cy.get('p').contains('Face to Face').should('exist');
    
});

// cypress/integration/task_02_tcm_dashboard_summary.spec.js (Test case)
describe('Task # 02: TCM Dashboard Summary', () => {
    beforeEach(() => {
        cy.login('/'); // Replace with appropriate login URL
        cy.navigateToRPMPage();
        cy.navigateToTCMDashboard(); // Navigate to TCM dashboard in a separate command
    });

    afterEach(() => {
        cy.clearCookies();
    });

    it('verifies TCM Dashboard Summary elements', () => {
        // Verify all summary elements using reusable command
        cy.verifyTCMDashboardSummary();
    });
});
