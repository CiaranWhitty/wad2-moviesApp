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
  });

  // describe("From the Favorites page", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //     cy.get(".card").eq(0).find("button").click();
  //     cy.get("nav").find("li").eq(3).find("a").click();
  //   });
  //   it("should navigate to the movies detail page and change the browser URL", () => {
  //     cy.get(".card").eq(0).find("img").click();
  //     cy.url().should("include", `/movies/${movies[0].id}`);
  //     cy.get("h2").contains(movies[0].title);
  //   });
  // });

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
  //   it("should navigate from favorites page to movie details and back", () => {
      
  //     cy.get(".card").eq(0).find("button").click();
  //     cy.get("nav").find("li").eq(3).find("a").click();
  //     cy.get(".card").eq(0).find("img").click();
  //     cy.url().should("include", `/movies/${movies[0].id}`);
  //     cy.get("h2").contains(movies[0].title);
      
  //     cy.get("svg[data-icon=arrow-circle-left]").click();

  //   });
  });

});