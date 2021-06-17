describe('User can see list of shows', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://content.viaplay.se/pc-se/serier/samtliga', {
      fixture: 'shows.json',
    });
    cy.visit('/');
  });

  describe('User can see page layout', () => {
    it('Shows page layout', () => {
      cy.get('[data-cy=header]').within(() => {
        cy.get('[data-cy=viaplay-logo]').should(
          'have.attr',
          'src',
          'https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg'
        );
      });
      cy.get('[data-cy=shows-container]').should('exist');
      cy.get('[data-cy=footer]').should('exist');
    });
  });

  describe('User can see list of shows', () => {
    it('Displays a list of shows', () => {
      cy.get('[data-cy=shows-container]').within(() => {
        cy.get('[data-cy=show-card]').should('have.length', 10);
        cy.get('[data-cy=show-card]')
          .first()
          .find('img')
          .should(
            'have.attr',
            'src',
            'https://i-viaplay-com.akamaized.net/viaplay-prod/440/976/1603974960-2dad0c0eef922590320e519ed36a633af15f49a6.jpg?width=960&height=540&template=abcstudios'
          );
      });
    });
  });
});
