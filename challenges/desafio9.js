db.produtos.find({ calorias: { $lt: 500 } }, { _id: false, nome: true });
