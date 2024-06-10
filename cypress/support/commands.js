// Assuming you have already imported "@4tw/cypress-drag-drop" and defined the "login" custom command.

Cypress.Commands.add('login', () => {
    cy.visit('https://staging.healthforcehub.link/login');

    // Type email with a delay of 100 milliseconds between each key press
    cy.get("#defaultLoginFormEmail")
        .type("dawoodshah26@gmail.com", { delay: 100 })
        .should('have.value', 'dawoodshah26@gmail.com');

    // Type password with a delay of 100 milliseconds between each key press
    cy.get("#defaultLoginFormPassword")
        .type("Test-1", { delay: 100 })
        .should('have.value', 'Test-1');

    // Click login button
    cy.get("button")
        .contains("Login")
        .should("exist")
        .click();

    cy.log('Login button clicked');
});
