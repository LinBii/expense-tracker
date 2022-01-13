const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', async (req, res) => {
  const categories = await Category.find({})
    .lean()
    .sort({ _id: 'asc' })
    .then()
    .catch(error => console.error(error))
  Record.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(records => {
      for (let record of records) {
        record.date = record.date.toISOString().split('T')[0]
      }
      res.render('index', { categories, records })
    })
    .catch(error => console.error(error))
})

module.exports = router
