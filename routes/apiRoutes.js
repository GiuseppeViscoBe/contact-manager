const express = require('express')
const router = express.Router()
const {getContacts, createContact, updateContact, deleteContact} = require('../controllers/apiController')


router.get('/', getContacts)

router.get('/:id', )

router.put('/:id', updateContact)

router.post('/', createContact)

router.delete('/:id', deleteContact)

module.exports = router;


