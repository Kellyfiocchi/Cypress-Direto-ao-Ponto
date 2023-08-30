describe("Transações", () => {
  it("Cadastrar uma entrada", () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Freelance");
    cy.get("#amount").type("1000");
    cy.get("#date").type("2023-08-29");
    cy.get("button").contains("Salvar").click();
  });

  it("Cadastrar uma saída", () => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");

    cy.contains("Nova Transação").click();
    cy.get("#description").type("Aluguel");
    cy.get("#amount").type("-500");
    cy.get("#date").type("2023-08-29");
    cy.get("button").contains("Salvar").click();
  });
});
