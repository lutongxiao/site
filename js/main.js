// Function1 Calendar reference:https://blog.csdn.net/qq_26102281/article/details/93664484
function transForm(n){
    if (n<10)
    {
        return '0'+n;
    }else{
        return ''+n;
    }
}
function transformC(num){
    if (num==1){return 'Monday'}
    if (num==2){return 'Tuesday'}
    if (num==3){return 'Wednesday'}
    if (num==4){return 'Thursday'}
    if (num==5){return 'Friday'}
    if (num==6){return 'Saturday'}
    else{return 'Sunday'}
}
window.onload=function(){
    function showDate(){
        let oDate=new Date();
        let gYear=oDate.getFullYear();
        let gMonth=oDate.getUTCMonth()+1;
        let gDay=oDate.getUTCDate();
        let gDay1=oDate.getUTCDay();
        let t=transForm(gYear)+'.'+transForm(gMonth)+'.'+transForm(gDay)+"  "+transformC(gDay1);
        document.getElementById('calendar').innerHTML=t;
    }
    setInterval(showDate,500);
}
// Function2 Temperature 
window.onload=function(){
    let xhr=new XMLHttpRequest();
    let city = document.getElementById('title').innerHTML.trim().split(" ")[0];
    let cityname = ''
    if(city=='Beijing'){
        cityname = '北京';
    }
    else if(city=='Nanjing'){
        cityname = '南京';
    }
    else{
        cityname = '长沙'
    }
    xhr.open('get','http://wthrcdn.etouch.cn/WeatherApi?city='+cityname);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            let resp=xhr.responseXML.querySelector('resp');
            let we=resp.querySelectorAll("weather");
            let dayWeather=we[1].querySelector("day").querySelector("type").innerHTML;
            let dayGw=we[1].querySelector("high").innerHTML.substring(3,6);
            let dayDw=we[1].querySelector("low").innerHTML.substring(3,6);
            document.getElementById('calendar').innerHTML+='&nbsp&nbsp&nbsp'+dayGw+'/'+dayDw
        }
    }
    xhr.send();
}