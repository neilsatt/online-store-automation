describe('Store Search Button', function() {
    it('should do a smoke test of the home page', function() {
        browser.url('');

        var url = browser.getUrl()
        var title = browser.getTitle()
        expect(title).to.equal('My Store');         
    }),

    it('should do a basic search query', function() {
        browser.setValue('.ac_input', 'Shirt')
        browser.click('.button-search')
        var title = browser.getTitle()
        expect(title).to.equal('Search - My Store');

        var url = browser.getUrl()
        expect(url).to.include('&search_query=Shirt', 'URL matches');
    })
})

