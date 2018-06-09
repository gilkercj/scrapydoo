var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  _articleID: {
    type:Schema.Types.ObjectId,
  ref: "Article"
  },
  text: String,
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
