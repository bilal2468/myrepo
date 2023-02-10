import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import ContactUs from "./PageObjects/ContactUs";
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

  it("Contact Us", () => {
    const contact = new ContactUs();
    contact.Contact();
    contact.Enquiry(data.enquiry);
    contact.Submit();
  });
});
