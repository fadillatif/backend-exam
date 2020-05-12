const router = require('express').Router()
const conn = require('../db/index')

router.patch('/inventory/:inventory_id', (req, res) => {

    const sql = `UPDATE inventory SET ? WHERE inventory_id = ?`
    const data = [req.body, req.params.inventory_id]
 
    conn.query(sql, data, (err, result) => {

       if(err) return res.send(err)


       res.send({
          message: 'Updated',
       })
    })
})

module.exports = router