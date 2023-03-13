
// ======== Germany line

const germany_europe_phone = document.querySelector('.germany_europe_phone');
const germany_europe_tablet = document.querySelector('.germany_europe_tablet');
const germany_europe_laptop = document.querySelector('.germany_europe_laptop');

const germany_oceania_phone = document.querySelector('.germany_oceania_phone');
const germany_oceania_tablet = document.querySelector('.germany_oceania_tablet');
const germany_oceania_laptop = document.querySelector('.germany_oceania_laptop');

const germany_asia_phone = document.querySelector('.germany_asia_phone');
const germany_asia_tablet = document.querySelector('.germany_asia_tablet');
const germany_asia_laptop = document.querySelector('.germany_asia_laptop');

const germany_north_america_phone = document.querySelector('.germany_north_america_phone');
const germany_north_america_tablet = document.querySelector('.germany_north_america_tablet');
const germany_north_america_laptop = document.querySelector('.germany_north_america_laptop');

const germany_south_america_phone = document.querySelector('.germany_south_america_phone');
const germany_south_america_tablet = document.querySelector('.germany_south_america_tablet');
const germany_south_america_laptop = document.querySelector('.germany_south_america_laptop');

const on_server_Germany = () => {

    if (laptop_Australia.style.display === 'block') {
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';
        germany_oceania_laptop.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
        monitor_oceania_laptop.style.width = '36px';

        text_Oceania.textContent = 'latency: 255';

        setTimeout(() => {
            text_Oceania.textContent = 'time: 25 sec';
        }, 2550);
    }
    else if (tablet_Australia.style.display === 'block') {
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';

        text_Oceania.textContent = 'latency: 255';

        setTimeout(() => {
            text_Oceania.textContent = 'time: 25 sec';
        }, 2550);
    }
    else if (phone_Australia.style.display === 'block') {
        germany_oceania_phone.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';

        text_Oceania.textContent = 'latency: 255';

        setTimeout(() => {
            text_Oceania.textContent = 'time: 25 sec';
        }, 2550);
    };

    monitor_oceania_phone.style.transition = '2550ms linear';
    monitor_oceania_tablet.style.transition = '2550ms linear';
    monitor_oceania_laptop.style.transition = '2550ms linear';

    // ===========

    if (laptop_Europe.style.display === 'block') {
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';
        germany_europe_laptop.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';
        monitor_europe_laptop.style.width = '36px';

        text_Europe.textContent = 'latency: 31';

        setTimeout(() => {
            text_Europe.textContent = 'time: 3 sec';
        }, 310);
    }
    else if (tablet_Europe.style.display === 'block') {
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';

        text_Europe.textContent = 'latency: 31';

        setTimeout(() => {
            text_Europe.textContent = 'time: 3 sec';
        }, 310);
    }
    else if (phone_Europe.style.display === 'block') {
        germany_europe_phone.style.display = 'block';

        monitor_europe_phone.style.width = '28px';

        text_Europe.textContent = 'latency: 31';

        setTimeout(() => {
            text_Europe.textContent = 'time: 3 sec';
        }, 310);
    };

    monitor_europe_phone.style.transition = '310ms linear';
    monitor_europe_tablet.style.transition = '310ms linear';
    monitor_europe_laptop.style.transition = '310ms linear';

    // ============

    if (laptop_Asia.style.display === 'block') {
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';
        germany_asia_laptop.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
        monitor_asia_laptop.style.width = '36px';

        text_Asia.textContent = 'latency: 296';

        setTimeout(() => {
            text_Asia.textContent = 'time: 29 sec';
        }, 2960);
    }
    else if (tablet_Asia.style.display === 'block') {
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';

        text_Asia.textContent = 'latency: 296';

        setTimeout(() => {
            text_Asia.textContent = 'time: 29 sec';
        }, 2960);
    }
    else if (phone_Asia.style.display === 'block') {
        germany_asia_phone.style.display = 'block';

        monitor_asia_phone.style.width = '28px';

        text_Asia.textContent = 'latency: 296';

        setTimeout(() => {
            text_Asia.textContent = 'time: 29 sec';
        }, 2960);
    };

    monitor_asia_phone.style.transition = '2960ms linear';
    monitor_asia_tablet.style.transition = '2960ms linear';
    monitor_asia_laptop.style.transition = '2960ms linear';

    // =============

    if (laptop_north_USA.style.display === 'block') {
        germany_north_america_phone.style.display = 'block';
        germany_north_america_tablet.style.display = 'block';
        germany_north_america_laptop.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
        monitor_north_america_laptop.style.width = '36px';

        text_North_USA.textContent = 'latency: 122';

        setTimeout(() => {
            text_North_USA.textContent = 'time: 12 sec';
        }, 1220);
    }
    else if (tablet_north_USA.style.display === 'block') {
        germany_north_america_phone.style.display = 'block';
        germany_north_america_tablet.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';

        text_North_USA.textContent = 'latency: 122';

        setTimeout(() => {
            text_North_USA.textContent = 'time: 12 sec';
        }, 1220);
    }
    else if (phone_north_USA.style.display === 'block') {
        germany_north_america_phone.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';

        text_North_USA.textContent = 'latency: 122';

        setTimeout(() => {
            text_North_USA.textContent = 'time: 12 sec';
        }, 1220);
    };

    monitor_north_america_phone.style.transition = '1220ms linear';
    monitor_north_america_tablet.style.transition = '1220ms linear';
    monitor_north_america_laptop.style.transition = '1220ms linear';

    // ===============

    if (laptop_south_USA.style.display === 'block') {
        germany_south_america_phone.style.display = 'block';
        germany_south_america_tablet.style.display = 'block';
        germany_south_america_laptop.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';
        monitor_south_america_laptop.style.width = '36px';

        text_South_USA.textContent = 'latency: 174';

        setTimeout(() => {
            text_South_USA.textContent = 'time: 17 sec';
        }, 1740);
    }
    else if (tablet_south_USA.style.display === 'block') {
        germany_south_america_phone.style.display = 'block';
        germany_south_america_tablet.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';

        text_South_USA.textContent = 'latency: 174';

        setTimeout(() => {
            text_South_USA.textContent = 'time: 17 sec';
        }, 1740);
    }
    else if (phone_south_USA.style.display === 'block') {
        germany_south_america_phone.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';

        text_South_USA.textContent = 'latency: 174';

        setTimeout(() => {
            text_South_USA.textContent = 'time: 17 sec';
        }, 1740);
    };

    monitor_south_america_phone.style.transition = `1740ms linear`;
    monitor_south_america_tablet.style.transition = '1740ms linear';
    monitor_south_america_laptop.style.transition = '1740ms linear';
};