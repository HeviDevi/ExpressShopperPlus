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

});

router.get('/:id', (req, res) => {
  // finds one category by its `id` value
  Category.findOne({
    where: {
      id: req.body.id
    },
     //  includes its associated Products
    include: [
    {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  ]
})
  
 
});

router.post('/', (req, res) => {
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name

  })
  // create a new category
});

router.put('/:id', (req, res) => {
    // updates a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.body.id
    }
  })

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.body.id
    }
  })
  
});

module.exports = router;
