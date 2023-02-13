import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import EmailtoFriend from "./PageObjects/EmailtoFriend";
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

  it("Email to Friend", () => {

    const myFriend = new EmailtoFriend();
    myFriend.visit();
    myFriend.selectFriend();
    myFriend.friendEmail(data.friendEmail);
    myFriend.personalMessage(data.friendMessage);
    myFriend.sendEmail();
    cy.contains('div', 'Your message has been sent.').should('be.visible').and('exist')
  });
});
