import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import ViewandUpdateCart from "./PageObjects/ViewandUpdateCart";
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

  it("View Wishlist", () => {
    const wishlist = new ViewandUpdateCart();
    wishlist.viewWishlist();
    cy.wait(3000);
    cy.contains('h1', 'Wishlist').should('be.visible').and('exist')
  });

  it("View and Update Shopping Cart", () => {
    const cart = new ViewandUpdateCart();
    cart.Label();
    cart.inputQuantity(data.updateQuantity);
    cart.updateCart();
    cart.continueShopping();
    cy.contains('h1', 'Search').should('be.visible')
  });
});
