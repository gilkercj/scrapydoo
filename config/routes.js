const scraper = require("../scripts/scraper");

const articlesController = require("../controllers/articles");
const notesController = require("../controller/notes");

module.exports = router => {
    router.get("/", (req, res) => {
        res.render("index");
    });

    router.post("/fetch", (req, res) => {
        articlesController.fetch((error, data) => {
            res.json("articles scraped.")
        });
    });


    router.get("/articles", (req, res) => {
        articlesController.get(req.query, data => {
            res.json(data)
        });
    });
    router.post("/notes", (req, res) => {
        notesController.save(req.body, data => {
            res.json(data);
        })
    })
}
