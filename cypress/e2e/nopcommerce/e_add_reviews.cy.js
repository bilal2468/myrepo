import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddReviews from "./PageObjects/AddReviews";

describe("nop commerce", () => {
  before(() => {
    const signup = new SignUp();
    signup.visit();
    const signin = new SignIn();
    signin.setLogIn();
    signin.Email("bilalnadeem11@gmail.com");
    signin.Password("bilal2468");
    signin.LogIn();
  });

  it("Add Reviews", () => {
    const review = new AddReviews();
    review.visit();
    review.selectReview();
    review.addTitle("Good Product");
    review.reviewText("It is very good product");
    review.Rating();
    review.Submit();
  });
});
