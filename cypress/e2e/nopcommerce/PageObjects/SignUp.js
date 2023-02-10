/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class SignUp {
  visit() {
    cy.visit("https://demo.nopcommerce.com/");
  }

  myAccount() {
    const account = cy.contains("a", "My account");
    account.click();
    const register = cy.contains("button", "Register");
    register.click();
  }

  fillFirstName(fname) {
    const firstname = cy.get(selectors.signUp.firstName);
    firstname.type(fname);
    return this;
  }
  fillLastName(lname) {
    const lastname = cy.get(selectors.signUp.lastName);
    lastname.type(lname);
    return this;
  }
  fillEmail(email) {
    const myemail = cy.get(selectors.signUp.email);
    myemail.type(email);
  }
  fillPassword(password) {
    const pswd = cy.get(selectors.signUp.password);
    pswd.type(password);
  }
  fillConfirmPassword(confirmpassword) {
    const confirmpswd = cy.get(selectors.signUp.confirmPassword);
    confirmpswd.type(confirmpassword);
  }
  Register() {
    const register = cy.get(selectors.signUp.register);
    register.click();
    const cont = cy.contains("a", "Continue");
    cont.click();
  }
}

export default SignUp;
