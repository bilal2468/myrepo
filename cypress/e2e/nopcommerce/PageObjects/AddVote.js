/// <reference types= "Cypress" />

import selectors from "../../../support/selectors.json";

class AddVote {
  Poll() {
    const answer = cy.get(selectors.vote.addPoll);
    answer.click();
  }

  addVote() {
    const vote = cy.contains("button", "Vote");
    vote.click();
    cy.wait(4000);
  }

  viewBlog() {
    const blog = cy.contains("a", "Blog");
    blog.click();
  }
}

export default AddVote;
