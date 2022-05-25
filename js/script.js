document.addEventListener("DOMContentLoaded", () => {
    // таби
    let tab = document.querySelectorAll('.tabheader__item '),
        tabContent = document.querySelectorAll('.tabcontent'),
        tabParent = document.querySelector('.tabheader__items');

    function tabHide() {
        tabContent.forEach(item => {
            item.classList.add('hide')
            item.classList.remove('show', 'fade')

        })
        tab.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function tabShow(i = 0) {
        tabContent[i].classList.add('show', 'fade')
        tabContent[i].classList.remove('hide')
        tab[i].classList.add('tabheader__item_active')
    }

    tabHide()
    tabShow()

    tabParent.addEventListener('click', (e) => {
        let target = e.target
        if (target && target.classList.contains('tabheader__item')) {
            tab.forEach((item, i) => {
                if (target == item) {
                    tabHide()
                    tabShow(i)
                }
            })
        }
    })

    // таймер
    let deadline = '2022-08-01'

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;

        let t = Date.parse(endtime) - Date.parse(new Date())

        if(t<=0){
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0
        }else{
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((t / (1000 * 60)) % 60),
            seconds = Math.floor((t / 1000) % 60)
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function setClock(selector, endtime) {
        let timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            studyEnd = document.querySelector('.promotion__timer .title')

        timeInterval = setInterval(updateClock, 1000)
        studyEnd.innerHTML = 'До кінця навчання залишилось:'

        updateClock()
        function updateClock() {
            let t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (total <= 0) {
                clearInterval(timeInterval)
            }
        }
    }

    setClock('.timer', deadline)
})