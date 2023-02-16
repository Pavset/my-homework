function updateTime() {
    hElem = document.querySelector('.hours');// Здесь должен быть элемент hours 
    mElem = document.querySelector('.minutes');// Здесь должен быть элемент minutes 
    sElem = document.querySelector('.seconds');// Здесь должен быть элемент seconds

    const clock = new Date();
    
    hElem.innerHTML = clock.getHours();
    mElem.innerHTML = clock.getMinutes();
    sElem.innerHTML = clock.getSeconds();
}
// Здесь должен быть задан интервал
setInterval(updateTime, 1000);