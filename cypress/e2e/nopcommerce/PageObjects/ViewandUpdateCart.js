/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class ViewandUpdateCart {
  viewWishlist() {
    const wishlist = cy.get(selectors.viewCart.checkWishlist);
    wishlist.click();
  }

  Label() {
    const lbl = cy.get(selectors.viewCart.checkCartLabel);
    lbl.click();
  }

  inputQuantity(qnty) {
    const quantity = cy.get(selectors.viewCart.quantityInput);
    quantity.clear();
    quantity.type(qnty);
    return this;
  }

  updateCart() {
    const upcart = cy.contains("button", "Update shopping cart");
    upcart.click();
    cy.wait(5000);
  }

  continueShopping() {
    const conshop = cy.contains("button", "Continue shopping");
    conshop.click();
  }
}

export default ViewandUpdateCart;
