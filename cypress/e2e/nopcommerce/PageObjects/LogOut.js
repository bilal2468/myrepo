/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class LogOut {
  Out() {
    const logout = cy.get(selectors.logOut.out);
    logout.click({ force: true });
  }
}

export default LogOut;
