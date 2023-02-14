import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import ContactUs from "./PageObjects/ContactUs";
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

  it("Contact Us", () => {
    const contact = new ContactUs();
    contact.Contact();
    contact.Enquiry(data.enquiry);
    contact.Submit();
    cy.contains('div', 'Your enquiry has been successfully sent to the store owner.').should('be.visible').and('exist')
  });
});
