///<reference types="cypress" />;

import LandingPage from "../Pages/LandingPage";

describe("test-suite-name", () => {
  var mydata = "";
  before(() => {
    cy.fixture("config").then((data) => {
      mydata = data;
    });
  });

  beforeEach(() => {
    cy.visit("https://www.wikipedia.org/");
    cy.get("#js-link-box-en").click();
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });

  it("Watchlist test", () => {
    var landingPage = new LandingPage();
    var signInPage = landingPage.NavigateToSignInPage();
    var mainPage = signInPage.SignIn(mydata.email, mydata.password);

    mainPage.SearchAndAddToWatchList();
    mainPage.RemoveFromWatchList();
    mainPage.returnToWatchLictAndValidate();
  });

  afterEach(() => {
    cy.get("input[value='Software testing']").click();
    cy.get("button[value='Remove titles']").click();
  });
});
