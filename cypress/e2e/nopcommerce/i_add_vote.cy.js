import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddVote from "./PageObjects/AddVote";
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

  it("Add Vote", () => {
    const vote = new AddVote();
    vote.Poll();
    vote.addVote();
    cy.get('.poll-display-text').should('have.text', 'Do you like nopCommerce?')
  });

  it("View Blog", () => {
    const signup = new SignUp();
    signup.visit();
    const blog = new AddVote();
    blog.viewBlog();
    cy.contains('h1', 'Blog').should('be.visible').and('exist')
  });
});
