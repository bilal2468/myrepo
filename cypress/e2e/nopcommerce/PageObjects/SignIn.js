/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class SignIn {
  setLogIn() {
    const setLogIn = cy.contains("a", "Log in");
    setLogIn.click();
  }

  Email(email) {
    const myEmail = cy.get(selectors.signIn.email);
    myEmail.type(email);
  }

  Password(password) {
    const myPassword = cy.get(selectors.signIn.password);
    myPassword.type(password);
  }

  LogIn() {
    const logIn = cy.contains("button", "Log in");
    logIn.click();
  }
}

export default SignIn;
