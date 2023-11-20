describe("home page functions as it should", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("users can search for movies", () => {
    cy.get('[data-testid="search-result"]').should("not.exist");
    cy.get('[data-testid="search-input"]')
      .should("be.visible")
      .eq(0)
      .type("The Matrix")
      .wait(1000);
    cy.get('[data-testid="search-result"]')
      .should("exist")
      .within(() => {
        cy.wait(1000);
        cy.get("a").should("not.have.length", 0).first().click();
      });
  });

  it("users can see top 10 movie", () => {
    cy.contains(/Featured Movies/i);
    cy.get('[data-testid="movie-card"]')
      .should("have.length", 10)
      .each(() => {
        
      })
      .within(() => {
        cy.get('[data-testid="movie-poster"]').should("be.visible");
        cy.get('[data-testid="movie-title"]').should("be.visible");
        cy.get('[data-testid="movie-release-date"]').should("be.visible");
      });
  });
});
