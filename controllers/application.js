//controllers - application

module.exports = {
    index: (req, res) => {
      Recipe.find({})
        .populate("author")
        .then(recipe => {
          res.render("app/index", { recipess });
        });
    }
  };