let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;

describe("User-Auth-Navigation", () => {
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

  describe("From the dashboard page", () => {
    beforeEach(() => {
      const email = "Test@test.com";
      const password = "password";

      cy.visit("/");
      cy.get('.huge').find(".right.menu");
      cy.get('.blue').click();
      cy.get(':nth-child(1) > input').type(email);
      cy.get(':nth-child(2) > input').type(password);
      cy.get('.form > .ui').click();
      cy.url().should("include", `/u/dashboard`);

    });
    it("should navigate from dashboard page to update-profile page", () => {
      cy.get('.centered > :nth-child(2) > .ui').click();
      cy.url().should("include", `/u/update-profile`);

      
    });
    it("should navigate from dashboard page to update-profile page and back to the profile page", () => {

      cy.get('.centered > :nth-child(2) > .ui').click();
      cy.url().should("include", `/u/update-profile`);
      cy.get('[href="/u/dashboard"]').click();
      cy.url().should("include", `/u/dashboard`);

    });
    it("should navigate from dashboard page to trending and then log out", () => {

      cy.get('.huge').find(".right.menu");
      cy.get('.right.menu > :nth-child(1)').click().find("a").contains("Trending").click();
      cy.url().should("include", `/u/movies/trending`);
      cy.get('.big').click();
      cy.url().should("include", `/`);
      cy.get("h2").contains("Discover Movies");

    });

  })

  describe("From the Favorites page", () => {
    beforeEach(() => {
      const email = "Test@test.com";
      const password = "password";

      cy.visit("/");
      cy.get('.huge').find(".right.menu");
      cy.get('.blue').click();
      cy.get(':nth-child(1) > input').type(email);
      cy.get(':nth-child(2) > input').type(password);
      cy.get('.form > .ui').click();
      cy.url().should("include", `/u/dashboard`);
      cy.get('.left').click();
      cy.url().should("include", `/u/`);

    });
    it("should navigate to the movies detail page and change the browser URL", () => {
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h1").contains(movies[0].title);
    });
    it("should navigate from favorites page to movie details and back", () => {
      
      cy.get(".card").eq(0).find("button").click();
      cy.get('.huge').find(".right.menu");
      cy.get('.right.menu > :nth-child(2)').click().find("a").contains("Favorites").click();
      cy.url().should("include", `/u/movies/favorites`);
      cy.get(".card").eq(0).find("img").click();
      cy.url().should("include", `/movies/${movies[0].id}`);
      cy.get("h1").contains(movies[0].title);
      cy.get('.centered > .row > :nth-child(1) > .ui').click();
  
    });
  });

});