let movies;
const movieId = 497582; // Enola Holmes movie id
let reviews;

describe("Navigation", () => {
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
    cy.request(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${Cypress.env(
        "TMDB_KEY"
      )}`
    )
      .its("body")
      .then((response) => {
        console.log(response);
        reviews = response.results;
      });
  });

  describe("From the home page", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate to the movie details page and change browser URL", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.url().should("include", `/movies/${movies[1].id}`);
      cy.get("h1").contains(movies[1].title);
    });
    it("should allow navigation from site header", () => {
      cy.get('.huge').find(".right.menu");
      cy.get('.ui.item').click().find("a").contains("Upcoming").click();
      cy.url().should("include", `/movies/upcoming`);
      cy.get('.ui.item').click().find("a").contains("Trending").click();
      cy.url().should("include", `/movies/trending`);
      cy.get('.ui.item').click().find("a").contains("Top Rated").click();
      cy.url().should("include", `/movies/toprated`);

    });
    it("should navigate to login page", () => {
      cy.get('.huge').find(".right.menu");
      cy.get('.blue').click();
      cy.url().should("include", `/login`);

    });
    it("should navigate to signup page", () => {
      cy.get('.huge').find(".right.menu");
      cy.get('.blue').click();
      cy.get('label > a').click();
      cy.url().should("include", `/signup`);

    });
    it("should navigate to reset password page", () => {
      cy.get('.huge').find(".right.menu");
      cy.get('.blue').click();
      cy.get('.form > :nth-child(3) > a').click();
      cy.url().should("include", `/forgotPassword`);

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

  describe("The Go Back button", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("should navigate from home page to movie details and back", () => {
      cy.get(".card").eq(1).find("img").click();
      cy.get(".centered > .row > :nth-child(1) > .ui").click();
      cy.url().should("not.include", `/movies`);
      cy.get("h2").contains("Discover Movies");
    });
  
  });

});