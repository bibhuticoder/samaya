
let clockTimer = setInterval(() => {
    let now = new Date();
    let hr = now.getHours();
    hr = hr % 12 || 12;
    let mins = now.getMinutes() + "";
    if (mins.length === 1) mins = "0" + mins;

    document.getElementById("clock").innerHTML = toNpNumber(hr) + ":" + toNpNumber(mins);
}, 1000);

const renderGreeting = () => {
    var prefix = "शुभ";
    var translations = {
        morning: "प्रभात",
        noon: "मध्यान्ह",
        evening: "सन्ध्या",
        night: "रात्री",
    };
    let trans;
    let hourNow = new Date().getHours();
    if (hourNow >= 1 && hourNow <= 12) trans = translations.morning;
    else if (hourNow > 12 && hourNow <= 16) trans = translations.noon;
    else if (hourNow > 16 && hourNow <= 19) trans = translations.evening;
    else if (hourNow > 19 && hourNow <= 24) trans = translations.night;

    document.getElementById("greeting").innerHTML =  prefix + " " + trans;
}

renderGreeting();


const toNpNumber = (number) => {
    if (!number) return null;
    let dict = {
        0: '०',
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५',
        6: '६',
        7: '७',
        8: '८',
        9: '९',
    };
    let strNum = number + '';
    return strNum.split('').map(n => dict[n] || n).join('');
}