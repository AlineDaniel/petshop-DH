const listaPets = [ "Gato", "Cachorro" ];

const petsController = {
    index: function(req, res){
        res.send(listaPets);
    }
}

module.exports = petsController;