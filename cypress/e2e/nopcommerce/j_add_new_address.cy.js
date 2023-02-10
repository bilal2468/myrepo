import SignUp from "./PageObjects/SignUp";
import SignIn from "./PageObjects/SignIn";
import AddNewAddress from "./PageObjects/AddNewAddress";
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

  it("Add new Address", () => {
    const Address = new AddNewAddress();
    Address.viewAddresses();
    Address.addNew();
    Address.addFirstName(data.firstName);
    Address.addLastName(data.lastName);
    Address.addEmail(data.addressEmail);
    Address.addCity(data.addressCity);
    Address.addAddress(data.addressAddress1);
    Address.addZipCode(data.addressZipCode);
    Address.addPhoneNumber(data.addressPhone);
    Address.addId(data.addressId);
    Address.Save();
  });
});
