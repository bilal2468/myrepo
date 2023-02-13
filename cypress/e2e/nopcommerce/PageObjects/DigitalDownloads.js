/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class DigitalDownloads {
  visit() {
    cy.visit("https://demo.nopcommerce.com/");
  }

  selectDigital() {
    const digital = cy.contains("a", " Digital downloads");
    digital.click();
  }

  selectMode() {
    const mode = cy.get(selectors.digitalDownloads.digital);
    mode.click();
  }

  Select() {
    const select = cy.contains("a", "If You Wait (donation)");
    select.click();
  }
}

export default DigitalDownloads;
