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

  // describe("From the home page", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //   });
  //   it("should navigate to login page", () => {
  //     cy.get('.huge').find(".right.menu");
  //     cy.get('.blue').click();
  //     cy.url().should("include", `/login`);

  //   });
  //   it("should navigate to signup page", () => {
  //     cy.get('.huge').find(".right.menu");
  //     cy.get('.blue').click();
  //     cy.get('label > a').click();
  //     cy.url().should("include", `/signup`);

  //   });
  //   it("should navigate to reset password page", () => {
  //     cy.get('.huge').find(".right.menu");
  //     cy.get('.blue').click();
  //     cy.get('.form > :nth-child(3) > a').click();
  //     cy.url().should("include", `/forgotPassword`);

  //   });

  // });

  describe("User Auth", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get('.huge').find(".right.menu");
      cy.get('.blue').click();

    });
    it("should signup ", () => {
      const email = "Test@test.com";
      const password = "password";
      
      cy.get('label > a').click();
      cy.get(':nth-child(1) > input').type(email);
      cy.get(':nth-child(2) > input').type(password);
      cy.get(':nth-child(3) > input').type(password);
      cy.get('.form > .ui').click();
      // cy.get('.message').contains("");

    });
    it("should login ", () => {
      const email = "Test@test.com";
      const password = "password";

      cy.get(':nth-child(1) > input').type(email);
      cy.get(':nth-child(2) > input').type(password);
      cy.get('.form > .ui').click();
      // cy.get('.message').contains("");
      
    });
    it("should reset password ", () => {
      const email = "Test@test.com";

      cy.get('.form > :nth-child(3) > a').click();
      cy.get(':nth-child(1) > input').type(email);
      cy.get('.form > .ui').click();
      cy.get('.message').contains("Check your inbox for further instructions");
      
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

  // describe("The Go Back button", () => {
  //   beforeEach(() => {
  //     cy.visit("/");
  //   });

  //   it("should navigate from favorites page to movie details and back", () => {
      
  //     cy.get(".card").eq(0).find("button").click();
  //     cy.get("nav").find("li").eq(3).find("a").click();
  //     cy.get(".card").eq(0).find("img").click();
  //     cy.url().should("include", `/movies/${movies[0].id}`);
  //     cy.get("h2").contains(movies[0].title);
      
  //     cy.get("svg[data-icon=arrow-circle-left]").click();

  //   });

  // });

});