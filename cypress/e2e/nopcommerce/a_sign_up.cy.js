import SignUp from "./PageObjects/SignUp";

describe("nop commerce", () => {
  it("Sign Up", () => {
    const signup = new SignUp();
    signup.visit();
    signup.myAccount();
    signup.fillFirstName("Bilal");
    signup.fillLastName("Nadeem");
    signup.fillEmail("bilalnadeem11@gmail.com");
    signup.fillPassword("bilal2468");
    signup.fillConfirmPassword("bilal2468");
    signup.Register();
  });
});
