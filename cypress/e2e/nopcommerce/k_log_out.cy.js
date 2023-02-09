import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import LogOut from "./PageObjects/LogOut";

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

  it("Logout", () => {
    const log = new LogOut();
    log.Out();
  });
});
