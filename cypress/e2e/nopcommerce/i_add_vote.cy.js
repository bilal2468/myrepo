import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddVote from "./PageObjects/AddVote";
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
