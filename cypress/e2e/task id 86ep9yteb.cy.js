// cypress/support/commands.js (Reusable commands)
Cypress.Commands.add('navigateToReportingPage', () => {
    cy.contains('small', 'Reporting').should('exist').click();
});

Cypress.Commands.add('navigateToHESPRDashboard', () => {
    cy.contains('span', 'PR Dashboard').should('exist').click();
});

Cypress.Commands.add('verifyHESPRDashboardElements', () => {
    cy.get('strong').contains('HES').should('exist');
    cy.get('strong').contains('CHI G0019').should('exist');
    cy.get('strong').contains('CHI G0022').should('exist');
    cy.get('strong').contains('PIN G0023').should('exist');
    cy.get('strong').contains('PIN G0024').should('exist');
    cy.get('strong').contains('PIN-P G0140').should('exist');
    cy.get('strong').contains('PIN-P G0146').should('exist');
    cy.get('div[id="myBoundsId"] canvas').should('exist');
});

// cypress/integration/task_01_hes_pr_dashboard.spec.js (Test case)
describe('Frontend work.Task # 01: HES PR Dashboard Integration', () => {
    beforeEach(() => {
        cy.login('/'); // Replace with appropriate login URL
        cy.navigateToReportingPage(); // Navigate to Reporting page in a separate command
        cy.navigateToHESPRDashboard(); // Navigate to HES PR Dashboard in a separate command
    });

    afterEach(() => {
        cy.clearCookies();
    });

    it('verifies HES PR Dashboard elements', () => {
        // Verify all dashboard elements using reusable command
        cy.verifyHESPRDashboardElements();
    });
});
