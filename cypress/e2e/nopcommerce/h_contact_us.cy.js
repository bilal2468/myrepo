import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import ContactUs from "./PageObjects/ContactUs";

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

  it("Contact Us", () => {
    const contact = new ContactUs();
    contact.Contact();
    contact.Enquiry("What are your processes?");
    contact.Submit();
  });
});
