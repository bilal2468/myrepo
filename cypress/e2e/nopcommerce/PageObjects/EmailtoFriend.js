/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class EmailtoFriend {
  visit() {
    cy.visit("https://demo.nopcommerce.com/apple-macbook-pro-13-inch");
  }

  selectFriend() {
    const friend = cy.contains("button", "Email a friend");
    friend.click();
  }

  friendEmail(friendemail) {
    const email = cy.get(selectors.friendEmail.fEmail);
    email.type(friendemail);
    return this;
  }

  personalMessage(pmessage) {
    const message = cy.get(selectors.friendEmail.fMessage);
    message.type(pmessage);
    return this;
  }

  sendEmail() {
    const send = cy.contains("button", "Send email");
    send.click();
  }
}

export default EmailtoFriend;
