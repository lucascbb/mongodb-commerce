db.produtos.find({ $and: [{ vendidos: { $gte: 50 } }, { vendidos: { $lte: 100 } }] },
   { _id: false, vendidos: true, nome: true }).sort({ vendidos: 1 });
