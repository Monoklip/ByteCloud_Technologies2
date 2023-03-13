
// ======== East_USA line

const east_usa_north_america_phone = document.querySelector('.east_usa_north_america_phone');
const east_usa_north_america_tablet = document.querySelector('.east_usa_north_america_tablet');
const east_usa_north_america_laptop = document.querySelector('.east_usa_north_america_laptop');

const east_usa_south_america_phone = document.querySelector('.east_usa_south_america_phone');
const east_usa_south_america_tablet = document.querySelector('.east_usa_south_america_tablet');
const east_usa_south_america_laptop = document.querySelector('.east_usa_south_america_laptop');

const east_usa_europe_phone = document.querySelector('.east_usa_europe_phone');
const east_usa_europe_tablet = document.querySelector('.east_usa_europe_tablet');
const east_usa_europe_laptop = document.querySelector('.east_usa_europe_laptop');

const east_usa_asia_phone = document.querySelector('.east_usa_asia_phone');
const east_usa_asia_tablet = document.querySelector('.east_usa_asia_tablet');
const east_usa_asia_laptop = document.querySelector('.east_usa_asia_laptop');

const east_usa_oceania_phone = document.querySelector('.east_usa_oceania_phone');
const east_usa_oceania_tablet = document.querySelector('.east_usa_oceania_tablet');
const east_usa_oceania_laptop = document.querySelector('.east_usa_oceania_laptop');

const on_server_East_USA = () => {

    if( laptop_Australia.style.display === 'block' ){
        east_usa_oceania_phone.style.display = 'block';
        east_usa_oceania_tablet.style.display = 'block';
        east_usa_oceania_laptop.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
        monitor_oceania_laptop.style.width = '36px';

        text_Oceania.textContent = 'latency: 207';

        setTimeout(() => {
            text_Oceania.textContent = 'time: 20 sec';
        }, 2070);
    }
    else if( tablet_Australia.style.display === 'block' ){
        east_usa_oceania_phone.style.display = 'block';
        east_usa_oceania_tablet.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';

        text_Oceania.textContent = 'latency: 207';

        setTimeout(() => {
            text_Oceania.textContent = 'time: 20 sec';
        }, 2070);
    }
    else if( phone_Australia.style.display === 'block' ){
        east_usa_oceania_phone.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';

        text_Oceania.textContent = 'latency: 207';

        setTimeout(() => {
            text_Oceania.textContent = 'time: 20 sec';
        }, 2070);
    };
    
    monitor_oceania_phone.style.transition = '2070ms linear';
    monitor_oceania_tablet.style.transition = '2070ms linear';
    monitor_oceania_laptop.style.transition = '2070ms linear';

    // ===========

    if( laptop_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
        east_usa_europe_tablet.style.display = 'block';
        east_usa_europe_laptop.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';
        monitor_europe_laptop.style.width = '36px';

        text_Europe.textContent = 'latency: 82';

        setTimeout(() => {
            text_Europe.textContent = 'time: 8 sec';
        }, 820);
    }
    else if( tablet_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
        east_usa_europe_tablet.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';

        text_Europe.textContent = 'latency: 82';

        setTimeout(() => {
            text_Europe.textContent = 'time: 8 sec';
        }, 820);
    }
    else if( phone_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';

        monitor_europe_phone.style.width = '28px';

        text_Europe.textContent = 'latency: 82';

        setTimeout(() => {
            text_Europe.textContent = 'time: 8 sec';
        }, 820);
    };
    
    monitor_europe_phone.style.transition = '820ms linear';
    monitor_europe_tablet.style.transition = '820ms linear';
    monitor_europe_laptop.style.transition = '820ms linear';

    // ============

    if( laptop_Asia.style.display === 'block' ){
        east_usa_asia_phone.style.display = 'block';
        east_usa_asia_tablet.style.display = 'block';
        east_usa_asia_laptop.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
        monitor_asia_laptop.style.width = '36px';

         text_Asia.textContent = 'latency: 232';

        setTimeout(() => {
            text_Asia.textContent = 'time: 23 sec';
        }, 2320);
    }
    else if( tablet_Asia.style.display === 'block' ){
        east_usa_asia_phone.style.display = 'block';
        east_usa_asia_tablet.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';

         text_Asia.textContent = 'latency: 232';

        setTimeout(() => {
            text_Asia.textContent = 'time: 23 sec';
        }, 2320);
    }
    else if( phone_Asia.style.display === 'block' ){
        east_usa_asia_phone.style.display = 'block';

        monitor_asia_phone.style.width = '28px';

         text_Asia.textContent = 'latency: 232';

        setTimeout(() => {
            text_Asia.textContent = 'time: 23 sec';
        }, 2320);
    };
    
    monitor_asia_phone.style.transition = '2320ms linear';
    monitor_asia_tablet.style.transition = '2320ms linear';
    monitor_asia_laptop.style.transition = '2320ms linear';

    // =============

    if( laptop_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
        east_usa_north_america_tablet.style.display = 'block';
        east_usa_north_america_laptop.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
        monitor_north_america_laptop.style.width = '36px';

        text_North_USA.textContent = 'latency: 139';

        setTimeout(() => {
            text_North_USA.textContent = 'time: 13 sec';
        }, 1390);
    }
    else if( tablet_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
        east_usa_north_america_tablet.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';

        text_North_USA.textContent = 'latency: 139';

        setTimeout(() => {
            text_North_USA.textContent = 'time: 13 sec';
        }, 1390);
    }
    else if( phone_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';

        text_North_USA.textContent = 'latency: 139';

        setTimeout(() => {
            text_North_USA.textContent = 'time: 13 sec';
        }, 1390);
    };
    
    monitor_north_america_phone.style.transition = '480ms linear';
    monitor_north_america_tablet.style.transition = '480ms linear';
    monitor_north_america_laptop.style.transition = '480ms linear';

    // ===============

    if( laptop_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';
        east_usa_south_america_tablet.style.display = 'block';
        east_usa_south_america_laptop.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';
        monitor_south_america_laptop.style.width = '36px';
    }
    else if( tablet_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';
        east_usa_south_america_tablet.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';
    }
    else if( phone_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
    };
    
    monitor_south_america_phone.style.transition = '1390ms linear';
    monitor_south_america_tablet.style.transition = '1390ms linear';
    monitor_south_america_laptop.style.transition = '1390ms linear';
};