const mainControllers = {
    home: (req, res) => res.render("index"),
    contact: (req, res) => res.send('Route for contact view'),
    about: (req, res) => res.send('Route for about view'),
    faqs: (req, res) => res.send('Route for faqs view'),
}

module.exports = mainControllers;