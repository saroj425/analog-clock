let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let second = document.getElementById("second")

//let d = new Date();

//console.log("Date===",d)

setInterval(()=>{
    let d = new Date();
    hr= d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();

    console.log("Hours,Min,Second",hr,min,sec)
    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hours.style.transform = `rotate(${hr_rotation}deg)`;
    minutes.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
},1000)
