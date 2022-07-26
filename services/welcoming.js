const Welcoming = (req, res) => {
  res.status(200).json("Welcome to Diva Cake");
};

module.exports = ("Welcome", Welcoming);
