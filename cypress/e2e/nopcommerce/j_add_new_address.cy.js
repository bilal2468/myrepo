import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddNewAddress from "./PageObjects/AddNewAddress";

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

  it("Add new Address", () => {
    const Address = new AddNewAddress();
    Address.viewAddresses();
    Address.addNew();
    Address.addFirstName("Bilal");
    Address.addLastName("Nadeem");
    Address.addEmail("bilalnadeem102@gmail.com");
    Address.addCity("Lahore");
    Address.addAddress("DHA Phase 5");
    Address.addZipCode("77886");
    Address.addPhoneNumber("99999999999");
    Address.addId("Pakistan");
    Address.Save();
  });
});
