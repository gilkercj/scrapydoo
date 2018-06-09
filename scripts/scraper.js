const request = require("request");
const cherrio = require("cherrio");


let scraper = (cb) => {

    request("http://www.snopes.com", (error, response, body) => {
  
      var $ = cheerio.load(body);
  
      var articles = [];
  
      $("article").each((i, element) => {
  
        var title = $(this).children(".title").text().trim();
        var summary = $(this).children(".desc").text().trim();
        var link = $(this).children(".article").attr("href");

          if(title && summary && link){
            var data = {
              title: title,
              summary: summary,
              link: link
            }
            articles.push(data);
          }
  
      });
    cb(articles);
    });
};

module.exports = scraper;