class GiftlyPOM {
    searchInput(){
        return cy.get("[type='text']")
    }
    searchButton(){
        return cy.get('[type="button"]').contains("Search")  // There are no good selector, so i have to choose this option.
    }
    productCarts(){
        return cy.get('[data-e2e="product-card"] h3')
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////
    searchSecondPage(){ -> видалити, тепер в тебе є реюзабельний метод нижче
        return cy.get("[type='text']").first().type('DIAWA SALTIST')
    }
    assertionProducts(){
        return this.productCarts().each(($els) => {
            expect($els.text()).contains('DIAWA SALTIST')
        })
    } 
    assertionDifferences(){ -> тут поміняти використовуючи методи нижче
        return cy.get('[data-e2e="product-card"] h3').then(($els) => {
            const firstPage = Array.from($els, el => el.innerText);
            cy.get("[type='text']").first().type('DIAWA SALTIST') // search input
            cy.get('[type="button"]').contains("Search").dblclick()
            cy.get('[data-e2e="product-card"] h3').then(($els) => {
                const secondPage = Array.from($els, el => el.innerText);
                expect(firstPage).not.eq(secondPage)
            })
            
        })
    }

    verifyingURL(){
        return cy.url().should('not.eq', `${GiftlyURL}`)
    }

    searchByText(text){ // в тесті додай цей текст 'Baby sky blue'
        this.searchInput.first().type(text) 
    }

    clickSearchButton(){
        this.searchButton().dblclick()
    }

    clickOnFirstProductCart(){
      this.productCarts().first().click({force:true})
    }
}