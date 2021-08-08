const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll({
  
  }).then(results => {
    res.json(results)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(results => {
    res.json(results)
  })
});


module.exports = router;
