import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import ViewandUpdateCart from "./PageObjects/ViewandUpdateCart";

describe("nop commerce", () => {
  beforeEach(() => {
    const signup = new SignUp();
    signup.visit();
    const signin = new SignIn();
    signin.setLogIn();
    signin.Email("bilalnadeem11@gmail.com");
    signin.Password("bilal2468");
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
    cart.inputQuantity("5");
    cart.updateCart();
    cart.continueShopping();
  });
});
