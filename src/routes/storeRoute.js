const router = require('express').Router()
const conn = require('../db/index')

router.post('/createStore', (req, res) => {
    const sql = `INSERT INTO stores SET ?`
    const data = req.body


    conn.query(sql, data, (err, result) => {
        if(err) return res.status(500).send(err)

        
        res.status(200).send(result)
    })
})

router.get('/readStore/:id', (req, res) => {
    const sql = `SELECT * FROM stores WHERE store_id = ${req.params.id}`
    const data = req.params.product_id

    conn.query(sql, (err, result) => {
        if(err) return res.status(500).send(err)

        
        res.status(200).send(result)
    })
})

router.patch('/updateStore/:store_id',  (req, res) => {
    const sql = `UPDATE stores SET ? WHERE store_id = ?`
    const data = [req.body, req.params.store_id]

    conn.query(sql, data, (err,result)=>{
        if (err) return res.status(500).send(err)

        res.status(200).send(result);
    })
})

router.delete('/deleteStore/:store_id', (req,res) => {
    const sql = 'DELETE FROM stores WHERE store_id = ?'
    const data = req.params.store_id

    conn.query(sql, data, (err,result)=>{
        if (err) return res.status(500).send(err)

        res.status(200).send(result);
    })
})


module.exports = router