db.produtos.updateOne({ nome: "Quarteirão com Queijo" }, { $pull: { ingredientes: "$first" } });

db.produtos.find({}, { _id: false, nome: true, ingredientes: true });