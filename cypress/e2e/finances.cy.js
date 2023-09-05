describe("Transações", () => {
  // Hooks - são executados antes e depois de cada teste / ou de todos os testes
  // before -> antes de todos os testes
  // after -> depois de todos os testes
  // beforeEach -> antes de cada teste
  // afterEach -> depois de cada teste

  beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");
  });

  it("Cadastrar uma entrada", () => {
    criarTransacao("Freelance", "1500");

    cy.get("tbody tr td.description").should("have.text", "Freelance");
  });

  it("Cadastrar uma saída", () => {
    criarTransacao("Cinema", -50);
    cy.get("tbody tr td.description").should("have.text", "Cinema");
  });

  it.only("Excluir transação", () => {
    criarTransacao("Freelance", "1500");
    criarTransacao("Mesada", "150");

    //cy.contains(".description", "Freelance") // td refere
    //.parent() // tr
    //.find("img") // elemento que  a gente pre
    //.click();

    cy.contains(".description", "Freelance")
      .siblings() // irmãos
      .children("img")
      .click();

    cy.get("tbody tr").should("have.length", 1);
  });
});

function criarTransacao(descricao, valor) {
  cy.contains("Nova Transação").click();
  cy.get("#description").type(descricao);
  cy.get("#amount").type(valor);
  cy.get("#date").type("2023-08-29");
  cy.get("button").contains("Salvar").click();
}
