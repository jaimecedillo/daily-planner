const currentDate = moment().format('LLLL');
// display current date and time
$("#currentDay").text(currentDate);

// array for hour blocks
var displayHour = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
for (var i = 9; i < 18; i++) {
    // time block html and css attributes
    $('.container').append(`
    <div class = "row time-block" id = "hour-${i}"> 
    <div class = "col-1 pt-4 hour">${displayHour[i - 9]}</div>
    <textarea class="col-10 h5 description"/>
    <button class="col-1 fa fa-save saveBtn"></button>
    </div> 
    `)
    // show color code for past, present and future
    if (moment().format('H') == i) {
        $(`#hour-${i}`).addClass("present");
    } else if (moment().format('H') < i) {
        $(`#hour-${i}`).addClass("future");
    } else {
        $(`#hour-${i}`).addClass("past");
    }

    // Getting from local storage
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}

// save tasks to local storage by clicking save button
$('.saveBtn').on("click", function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
})

// auto refresh page to show current time
function autoRefreshPage() {
    window.location = window.location.href;
}
setInterval('autoRefreshPage()', 45000);