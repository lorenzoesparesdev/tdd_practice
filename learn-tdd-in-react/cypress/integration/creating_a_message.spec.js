describe('Creating a message', () => {
    it('Displays a message in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="messageText"]')
          .type('New message');

        cy.get('[data-testid="sendButton"')
          .click();
        
        cy.get('[data-testid="messageText"]')
          .should('have.value', '');

          cy.get('[data-testid="messageText"]')
          .type('Pokemon is better than Digimon');

        cy.get('[data-testid="sendButton"')
          .click();

          cy.get('[data-testid="messageText"]')
          .type('Digimon is better than Pokemon');

        cy.get('[data-testid="sendButton"')
          .click();
        
        cy.contains('New message');
        cy.contains('Pokemon is better than Digimon');
        cy.contains('Digimon is better than Pokemon');
    });
});