
$(document).ready(function(){
    // START NAVBAR
    $('.bigcup').click(function(){
        $(this).toggleClass('godown');
        $(this).siblings().toggleClass('active');
    
    });
    
    $('#datepicker').datepicker();

   // END NAVBAR

  //  Start Sales Section]
  $('.saleitems').click(function(){
    $(this).addClass('activeitems').siblings().removeClass('activeitems');
    // console.log('hi');
     let getattvalue = $(this).attr('data-filter');

    //  console.log(getattvalue);

    if(getattvalue === 'all'){
        $('.filters').show('size',300);
    }else{
        $('.filters').hide();
        $('.filters').not('.'+getattvalue).hide('size',300);
        $('.filters').filter('.'+getattvalue).show('size',300);
    }
  })
 //   End Sales Section

//  Start Sales Chart Section
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Profits'],
          ['2018',  1000,      400],
          ['2019',  1170,      520],
          ['2020',  660,       420],
          ['2021',  1030,      540],
          ['2022',  730,      500]
        ]);

        var options = {
          title: 'Sales Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
// End Sales Chart Section

  //  Start Faqs Section

  // End Faqs Section

})
