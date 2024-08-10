const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["product_name"],
    },
    //Includes its associated Product data
    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
  }).then((tagData) => res.json(tagData));
});

router.get("/:id", (req, res) => {
  Tag.findOne({
    where: { id: req.params.id },

    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
  }).then((tagData) => res.json(tagData));
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  }).then((tagData) => res.json(tagData));
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: { id: req.params.id },
    }
  )
  .then((tagData) => {
    res.json({ message: "Tag updated successfully"})
  }
);
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: { id: req.params.id },
  }).then((tagData) => res.json({ message: "Tag deleted successfully" }));
});

module.exports = router;
