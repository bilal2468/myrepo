import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddVote from "./PageObjects/AddVote";

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

  it("Add Vote", () => {
    const vote = new AddVote();
    vote.Poll();
    vote.addVote();
  });

  it("View Blog", () => {
    const signup = new SignUp();
    signup.visit();
    const blog = new AddVote();
    blog.viewBlog();
  });
});
