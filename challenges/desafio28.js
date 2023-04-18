db.produtos.count({ $expr: { $eq: [{ $size: "$ingredientes" }, 4] } });
