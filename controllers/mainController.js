const controller = {
    index: (req, res) => {
        res.render('index')
    },
    prueba:(req,res) => {
        res.render('prueba')
    }
}

module.exports = controller