describe('Books automation', () => {
  
  it('Test1', () => {
      cy.visit('https://books.toscrape.com/')
      cy.title().should('eq','All products | Books to Scrape - Sandbox');
  });
  it('Test2', () => {
      cy.visit('https://books.toscrape.com/')
      cy.get('a[href="catalogue/category/books/nonfiction_13/index.html"]').click()
  });
  it('Test3', () => {
      cy.visit('https://books.toscrape.com/')
      cy.xpath('(//button[@class="btn btn-primary btn-block"])[1]').click()
  });

});