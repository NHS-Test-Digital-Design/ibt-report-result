const express = require('express')
const router = express.Router()

// report-result/test-for-work.html routing.
router.post('/work-answer', function (req, res) {
    var work = req.session.data['test-for-work']
    if (work == "yes"){
        res.redirect('report-result/test-reason')
    } else {
        res.redirect('/report-result/test-reason')
    }
})

// report-result/test-date.html routing.
router.post('/date-answer', function (req, res) {
    var date = req.session.data['date-taken']
    if (date == "yesterday"){
        res.redirect('report-result/barcode/control')
    } else {
        res.redirect('/report-result/barcode/challenger')
    }
})

module.exports = router
