db.produtos.updateOne({ nome: { $nin: ["McChicken"] } }, { $push: { ingredientes: "Ketchup" } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });
