describe('Home Page', function() {
    beforeEach(function(){
        browser.url('');
      })

    it('should check the main page title', function() {
        var title = browser.getTitle()
        expect(title).to.equal('My Store');         
    })

    it('should confirm the header phone number', function() {
        var phoneCss =  browser.getText('.shop-phone strong');
        console.log('Phone CSS: '+phoneCss)
        expect(phoneCss).to.equal('0123-456-789');      
    })

    it('should have footer text', function() {
        var footerTextCss = browser.isExisting('.rte');
        expect(footerTextCss).to.be.true;
    })

    it('search should have focus when clicked', function() {
        browser.click(".ac_input")
        var searchHasFocus = browser.hasFocus(".ac_input")
        expect(searchHasFocus).to.be.true;
    })

    it('should have slideshow visible in viewport', function() {
        var slideshow = browser.isVisibleWithinViewport('#homepage-slider')
        expect(slideshow).to.be.true;
    })


})

