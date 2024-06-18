const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
    {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
    ]
  })
  .then((CategoryData) => res.json(CategoryData))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // finds one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
     //  includes its associated Products
    include: [
    {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  ]
})
.then((CategoryData) => res.json(CategoryData))
.catch((err) => {
  console.log(err);
  res.status(500).json(err);})
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then((CategoryData) => res.json(CategoryData))
  // create a new category
});

router.put('/:id', (req, res) => {
    // updates a category's name after targeting its `id` value
  Category.update({
    category_name: req.body.category_name
  },
    { where: {
      id: req.params.id
    },
  })
  .then((CategoryData) => res.json({ message: 'Category updated successfully' }))
});
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((CategoryData) => res.json({ message: `Category deleted successfully`}))
});

module.exports = router;
