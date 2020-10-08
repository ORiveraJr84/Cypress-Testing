describe("testing form inputs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("meets MVP", () => {
    cy.get("[data-cy=name").type("Aja").should("have.value", "Aja");
    cy.get("[data-cy=email")
      .type("test@test.com")
      .should("have.value", "test@test.com");
    cy.get("[data-cy=password]")
      .type("password")
      .should("have.value", "password");
    cy.get("[data-cy=terms]").check().should("be.checked");
    cy.get("[data-cy=submit]")
      .click()
      .should("have.prop", { isDisabled: false });
  });
});
