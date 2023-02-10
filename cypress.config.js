const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/nopcommerce/a_sign_up.cy.js",
      "cypress/e2e/nopcommerce/b_sign_in.cy.js",
      "cypress/e2e/nopcommerce/c_add_to_cart.cy.js",
      "cypress/e2e/nopcommerce/d_email_to_friend.cy.js",
      "cypress/e2e/nopcommerce/e_add_reviews.cy.js",
      "cypress/e2e/nopcommerce/f_view_and_update_cart.cy.js",
      "cypress/e2e/nopcommerce/g_digital_downloads.cy.js",
      "cypress/e2e/nopcommerce/h_contact_us.cy.js",
      "cypress/e2e/nopcommerce/i_add_vote.cy.js",
      "cypress/e2e/nopcommerce/j_add_new_address.cy.js",
      "cypress/e2e/nopcommerce/k_log_out.cy.js",
    ],
    // specPattern : 'cypress/e2e/nopcommerce/allSpec.cy.js',
    setupNodeEvents(on, config) {},
    experimentalRunAllSpecs: true,
  },
});
