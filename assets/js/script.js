 // display the day and date
 var todayDate = moment().format('dddd, MMM Do YYYY');
 $("#currentDay").html(todayDate);

 $(document).ready(function () {
     // saveBtn class click listener
     $(".saveBtn").on("click",function () {

        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
     })
     
 })