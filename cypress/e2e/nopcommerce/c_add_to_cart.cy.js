import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddtoCart from "./PageObjects/AddtoCart";

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

  it("Search Product", () => {
    const searchproduct = new AddtoCart();
    searchproduct.searchProduct();
  });

  it("Add to Cart", () => {
    const cart = new AddtoCart();
    cart.selectProduct();
    cart.viewReviews();
    cy.go("back");
    cart.addToWishlist();
    cart.enterQuantity("4");
    cy.wait(5000);
    cart.addToCart();
    cy.wait(5000);
  });
});
