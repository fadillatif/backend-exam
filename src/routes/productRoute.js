const router = require('express').Router()
const conn = require('../db/index')
// const bcrypt = require('bcrypt')
// const multer = require('multer')
// const sharp = require('sharp')
// const path = require('path')


router.post('/create', (req, res) => {
    const sql = `INSERT  products SET ?`
    const data = req.body


    conn.query(sql, data, (err, result) => {
        if(err) return res.status(500).send(err)

        
        res.status(200).send(result)
    })
})

router.get('/read/:id', (req, res) => {
    const sql = `SELECT * FROM products WHERE product_id = ${req.params.id}`
    const data = req.params.product_id

    conn.query(sql, (err, result) => {
        if(err) return res.status(500).send(err)

        
        res.status(200).send(result)
    })
})

router.patch('/update/:product_id',  (req, res) => {
    const sql = `UPDATE products SET ? WHERE product_id = ?`
    const data = [req.body, req.params.product_id]

    conn.query(sql, data, (err,result)=>{
        if (err) return res.status(500).send(err)

        res.status(200).send(result);
    })
})

router.delete('/delete/:product_id', (req,res) => {
    const sql = 'DELETE FROM products WHERE product_id = ?'
    const data = req.params.product_id

    conn.query(sql, data, (err,result)=>{
        if (err) return res.status(500).send(err)

        res.status(200).send(result);
    })
})







module.exports = router