/// <reference types="cypress" />

import MainPage from "./MainPage";

class SignInPage {
  constructor() {
    this.email = "#wpName1";
    this.password = "#wpPassword1";
    this.btnSignIn = "#wpLoginAttempt";
    cy.get(this.email);
  }

  SignIn(userName, password) {
    cy.get(this.email).type(userName, password);
    cy.get(this.password).type("Test123$");
    cy.get(this.btnSignIn).click();
    return new MainPage();
  }
}
export default SignInPage;
