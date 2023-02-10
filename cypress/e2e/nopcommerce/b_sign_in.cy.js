import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import data from "../../fixtures/data.json";

describe("nop commerce", () => {
  it("Sign In", () => {
    const signup = new SignUp();
    signup.visit();
    const signin = new SignIn();
    signin.setLogIn();
    signin.Email(data.email);
    signin.Password(data.password);
    signin.LogIn();
  });
});
