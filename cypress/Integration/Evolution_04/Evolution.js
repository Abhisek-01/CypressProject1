describe('Automation Test store', () => {
  it('Product checkout', () => {

    cy.visit('https://automationteststore.com/')
    cy.get('a[href="https://automationteststore.com/index.php?rt=product/category&path=68"]').click()
    // cy.get('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"])[1]').click()
    cy.xpath('(//img[@src="//automationteststore.com/image/thumbnails/18/79/t_shirt_3_jpg-100243-250x250.jpg"])[1]').click()
    // cy.get('option[value="774"]').should('have.value','Light Blue  (996860 In Stock)')
    // cy.get('select[id="option351"]').should('have.value', 'Medium')
    cy.get('input[name="quantity"]').clear().click().type(2)
    cy.get('a[class="cart"]').click()

    cy.get('#cart_checkout1').click()
    cy.get('#accountFrm_accountguest').check().should('be.checked')
    cy.get('button[title="Continue"]').click()

    cy.get('input[name="firstname"]').type("Abhisek")
    cy.get('input[name="lastname"]').type('Baral')
    cy.get('input[id="guestFrm_email"]').type("abhisekbaral88@gmail.com")
    cy.get('input[id="guestFrm_telephone"]').type('6371483362')
    cy.get('input[id="guestFrm_fax"]').type('Nothing')

    cy.get('input[id="guestFrm_company"]').type('Masai School')
    cy.get('input[id="guestFrm_address_1"]').type('State : Karnataka, place : Bangalore, location : Masai School edtech')
    cy.get('input[id="guestFrm_address_2"]').type('State : Karnataka, place : Bangalore, location : Masai School edtech')
    cy.get('input[id="guestFrm_city"]').type("Bangalure")
    cy.get('select[id="guestFrm_zone_id"]').select(1)//.type('A').contains('Aberdeen').click()
    cy.get('input[id="guestFrm_postcode"]').type('755068')
    cy.get('select[name="country_id"]').select(99)
    
    cy.get('button[title="Continue"]').click()
    cy.get('#checkout_btn').click()

    // cy.get('.mb40 > :nth-child(3)').should('have.value', 'Your order has been successfully processed!')
    cy.get('.mb40 > .btn').click()

  });
});