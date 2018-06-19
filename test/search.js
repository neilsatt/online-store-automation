describe('Store Search Button', function() {
    // beforeEach(function(){
        
    //   })
    it('should do a basic search query', function() {
        browser.url('');
        browser.setValue('.ac_input', 'Shirt')
        browser.click('.button-search')
        var title = browser.getTitle()
        expect(title).to.equal('Search - My Store');  
    })

    it('should show the new URL', function() {
        var url = browser.getUrl()
        expect(url).to.include('&search_query=Shirt', 'URL matches');
    })  
    
})