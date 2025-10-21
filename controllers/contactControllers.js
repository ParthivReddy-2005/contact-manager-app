const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
//@desc get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({user_id : req.body.id});
  res.status(200).json(contacts);
});

//@desc get contact for id
//@route GET /api/contacts/:id
//@access private
const getContactId = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.status(404);
    throw new Error("contact not Found");
  }
  res.status(200).json(contact);
});

//@desc create contacts
//@route GET /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The body of create contact: ", req.body);
  const {name , email, phone} = req.body
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id : req.body.id,
  });
  res.status(201).json(contact);
});

//@desc update contact for id
//@route GET /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.status(404);
    throw new Error("contact not Found");
  }

  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("user don't have permission to update the user");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new : true}
  );
  res.status(200).json(updatedContact);
});

//@desc delete contact for id
//@route GET /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.status(404);
    throw new Error("contact not Found");
  }
  if(contact.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("user don't have permission to update the user");
  }
  await Contact.deleteOne({_id : req.params.id});
  console.log("Contact deleted");
  res.status(200).json({message : `Deleted contact with id : ${req.params.id}`});
});

module.exports = {
  getContacts,
  getContactId,
  createContact,
  updateContact,
  deleteContact,
};
