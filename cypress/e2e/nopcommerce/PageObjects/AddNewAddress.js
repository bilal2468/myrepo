/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class AddNewAddress {
  viewAddresses() {
    const address = cy.contains("a", "Addresses");
    address.click();
  }

  addNew() {
    const newAdd = cy.contains("button", "Add new");
    newAdd.click();
  }

  addFirstName(fname) {
    const addfname = cy.get(selectors.address.firstName);
    addfname.type(fname);
  }

  addLastName(lname) {
    const addlname = cy.get(selectors.address.lastName);
    addlname.type(lname);
  }

  addEmail(email) {
    const addemail = cy.get(selectors.address.addressEmail);
    addemail.type(email);
  }

  addCity(city) {
    const addcity = cy.get(selectors.address.addressCity);
    addcity.type(city);
  }

  addAddress(address) {
    const addaddress = cy.get(selectors.address.addressAddress1);
    addaddress.type(address);
  }

  addZipCode(code) {
    const addcode = cy.get(selectors.address.addressZipCode);
    addcode.type(code);
  }

  addPhoneNumber(num) {
    const addnumber = cy.get(selectors.address.addressPhoneNumber);
    addnumber.type(num);
  }

  addId(id) {
    const addid = cy.get(selectors.address.addressId);
    addid.select(id).should("have.value", "150");
  }

  Save() {
    const save = cy.contains("button", "Save");
    save.click();
  }
}

export default AddNewAddress;
