describe('Navigating from home page', function() {
    beforeEach(function(){
        browser.url('');
      })

    it("should go to Women's page" , function() {
        browser.click('#block_top_menu > ul > li:nth-child(1)')
        var title = browser.getTitle()
        expect(title).to.equal('Women - My Store');  
    })

    it("should go to prestashop site" , function() {
        browser.click('#htmlcontent_top li.htmlcontent-item-1')
        var title = browser.getTitle()
        expect(title).to.equal('PrestaShop - Free ecommerce software');  
    })

    it("should go to a product page" , function() {
        browser.click('#homefeatured  .first-in-line.first-item-of-tablet-line .left-block')
        var title = browser.getTitle()
        expect(title).to.equal('Faded Short Sleeve T-shirts - My Store');  
    })
    


})