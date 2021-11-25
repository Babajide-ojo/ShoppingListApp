const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Item = require('../../models/Item');

// @route GET api/items
router.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items));

});

// @route POST api/items
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

// @route PATCH api/items
router.patch('/:id', (req, res) => {
    Item.findByIdAndUpdate(
        req.params.id, req.body, { new: true }
    ).then(item => res.json(item));
})

// @route DELETE api/items
router.delete('/:id', auth, (req, res) => {
    Item.findById(
        req.params.id //this gets the id from the url passed into the browser
    ).then(item => item.remove().then(
        () => res.json(
            { success: true }
        )))
        .catch((err) => {
            res.status(500).send(err);
        });
});

// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//         .then((item) => {
//             if (item) {
//                 res.json({
//                     success: true
//                 })
//             } else {
//                 res.json({
//                     success: false
//                 }
//                 )
//             }
//         });
// });

module.exports = router;