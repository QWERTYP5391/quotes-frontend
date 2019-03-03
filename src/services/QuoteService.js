

class QuoteService{

    getQuotes(){
        return fetch("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=");
    }
}

export default QuoteService;