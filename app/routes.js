const express = require('express')
const router = express.Router()

// report-result/test-for-work.html routing.
router.post('/test-for-job', function (req, res) {
    var work = req.session.data['test-for-work']
    if (work == "yes"){
        res.redirect('self-report/england/about-work')
    } else {
        res.redirect('self-report/england/test-reason')
    }
})

// report-result/test-for-work.html Scotland routing.
router.post('/test-for-job-scot', function (req, res) {
    var work = req.session.data['test-for-work']
    if (work == "yes"){
        res.redirect('self-report/scotland/about-work-scotland')
    } else {
        res.redirect('self-report/scotland/test-reason-scotland')
    }
})


// report-result/test-date.html routing.
router.post('/date-answer', function (req, res) {
    var date = req.session.data['date-taken']
    if (date == "yesterday"){
        res.redirect('/report-result/barcode/option-a')
    } else {
        res.redirect('/report-result/barcode/option-b')
    }
})

// Run this code when a form is submitted to 'registering for'
router.post('/registering-for', function (req, res) {
    var test = req.session.data['whos-taking-the-test']
    if (test == "whos-taking-the-test-1"){
        res.redirect('self-report/country')
    } else if (test == "whos-taking-the-test-2") {
        res.redirect('#')
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
        res.redirect('self-report/symptoms-date')
    } else if (reason == "Education") {
        res.redirect('self-report/england/education-provider')
    } else if (reason == "Positive"){
        res.redirect('self-report/england/test-date')
    } else if (reason == "SocialCare"){
        res.redirect('self-report/social-care-tell-why')
    } else if (reason == "Healthcare"){
        res.redirect('self-report/health-care-tell-why')
    } else if (reason == "Government"){
        res.redirect('self-report/england/test-date')
    }
})

// Run this code when a form is submitted to 'about work'
router.post('/about-work', function (req, res) {
    var work = req.session.data['about-the-work']
    if (work == "socialCare"){
        res.redirect('self-report/england/social-care-role')
    } else if (work == "education") {
        res.redirect('self-report/england/education-provider')
    } else if (work == "nhs"){
        res.redirect('self-report/england/area-of-work')
    } else if (work == "anotherReason"){
        res.redirect('self-report/england/another-reason')
    }
})

// Run this code when a form is submitted to 'area of work'
router.post('/work-area', function (req, res) {
    var area = req.session.data['work-area']
    if (area == "aht"){
        res.redirect('self-report/england/primary')
    } else if (area == "ast") {
        res.redirect('self-report/england/primary')
    } else if (area == "nhsTrust"){
        res.redirect('self-report/england/primary')
    } else if (area == "cht"){
        res.redirect('self-report/england/primary')
    } else if (area == "cic"){
        res.redirect('self-report/england/primary')
    } else if (area == "cp"){
        res.redirect('self-report/england/secondary')
    } else if (area == "dentist"){
        res.redirect('self-report/england/secondary')
    } else if (area == "gp"){
        res.redirect('self-report/england/secondary')
    } else if (area == "mht"){
        res.redirect('self-report/england/primary')
    } else if (area == "opto"){
        res.redirect('self-report/england/secondary')
    } else if (area == "other"){
        res.redirect('self-report/england/secondary')
    }
})

// Run this code when a form is submitted to 'another reason'
router.post('/another-reason', function (req, res) {
    var reason = req.session.data['another-reason']
    if (reason == "IHP"){
        res.redirect('self-report/IHP')
    } else if (reason == "homeless") {
        res.redirect('self-report/no-UON-number')
    } else if (reason == "domestic"){
        res.redirect('self-report/no-UON-number')
    } else if (reason == "notListed"){
        res.redirect('self-report/england/employer-testkit')
    }
})

// Run this code when a form is submitted to 'social care role'
router.post('/social-care', function (req, res) {
    var care = req.session.data['social-care-role']
    if (care == "socialCareWork"){
        res.redirect('self-report/UON-number')
    } else if (care == "professional") {
        res.redirect('self-report/UON-number')
    } else if (care == "organisation"){
        res.redirect('self-report/england/test-date')
    }
})

// Run this code when a form is submitted to 'employer test kit'
router.post('/test-kit', function (req, res) {
    var kit = req.session.data['test-kit']
    if (kit == "yes"){
        res.redirect('self-report/no-UON-number')
    } else {
        res.redirect('self-report/england/test-date')
    }
})


router.post('/test-date', function (req, res) {
    var date = req.session.data['day-of-test']
    if (date == "whos-taking-the-test"){
        res.redirect('/self-report/name')
    } else {
        res.redirect('/self-report/name')
    }
})


router.post('/ethnic-group', function (req, res) {
    var group = req.session.data['ethnic-group']
    if (group == "asian-british-asian"){
        res.redirect('/self-report/ethnic-background')
    } else if (group == "black") {
        res.redirect('/self-report/ethnic-background')
    } else if (group == "mixed"){
        res.redirect('/self-report/ethnic-background')
    } else if (group == "white"){
        res.redirect('/self-report/ethnic-background')
    } else if (group == "another"){
        res.redirect('/self-report/ethnic-background')
    } else {
        res.redirect('/self-report/ethnic-background')
    }
})


router.post('/country', function (req, res) {
    var country = req.session.data['country']
    if (country == "england"){
        res.redirect('/self-report/england/test-for-work')
    } else if (country == "scotland") {
        res.redirect('/self-report/scotland/test-for-work')
    } else {
        res.redirect('/self-report/england/test-for-work')
    }
})


// Run this code when a form is submitted to 'country'
//router.post('/country', function (req, res) {
 //   var country = req.session.data['country']
 //   if (country == "england"){
 //       res.redirect('/self-report/england/test-for-work')
 //   } else if (country == "scotland") {
 //       res.redirect('/self-report/scotland/test-for-work')
 //   } else if (country == "ni"){
 //       res.redirect('/self-report/england/test-for-work')
  //  } else if (country == "wales"){
  //      res.redirect('/self-report/england/test-for-work')
 //   }
// })



router.post('/choose-result', function (req, res) {

const country = (req.session.data['country'] || 'unknown').toLowerCase()
const result = (req.session.data['choose-result'] || 'void').toLowerCase()

res.redirect('/self-report/' + country + '/' + country + '-' + result)

} )



router.post('/take-photo', function (req, res) {
    var date = req.session.data['take-photo']
    if (date == "cancel"){
        res.redirect('/digital-reader/photo-guidance')
    } else {
        res.redirect('/digital-reader/photo-guidance')
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
