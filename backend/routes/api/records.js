
const express = require("express")
const router = express.Router()

const Record = require("../../models/Record")

router.get('/test', (req, res) => res.send('book route testing!'));


router.get("/",(req,res)=>{
    Record.find()
    .then((records) => res.json(records))
    .catch(err => res.status(404).json({nodatafound: 'No data found'}))
})


// data not found
router.get('/:d', (req, res) => {
    Record.findById(req.params.id)
        .then((record) => res.json(record))
        .catch(err => res.status(404).json({ nodatafound: 'No data found'}));
});

// adding data
router.post('/', (req, res) => {
    Record.create(req.body)
    .then((record) => res.json({msg: 'Data added successfully'}))
    .catch(err => res.status(404).json({ error: 'Unable to add this data'}))
})


// update data
router.put('/:id', (req, res) => {
    Record.findByIdAndUpdate(req.params.id, req.body)
      .then((record) => res.json({ msg: 'Updated successfully' }))
      .catch(err =>
        res.status(400).json({ error: 'Unable to update the Database' })
      );
  });


  // delete data
  router.delete('/:id', (req, res) => {
    Record.findByIdAndRemove(req.params.id, req.body)
      .then((record) => res.json({ mgs: 'data entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such data' }));
  });
  
module.exports = router