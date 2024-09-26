function getage(){
    var dob = document.getElementById('dob').value;
    var bd = new Date(dob);
    var birdate = bd.getDate();
    var birmon = bd.getMonth()+1;
    var biryear = bd.getFullYear();
    var pd = new Date();
    var perdate = pd.getDate();
    var permon = pd.getMonth()+1;
    var peryear = pd.getFullYear();
    var ageyr = peryear - biryear;
    var agemon = permon - birmon;
    var agedays = perdate - birdate;
    
    if(bd>pd){
        document.getElementById("age").innerHTML = "enter date below "+pd.toDateString();
        return;
    }
    if(agemon<0){
        ageyr--;
        agemon += 12;
    }
    if((agemon==0) && (birdate>perdate)){
        agemon += 11;
    }
    if(agedays<0){
        ageyr--;
        var prevm = permon-1;
        var prevmontdays = new Date(peryear, prevm,0).getDate();
        agedays += prevmontdays;
    }
    //age
    let age= 'Your Present Age is <span> <br><br>' + ageyr + ' Years</span> <span>' + agemon + ' Months</span> and <span>'
         + agedays + ' Days</span>.';
    //total months
    var months = (ageyr*12)+agemon;
    let t_m ='or <span>' +months+ ' Months</span> <span>'  + agedays + ' Days</span>.'
    //tota weeks
    var weeksfromon = (months*4.345);
    var daysfrommon = weeksfromon%4.345;
    var days = agedays+daysfrommon;
    let t_wnd = 'or <span> ' + weeksfromon.toFixed(0)+ ' Weeks </span> <span>'+days.toFixed(0)+' Days </span>'
    //total days
    var t_days= (months*30.44)+agedays;
    let t_d = 'or <span>'+t_days.toFixed(0)+' Days </span>'
   //total hrs
   var t_da=t_days.toFixed(0);
   var t_ho = t_da*24;
   let t_h='or <span>' +t_ho+ ' Hours </span>';
   //total minutes
   var t_min = t_ho*60;
   var t_mi = 'or <span>' +t_min+ ' Minutes </span>';
   //total seconds
   var t_seco = t_min*60;
   var t_s = 'or <span>' +t_seco+ ' Seconds </span>';
    document.getElementById("age").innerHTML = age;
    document.getElementById("months").innerHTML =t_m;
    document.getElementById("weeks").innerHTML =t_wnd;
    document.getElementById("days").innerHTML =t_d ;
    document.getElementById("hrs").innerHTML =t_h;  
    document.getElementById("mins").innerHTML =t_mi;
    document.getElementById("sec").innerHTML =t_s ;

}
    