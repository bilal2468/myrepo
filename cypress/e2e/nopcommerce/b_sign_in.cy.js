import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";

describe("nop commerce", () => {
  it("Sign In", () => {
    const signup = new SignUp();
    signup.visit();
    const signin = new SignIn();
    signin.setLogIn();
    signin.Email("bilalnadeem11@gmail.com");
    signin.Password("bilal2468");
    signin.LogIn();
  });
});
