(function($) {
  "use strict";

  $('document').ready(function(){
    const J2_NAME= 'Jester+2nd+Floor+Dining';
    const J2_LOCNUM = '12';
    const KINSOLVING_NAME = 'Kinsolving+Dining+Hall';
    const KINSOLVING_LOCNUM = '03';
    const J2FASTLINE_NAME='J2+FAST+Line';
    const J2FASTLINE_LOCNUM = '27';

    var month = 10;
    var day = 5;
    var year = 2018;
    var locNum = 12;
    var locName =J2_NAME;
    var time_elems = [month,day,year];
    var action = 'myaction=read';
    var name = 'sName=The+University+of+Texas+at+Austin+-+Housing+and+Dining';
    var date = 'dtdate=' + time_elems.join('%2f');

    var locationNum ='locationNum=' + locNum;
    var locationName = 'locationName=' + locName;
    var flags = 'naFlag=1';

    var url_elems = [action, name, date, locationNum, locationName, flags];
    var vars = url_elems.join('&');
    var url = 'https://hf-food.austin.utexas.edu/foodpro/menuSamp2.asp?' + vars
    console.log(url)

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            $('#menu').innerHtml = xhr.responseText;
        }
    }

    xhr.open('GET',url);
    xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    xhr.setRequestHeader('Accept','text/html');
    xhr.send();
  });
}) (jQuery);
