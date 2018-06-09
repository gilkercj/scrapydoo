const Note = require("../models/Note");

module.exports = {
    get: (data, cb) => {
        Note.find({
            _articleId: data._id,
            text: dta.text,
        }, cb);
    },
    save: (data, cb) => {
        let newNote = {
            _Article: data._id,
            text: data.text
            };
        Note.create(newNote, (error, data) => {
            if(error) {console.log(error)}
            else { console.log(data);
                cb(data);
            }
        })
    }
}