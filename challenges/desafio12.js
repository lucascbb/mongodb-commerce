db.produtos.updateMany({ $and: [{ nome: { $nin: ["McChicken"] } },
 { ingredientes: { $nin: ["ketchup"] } }] },
 { $push: { ingredientes: "ketchup" } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });