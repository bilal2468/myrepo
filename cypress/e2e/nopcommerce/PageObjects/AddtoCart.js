/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class AddtoCart {
  searchProduct() {
    const search = cy.get(selectors.cart.search);
    search.type("MacBook{enter}");
  }

  selectProduct() {
    const select = cy.get(selectors.cart.chooseProduct);
    select.click();
  }

  viewReviews() {
    const review = cy.get(selectors.cart.checkReviews).children().eq(0);
    review.click();
  }

  addToWishlist() {
    const wishlist = cy.contains("button", "Add to wishlist");
    wishlist.click();
  }

  enterQuantity(qty) {
    const quantity = cy.get(selectors.cart.quanityEnter);
    quantity.clear();
    quantity.type(qty);
  }
  addToCart() {
    const cart = cy.get(selectors.cart.submitCart);
    cart.click();
  }
}

export default AddtoCart;
