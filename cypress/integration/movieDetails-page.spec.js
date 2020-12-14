let movieId = null
let movie;
let reviews;
describe("Movie Details Page", () => {
  before(() => {
    cy.request(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
        "TMDB_KEY"
      )}&language=en-US&include_adult=false&include_video=false&page=1`
    )
      .its("body")
      .then((response) => {
        return response.results[2].id;
      })
      .then((arbitraryMovieIdignored) => {
        movieId = arbitraryMovieIdignored
        return cy
          .request(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Cypress.env(
              "TMDB_KEY"
            )}`
          )
          .its("body");
      })
      .then((movieDetails) => {
        movie = movieDetails;
        return movieDetails.id;
      })
  });
  beforeEach(() => {
    cy.visit(`/`);
    cy.get(".card").eq(2).find("img").click();
  });

  it("should display movie title in the page header", () => {
    cy.get("h1").contains(movie.title);
  });

  it("should display the movie's details", () => {
    cy.get("h4").contains("Overview");
    cy.get("h4").next().contains(movie.overview);
    cy.get('.list')
        .within(() => {
          cy.get('.content').eq(0).should("have.text", "Runtime (min.):" + movie.runtime);
          cy.get(".content").eq(1).should("have.text", "Release Date (min.): " + movie.release_date);
        });
  });

  it("should display the Home icon with the correct URL value", () => {
    cy.get(".home")
      .parent()
      .should("have.attr", "href")
      .should("include", movie.homepage);
  });

  it("should display movie poster", () => {
    cy.get("img")
      .should("have.attr", "src")
      .should("include", movie.poster_path);
  });
  
});