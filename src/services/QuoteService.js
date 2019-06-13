class QuoteService {

    static getQuotes() {
        return fetch("https://cors-anywhere.herokuapp.com/" + "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=");
    }
}

export default QuoteService;