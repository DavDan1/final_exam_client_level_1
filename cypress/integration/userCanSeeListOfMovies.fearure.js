describe('User can see list of the movies', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://content.viaplay.se/pc-se/serier/samtliga', {
      fixture: 'listsOfMovies.json',
    });
    cy.visit('/');
  });

  describe('User can see the main page', () => {
    it('Shows main page', () => {
      cy.get('[data-cy=header]').within(() => {
        'have.attr',
          'src',
          'https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg';
      });
    });
    it('is expexted to show 10 movies', () => {
      cy.get('[data-cy=movie-container]').within(()=>{
        cy.get('[data-cy=movies]').should('have.length', 10)
      })
    });
    
  });
});
