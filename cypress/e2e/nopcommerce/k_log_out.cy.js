import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import LogOut from "./PageObjects/LogOut";
import data from "../../fixtures/data.json";

describe("nop commerce", () => {
  before(() => {
    const signup = new SignUp();
    signup.visit();
    const signin = new SignIn();
    signin.setLogIn();
    cy.url().should('include', 'demo.nopcommerce')
    signin.Email(data.email);
    signin.Password(data.password);
    signin.LogIn();
    cy.contains('a', 'Log out').should('be.visible').and('exist')
  });

  it("Logout", () => {
    const log = new LogOut();
    log.Out();
    cy.url().should('include', 'demo.nopcommerce.com')
  });
});
