/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class ContactUs {
  Contact() {
    const contact = cy.contains("a", "Contact us");
    contact.click();
  }

  Enquiry(enquiry) {
    const enq = cy.get(selectors.contactUs.enquiry);
    enq.type(enquiry);
    return this;
  }

  Submit() {
    const sub = cy.contains("button", "Submit");
    sub.click();
  }
}

export default ContactUs;
