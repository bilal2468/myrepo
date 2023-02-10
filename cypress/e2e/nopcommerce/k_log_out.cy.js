import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import LogOut from "./PageObjects/LogOut";
import data from "../../fixtures/data.json";

describe("nop commerce", () => {
  before(() => {
    const signup = new SignUp();
    signup.visit();
    const signin = new SignIn();
    signin.setLogIn();
    signin.Email(data.email);
    signin.Password(data.password);
    signin.LogIn();
  });

  it("Logout", () => {
    const log = new LogOut();
    log.Out();
  });
});
