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



router.post('/test-job-answer', function (req, res) {
    var testJob = req.session.data['test-for-job']
    if (testJob == "yes"){
        res.redirect('/self-report/about-work')
    } else {
        res.redirect('/self-report/england/test-reason')
    }
})

router.post('/employer-provided-answer', function (req, res) {
    var jobProvided = req.session.data['employer-provided']
    if (jobProvided == "yes"){
        res.redirect('/self-report/uon')
    } else {
        res.redirect('/self-report/england/test-date')
    }
})

router.post('/about-work-answer', function (req, res) {
    var aboutWork = req.session.data['about-the-work']
    if (aboutWork == "social-care"){
        res.redirect('/self-report/social-care-role')
    } else if (aboutWork == "education"){
        res.redirect('/self-report/education-provider')
    } else if (aboutWork == "nhs"){
        res.redirect('/self-report/nhs-setting')
    } else {
        res.redirect('/self-report/about-work-continued')
    }
})

router.post('/work-continued-answer', function (req, res) {
    var aboutWorkMore = req.session.data['about-the-work-continued']
    if (aboutWorkMore == "ihp"){
        res.redirect('/self-report/ihp-name')
    } else if (aboutWorkMore == "homelessness"){
        res.redirect('/self-report/uon')
    } else if (aboutWorkMore == "domestic"){
        res.redirect('/self-report/uon')
    } else {
        res.redirect('/self-report/employer-provided')
    }
})

router.post('/social-care-role-answer', function (req, res) {
    var careRole = req.session.data['social-care-role']
    if (careRole == "workplce-tests"){
        res.redirect('/self-report/social-care-id')
    } else if (careRole == "visiting"){
        res.redirect('/self-report/social-care-id')
    } else if (careRole == "non-workplace-tests"){
        res.redirect('/self-report/england/test-date')
    } else {
        res.redirect('/self-report/england/test-date')
    }
})

router.post('/nhs-setting-answer-answer', function (req, res) {
    var nhsSetting = req.session.data['nhs-setting']
    if (nhsSetting == "hospital-trust" || 
        nhsSetting == "ambulance-service-trust" ||
        nhsSetting == "board-trust-wales" ||
        nhsSetting == "community-trust" ||
        nhsSetting == "community-company" ||
        nhsSetting == "mental-health"
        ){
        res.redirect('/self-report/trust-name')
    } else {
        res.redirect('/self-report/work-postcode')
    }
})




router.post('/test-reason', function (req, res) {
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
})


router.post('/test-date', function (req, res) {
    var date = req.session.data['day-of-test']
    if (date == "whos-taking-the-test-1"){
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
    } else if (barcodeid == "ABC11223344") {
        res.redirect('../self-report/error/blocked-barcode')
    } else {
        res.redirect('self-report/login-choice')
    }
})




module.exports = router
