update()
setInterval(update, 1000)

function update(){
    date = new Date();
    
    document.getElementById("display").innerHTML =  formatTime(date);

    function  formatTime(date){
    let hour = date.getHours(); 
    let minutes =  date.getMinutes(); 
    let seconds = date.getSeconds(); 
    let amOrpm = hour >= 12 ? "PM" : "AM";

    hour = (hour % 12) || 12;

    hour = formatZero(hour);
    minutes = formatZero(minutes);
    seconds = formatZero(seconds);

    return `${hour}:${minutes}:${seconds} ${amOrpm}`
}
function formatZero(time){
     time = time.toString();
    return time.length < 2 ? "0" +  time : time
}
}