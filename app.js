const end = 2147483648 * 1000; 

$(document).ready(function () {
    setInterval(function () {
        updateCountDown()
    }, 1000)
})


function countdownDetails() {

    var endDate = new Date(end)

    var diffDate = new Date(end) - new Date()
    var delta = parseInt(diffDate.valueOf() / 1000)
    var seconds = {
        years: 31556952,
        months: 2629746,
        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1
    }

    var results = {}
    results.armageddon = new Date(end)
    results.totalSecondsLeft = delta

    Object.keys(seconds).forEach(function (key) {
        results[key] = parseInt(delta / seconds[key])
        delta = delta - (results[key] * seconds[key])
    })

    return results
}

function updateCountDown() {

    var data = countdownDetails()
    $('.js_armageddon').text(formatDate(data.armageddon))
    $('.js_totalseconds').text(data.totalSecondsLeft)

    $('.js_years').text(data.years)
    $('.js_months').text(data.months)
    $('.js_days').text(data.days)
    $('.js_hours').text(data.hours)
    $('.js_minutes').text(data.minutes)
    $('.js_seconds').text(data.seconds)

}

function formatDate(d) {
    console.log(d)
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return d.getDate() + ' '
        + months[d.getMonth()] + ' '
        + d.getFullYear() + ' at ' 
        + (d.getHours() < 10 ? '0' : '') + d.getHours() + ':'
        + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ':'
        + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds()
}
