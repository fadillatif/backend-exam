const router = require('express').Router()
const conn = require('../db/index')

router.get('/uiRead', (req, res) => {
    const sql = `select p.name, s.branch_name, i.inventory from products p join inventory i ON p.product_id = i.product_id join stores s ON s.store_id = i.store_id`
 
    conn.query(sql, (err, result) => {
        if (err) return res.send(err.sqlMessage)
        res.send({
            message: "terbaca",
            result
        })
    })
})

router.patch('/uiEdit/:id', (req, res) => {
    const sql = `UPDATE inventory SET ? WHERE inventory_id = ?`
    const data = [req.body, req.params.id]
 
    conn.query(sql, data, (err, result) => {
        if (err) return res.send(err)
        res.send({
            message: "Updated",
            result
        })
    })
})

router.delete('/uiDelete/:id', (req, res) => {
    const sql = `DELETE FROM inventory WHERE inventory_id = ?`
    const data = req.params.id
    conn.query(sql, data, (err, result) => {
        if (err) return res.send(err.sqlMessage)
        res.send({
            message: "Deleted"
        })
    })
})

module.exports = router