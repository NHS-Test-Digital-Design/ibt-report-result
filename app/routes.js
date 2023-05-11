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
        res.redirect('self-report/scotland/test-for-work')
    } else if (country == "ni"){
        res.redirect('self-report/ni/test-for-work')
    } else if (country == "wales"){
        res.redirect('self-report/wales/test-for-work')
    } else {
        res.redirect('self-report/england/test-for-work')
    }
})


router.post('/test-job', function (req, res) {
    var date = req.session.data['test-for-job']
    if (date == "whos-taking-the-test-1"){
        res.redirect('/self-report/england/test-reason')
    } else {
        res.redirect('/self-report/england/test-reason')
    }
})


// Run this code when a form is submitted to 'test-reason'
router.post('/test-reason', function (req, res) {
    var reason = req.session.data['test-reason']
    if (reason == "Symptoms"){
        res.redirect('self-report/england/test-date')
    } else if (reason == "Education") {
        res.redirect('self-report/england/education-provider')
    } else if (reason == "Positive"){
        res.redirect('self-report/england/test-date')
    } else if (reason == "SocialCare"){
        res.redirect('self-report/england/test-date')
    } else if (reason == "Healthcare"){
        res.redirect('self-report/england/test-date')
    } else if (reason == "Government"){
        res.redirect('self-report/england/test-date')
    }
})

/*router.post('/test-reason', function (req, res) {
    var country = req.session.data['where-do-you-live']
    if (country == "england"){
        res.redirect('self-report/england/test-date')
    } else if (country == "scotland") {
        res.redirect('self-report/scotland/test-date')
    } else if (country == "ni"){
        res.redirect('self-report/ni/test-date')
    } else if (country == "wales"){
        res.redirect('self-report/wales/test-date')
    } else {
        res.redirect('self-report/england/test-date')
    }
})*/




router.post('/test-date', function (req, res) {
    var date = req.session.data['day-of-test']
    if (date == "whos-taking-the-test"){
        res.redirect('/self-report/name')
    } else {
        res.redirect('/self-report/name')
    }
})


router.post('/gender', function (req, res) {
    var country = req.session.data['gender']
    if (country == "gender-1"){
        res.redirect('self-report/ethnic-group')
    } else if (country == "gender-2") {
        res.redirect('self-report/ethnic-group')
    } else {
        res.redirect('self-report/ethnic-group')
    }
})

router.post('/ethnic-group', function (req, res) {
    var country = req.session.data['ethnic-group']
    if (country == "ethnic-group-1"){
        res.redirect('self-report/occupation')
    } else if (country == "ethnic-group-2") {
        res.redirect('self-report/occupation')
    } else if (country == "ethnic-group-3"){
        res.redirect('self-report/occupation')
    } else if (country == "ethnic-group-4"){
        res.redirect('self-report/occupation')
    } else if (country == "ethnic-group-5"){
        res.redirect('self-report/occupation')
    } else {
        res.redirect('self-report/occupation')
    }
})


router.post('/take-photo', function (req, res) {
    var date = req.session.data['take-photo']
    if (date == "cancel"){
        res.redirect('/digital-reader/photo-guidance')
    } else {
        res.redirect('/digital-reader/photo-guidance')
    }
})

router.post('/choose-result', function (req, res) {
    var country = req.session.data['test-result']
    if (country == "test-result-1"){
        res.redirect('self-report/NI/SR-Negative')
    } else if (country == "test-result-2") {
        res.redirect('self-report/NI/SR-Negative')
    } else {
        res.redirect('self-report/NI/SR-Negative')
    }
})

router.post('/barcode-answer', function (req, res) {
    var barcodeid = req.session.data['test-id-number']
    if (barcodeid == "ERROR000001"){
        res.redirect('../digital-reader/can-not-report-entered')
    } else if (barcodeid == "ERROR000002") {
        res.redirect('../digital-reader/can-not-report-scanned')
    } else {
        res.redirect('self-report/login-choice')
    }
})




module.exports = router
