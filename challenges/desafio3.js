db.produtos.find({}, { _id: false, vendidos: true, nome: true }).sort({ vendidos: -1 }).limit(1);
