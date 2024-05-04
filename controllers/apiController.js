//@desc Get all contacts
//@route GET /api/contacts
//@access public 
const getContacts = (req,res) => {
    res.status(200).json({message : 'Get all contacts'})
}

//@desc Get contact by id
//@route GET /api/contact/:id
//@access public 
const getContactById = (req,res) => {
    res.status(200).json({message : 'Get contact: ' + req.params.id})
}

//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact = (req,res) => {
    console.log(req.body)
    res.status(201).json({message : 'Contact created succesfully'})
}

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req,res) => {
    res.status(200).json({message : 'Update contact: ' + req.params.id})
}

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res) => {
    res.status(200).json({message : 'Delete contact: ' + req.params.id})
}

module.exports = {getContacts, createContact, getContactById,updateContact,deleteContact}

