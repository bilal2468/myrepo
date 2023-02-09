import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import EmailtoFriend from "./PageObjects/EmailtoFriend";

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

  it("Email to Friend", () => {
    const myFriend = new EmailtoFriend();
    myFriend.visit();
    myFriend.selectFriend();
    myFriend.friendEmail("bilal.nadeem@devsinc.com");
    myFriend.personalMessage("It is very good product");
    myFriend.sendEmail();
  });
});
