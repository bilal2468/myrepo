import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddReviews from "./PageObjects/AddReviews";
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

  it("Add Reviews", () => {
    const review = new AddReviews();
    review.visit();
    review.selectReview();
    review.addTitle(data.reviewTitle);
    review.reviewText(data.reviewText);
    review.Rating();
    review.Submit();
    // cy.get('.poll-display-text').should('have.text', 'Do you like nopCommerce?').and('be.visible')
  });
});
