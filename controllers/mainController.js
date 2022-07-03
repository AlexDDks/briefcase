const controller = {
    index: (req, res) => {
        res.render('index')
    },
    photos: (req, res) => {
        res.render('photos')
    },
    music: (req, res) => {
        res.render('music')
    }
}

module.exports = controller