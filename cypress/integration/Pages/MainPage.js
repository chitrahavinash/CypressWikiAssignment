/// <reference types="cypress" />

class MainPage {
  // method to add to watchlist after searching for the article
  AddArticleToWatchList(title) {
    cy.get("#simpleSearch").type(title);
    cy.get("#searchButton").click();
    cy.get("#ca-watch").click();

    cy.get("body").then(($body) => {
      if ($body.find("button[value='Watch']").length > 0) {
        cy.get("button[value='Watch']").click();
      }
    });
  }

  // Search and add the articles to the watchlist
  SearchAndAddToWatchList() {
    //adding 2 articles to the watchlist
    this.AddArticleToWatchList("Test Automation");
    this.AddArticleToWatchList("Software Testing");
  }

  //Remove the first articles from the watchlist
  RemoveFromWatchList() {
    cy.get("#pt-watchlist a").click();
    cy.get(".oo-ui-iconElement-icon.oo-ui-icon-edit").click();

    cy.get("input[value='Test automation']").click();
    cy.get("button[value='Remove titles']").click();
  }

  //Validate if the second articles still exists in the watchlist
  returnToWatchLictAndValidate() {
    cy.get("#mw-returnto a").click();
    cy.get(".oo-ui-iconElement-icon.oo-ui-icon-edit").click();
    cy.get(
      ".oo-ui-fieldLayout-body span:nth-child(2) label a:nth-child(1)"
    ).should("have.text", "Software testing");
  }
}
export default MainPage;
