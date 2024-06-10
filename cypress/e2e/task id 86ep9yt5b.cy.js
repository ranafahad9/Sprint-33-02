// cypress/support/commands.js (Reusable commands)

Cypress.Commands.add('navigateToPRDashboard', (dashboardName) => {
    cy.contains('small', 'Reporting').should('exist').click(); // Navigate to Reporting page
    cy.contains('span', dashboardName).should('exist').click(); // Click on specific PR dashboard
});
// cypress/integration/task_01_prcm_pr_dashboard.spec.js (Test case)
describe('Frontend work.Task # 01: PrCM PR Dashboard Integration', () => {
    beforeEach(() => {
        cy.login('/'); // Replace with appropriate login URL
    });

    afterEach(() => {
        cy.clearCookies();
    });

    it('verifies PrCM PR Dashboard elements', () => {
        const prcmLabels = ['PRCM', 'PrCM 99426', 'PrCM 99427']; // Define expected labels
        cy.navigateToPRDashboard('PR Dashboard'); // Navigate to specific PR dashboard using reusable command
    });
});
