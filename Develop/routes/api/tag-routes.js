const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name']
    },
  //Includes its associated Product data
  include: [
  {
    model: Product,
    attributes: ['product_name']
  },
]

})
});

router.get("/:id", (req, res) => {
  Tag.findOne({
    where: { id: req.body.id },

    include: [
      {
      model: Product,
      attributes: ["product_name"],
      },
    ] 
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)({
    tag_name: req.body.tag_name,
  })
  }
);

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    }
    
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
