const Plat = require("../models/platModel")

// Create and Save a new SportSubType
exports.create = async (req, res) => {
    
    if(!req.body.nom || !req.file || !req.body.prix) {
        return res.status(400).send({message: 'Send all required fields : nom, image and prix !'})
    }

    const { file } = req
console.log(file);
    const newPlat = new Plat({
        nom: req.body.nom,
        image: (file && file.filename) || null,
        prix: req.body.prix
    })

    newPlat.save()
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Plat!"
            });
        });
};

//get all  
exports.findAll = (req, res) => {
    Plat.find()
        .then(plats => res.json(plats))
        .catch(err => res.status(400).json('Error: ' + err));
}

//get by id
exports.findPlatById = (req, res) => {
    Plat.findById(req.params.id)
        .then(plat => res.json(plat))
        .catch(err => res.status(400).json('Error: ' + err));
}

//delete by id
exports.deletePlat = async (req, res) => {
    Plat.findByIdAndDelete(req.params.id)
        .then(async () => {
            res.json('Plat is deleted!')
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

//update 
exports.updatePlat = (req, res) => {
    const { file } = req
    Plat.findById(req.params.id)
        .then(async (plat) => {
            plat.nom = req.body.nom;
            plat.image = (file && file.filename) || null;
            plat.prix = req.body.prix;

            plat.save()
                .then(() => res.json('Plat is updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

//get by name
exports.findPlatByName = (req, res) => {
    Plat.findOne({ nom: req.params.nom })
        .then(plat => res.json(plat))
        .catch(err => res.status(400).json('Error: ' + err));
}