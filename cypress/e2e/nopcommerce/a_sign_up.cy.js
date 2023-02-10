import SignUp from "./PageObjects/SignUp";
import data from "../../fixtures/data.json";

describe("nop commerce", () => {
  it("Sign Up", () => {
    const signup = new SignUp();
    signup.visit();
    signup.myAccount();
    signup.fillFirstName(data.firstName);
    signup.fillLastName(data.lastName);
    signup.fillEmail(data.email);
    signup.fillPassword(data.password);
    signup.fillConfirmPassword(data.confirmPassword);
    signup.Register();
  });
});
