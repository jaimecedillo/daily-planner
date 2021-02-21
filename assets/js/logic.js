const currentDate = moment().format('LLLL');
$("#currentDay").text(currentDate);

var displayHour = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
for (var i = 9; i < 18; i++) {
    $('.container').append(`
    <div class = "row time-block" id = "hour-${i}"> 
    <div class = "col-1 pt-4 hour">${displayHour[i - 9]}</div>
    <textarea class="col-10 h5 description"/>
    <button class="col-1 fa fa-save saveBtn"></button>
    </div> 
    `)
    if (moment().format('H') == i) {
        $(`#hour-${i}`).addClass("present");
    } else if (moment().format('H') < i) {
        $(`#hour-${i}`).addClass("future");
    } else {
        $(`#hour-${i}`).addClass("past");
    }
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
}
$('.saveBtn').on("click", function () {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
})

// Getting from local storage
function autoRefreshPage() {
    window.location = window.location.href;
}
setInterval('autoRefreshPage()', 30000);