import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddtoCart from "./PageObjects/AddtoCart";
import data from "../../fixtures/data.json";

describe("nop commerce", () => {
  beforeEach(() => {
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

  it("Search Product", () => {
    const searchproduct = new AddtoCart();
    searchproduct.searchProduct();
    cy.contains('h1', 'Search').should('be.visible')
  });

  it("Add to Cart", () => {
    const cart = new AddtoCart();
    cart.selectProduct();
    cart.viewReviews();
    cy.go("back");
    cart.addToWishlist();
    cart.enterQuantity(data.cartQuantity);
    // cy.wait(3000);
    cy.contains('p', 'The product has been added to your ').should('be.visible').and('exist')
    cart.addToCart();
    cy.wait(2000);
    cy.contains('p', 'The product has been added to your ').should('be.visible').and('exist')
  });
});
