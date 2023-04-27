const express = require('express')
const router = express.Router()

// report-result/test-for-work.html routing.
router.post('/work-answer', function (req, res) {
    var work = req.session.data['test-for-work']
    if (work == "yes"){
        res.redirect('report-result/about-work')
    } else {
        res.redirect('/report-result/test-reason')
    }
})


// report-result/test-for-work.html routing.
     router.post('/share-result-lateral-flow/v29/action/about-work-2', function (req, res) {
          let result = req.session.data['about-work']

          if (result == "It’s for a social care service"){
            res.redirect('/share-result-lateral-flow/v29/about-work-3')
          } else if(result == "It’s for an education provider") {
            res.redirect('/share-result-lateral-flow/v29/school-name')
          } else if(result == "It’s for the NHS in England or Northern Ireland") {
            res.redirect('/share-result-lateral-flow/v29/nhs-primary')
          } else if(result == "It’s for an independent healthcare provider commissioned by the NHS") {
            res.redirect('/share-result-lateral-flow/v29/ihp')
          } else if(result == "It’s for a homeless service") {
            res.redirect('/share-result-lateral-flow/v29/employer-uon')
          } else if(result == "It’s for a domestic abuse service") {
            res.redirect('/share-result-lateral-flow/v29/employer-uon')
          } else if(result == "It’s not listed") {
            res.redirect('/share-result-lateral-flow/v29/employee-wtp')
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


////// START Me fixing this mess //////// 


router.post('/test-for-work', function (req, res) {
    var work = req.session.data['test-for-work']
    if (work == "Yes"){
      res.redirect('self-report//england/about-work')
    } else {
      res.redirect('self-report//england/test-reason')
    }
})


////// END Me fixing this mess //////// 



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
    } else {
        res.redirect('self-report/login-choice')
    }
})




module.exports = router
