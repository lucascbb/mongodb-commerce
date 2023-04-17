// db.produtos.find({ $and: [{ proteínas: { $gte: 30 } }, { proteínas: { $lte: 40 } }] },
//    { _id: false, nome: true });

db.produtos.find({ $nor: [{ proteínas: { $gte: 30 } }, { proteínas: { $lte: 40 } }] },
   { _id: false, nome: true });