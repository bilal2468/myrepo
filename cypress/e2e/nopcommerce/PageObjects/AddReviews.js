/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class AddReviews {
  visit() {
    cy.visit("https://demo.nopcommerce.com/apple-macbook-pro-13-inch");
  }

  selectReview() {
    const review = cy.contains("a", "Add your review");
    review.click();
  }

  addTitle(tit) {
    const title = cy.get(selectors.reviews.reviewTitle);
    title.type(tit);
    return this;
  }

  reviewText(rewtxt) {
    const text = cy.get(selectors.reviews.reviewText);
    text.type(rewtxt);
    return this;
  }

  Rating() {
    const rate = cy.get(selectors.reviews.reviewRate);
    rate.click();
  }

  Submit() {
    const sub = cy.contains("button", "Submit review");
    sub.click();
  }
}

export default AddReviews;
