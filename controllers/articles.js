const scraper = require("../scripts/scraper.js");
const Article = require("../models/Article");

module.exports = {
    fetch: cb => {
        scraper(data => {
            let articles = data;
            Article.collection.insertMany(articles, {}, (error, data) => cb(error, data));
        });
    },
    get: (query, cb) => {
        Article.find(query)
        .sort({_id: -1})
        .exec((err, data) => cb(data));
    }
}