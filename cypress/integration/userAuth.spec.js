let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;

describe("User-Auth", () => {

  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        movies = response.results;
      });
    
  });

  describe("User features", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('.huge').find(".right.menu");
      cy.get('.blue').click();

    });
    it("should Create an Account ", () => {
      const email = "Test@test.com"; // Change this to a random email to be successful, it will fail if ran twice
      const password = "password";
      
      cy.get('label > a').click();
      cy.get(':nth-child(1) > input').type(email);
      cy.get(':nth-child(2) > input').type(password);
      cy.get(':nth-child(3) > input').type(password);
      cy.get('.form > .ui').click();
      cy.url().should("include", `/signup`);
      cy.wait(5000)
      cy.get('.message').contains("Congratulations Account created");

    });
    it("should login ", () => {
      const email = "Test@test.com";
      const password = "password";

      cy.get(':nth-child(1) > input').type(email);
      cy.get(':nth-child(2) > input').type(password);
      cy.get('.form > .ui').click();
      cy.url().should("include", `/u/dashboard`);

      // cy.get('.message').contains("");
      
    });
    it("should reset password ", () => {
      const email = "Test@test.com";

      cy.get('.form > :nth-child(3) > a').click();
      cy.get(':nth-child(1) > input').type(email);
      cy.get('.form > .ui').click();
      cy.get('.message').contains("Check your inbox for further instructions" );
      
    });

  });

});