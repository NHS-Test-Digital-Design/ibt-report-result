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
        res.redirect('report-result/barcode/option-a')
    } else {
        res.redirect('/report-result/barcode/option-b')
    }
})


router.post('/registering-for', function (req, res) {
    var date = req.session.data['whos-taking-the-test']
    if (date == "whos-taking-the-test-1"){
        res.redirect('report-result/barcode/option-a')
    } else {
        res.redirect('/report-result/barcode/option-b')
    }
})

// Run this code when a form is submitted to 'country'
router.post('/country-answer', function (req, res) {
    var country = req.session.data['where-do-you-live']
    if (country == "england"){
        res.redirect('self-report/england/test-for-work')
    } else if (country == "scotland") {
        res.redirect('order-lateral-flow-kits/scotland/eligibility-scotland')
    } else if (country == "ni"){
        res.redirect('order-lateral-flow-kits/ni/eligibility-ni')
    } else if (country == "wales"){
        res.redirect('order-lateral-flow-kits/wales/eligibility-wales')
    } else {
        res.redirect('order-lateral-flow-kits/condition')
    }
})

module.exports = router