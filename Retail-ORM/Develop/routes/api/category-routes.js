const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `localhost:3001/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
  .then(data => res.status(200).json(data))
  .catch(error => res.status(400).json(error))
});

//localhost:3001/api/categories/1
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
  .then(data => res.status(200).json(data))
  .catch(error => res.status(400).json(error))
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(data => res.status(200).json(data))
  .catch(error => res.status(400).json(error))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
