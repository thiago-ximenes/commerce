db.produtos.updateMany({
  valoresNutricionais: {
    $elemMatch: {
      tipo: "sódio",
      percentual: {
        $gt: 40,
      },
    },
  },
    }, {
  $push: {
    tags: {
      $each: ["muito sódio"],
    },
  },
});

db.produtos.find({}, {
  nome: 1,
  tags: 1,
  _id: 0,
});