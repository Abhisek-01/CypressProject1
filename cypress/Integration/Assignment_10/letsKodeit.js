describe('letskodeit Functionality', () => {
  it('Test1', () => {
      
    cy.visit("https://www.letskodeit.com/practice");
    cy.xpath("//h1[@data-uniqid='1621702280245']").should('have.text', 'Practice Page')
    cy.get('#bmwradio').check().should('be.checked')
    cy.get('#benzradio').check().should('be.checked')
    cy.get('#hondaradio').check().should('be.checked')

  });

  it('Test2', () => {

    cy.visit("https://www.letskodeit.com/practice")

    cy.get("#bmwcheck").check().should("be.checked").click()
    cy.get("#benzcheck").check().should("be.checked").click()
    cy.get("#hondacheck").check().should("be.checked").click()

  });

  it("Test3", () => {
    
    cy.visit("https://www.letskodeit.com/practice")

    cy.xpath("//button[@id='openwindow']").click()

  }); 

  it('Test4', () => {
    
    cy.visit("https://www.letskodeit.com/practice")

    cy.get("#opentab").invoke("removeAttr", "target").click()

  });  

  it('Test5', () => {
    
    cy.visit("https://www.letskodeit.com/practice")

    cy.get("#carselect").select("bmw").should("have.value","bmw")
    cy.get("#carselect").select("benz").should("have.value","benz")
    cy.get("#carselect").select("honda").should("have.value","honda")

  });

  // it('Test6', () => {
    
  //   cy.visit("https://www.letskodeit.com/practice")

  //   // cy.get('option[value="apple"]').should("have.value", "apple").click()
  //   cy.get("#multiple-select-example").trigger('mouseup',{which : 1})
  //   cy.get("##multiple-select-example").trigger('mousedown').trigger("mouseup", {force:true})
    
  // });


  it('Test7', () => {
    
    cy.visit("https://www.letskodeit.com/practice")

    cy.get(".ui-autocomplete-input").type("AP")
    cy.wait(2000);
    cy.get(".ui-autocomplete").contains('Mobile App Automation').should("be.visible").click();

  }); 
  it('Test8', () => {

      cy.visit("https://www.letskodeit.com/practice")
      
      cy.get("#enabled-button").click()
      cy.get("#enabled-example-input").should("be.visible").and("not.be.disabled").click().type("Admin")

      cy.get("#disabled-button").click()
      cy.get("#enabled-example-input").should("be.visible").and("be.disabled")
      
  }); 


  it('Test9', () => {
    
    cy.visit("https://www.letskodeit.com/practice")

    cy.get("#displayed-text ").type("Admin")
    cy.get("#hide-textbox").click()
    cy.get("#displayed-text").should('not.be.visible')
    
    cy.get("#show-textbox").click()
    cy.get("#displayed-text").should('be.visible')

  }); 

  it('Test10', () => {
    
    cy.visit("https://www.letskodeit.com/practice")

    cy.get("#hide-textbox").click().type("Hey bro")
    cy.wait(3000)
    cy.get("#alertbtn").click()

    cy.on("window:alert",(altmsg) =>{
      expect(altmsg).to.equal("Hello , share this practice page and share your knowledge")

      return true;
    })

    it('Test11', () => {

      cy.visit("https://www.letskodeit.com/practice/")
  
      cy.get("#mousehover").invoke('show')
  
      cy.contains('Top').click({force:true});
  
      // cy.get("a[href='#top']").should('be.visible');
      cy.window().its('scrollY').should('equal', 0)
    })

    it('Test12', () => {
        cy.visit("https://www.letskodeit.com/practice/")
        cy.xpath("//table[@name='courses']/tbody/tr[1]/th").each(($ele)=>{

            if($ele.text()){
              
              cy.wrap($ele).next().then((ele2)=>{
                  cy.log(ele2.text())
              })

            }
        })

    });

  });


});