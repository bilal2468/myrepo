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
    signin.Email(data.email);
    signin.Password(data.password);
    signin.LogIn();
  });

  it("View Wishlist", () => {
    const wishlist = new ViewandUpdateCart();
    wishlist.viewWishlist();
    cy.wait(3000);
  });

  it("View and Update Shopping Cart", () => {
    const cart = new ViewandUpdateCart();
    cart.Label();
    cart.inputQuantity(data.updateQuantity);
    cart.updateCart();
    cart.continueShopping();
  });
});
