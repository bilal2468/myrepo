import DigitalDownloads from "./PageObjects/DigitalDownloads";

describe("nop commerce", () => {
  it("View Digital Downloads", () => {
    const digiDownloads = new DigitalDownloads();
    digiDownloads.visit();
    digiDownloads.selectDigital();
    digiDownloads.selectMode();
    digiDownloads.Select();
    cy.contains('a', 'Download sample').should('be.visible').and('exist')
  });
});
