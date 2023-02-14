/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class LogOut {
  Out() {
    const logout = cy.contains('a', 'Log out')
    logout.click()
  }
}

export default LogOut;
