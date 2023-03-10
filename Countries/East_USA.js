
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
    }
    else if( tablet_Australia.style.display === 'block' ){
        east_usa_oceania_phone.style.display = 'block';
        east_usa_oceania_tablet.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
    }
    else if( phone_Australia.style.display === 'block' ){
        east_usa_oceania_phone.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
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
    }
    else if( tablet_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
        east_usa_europe_tablet.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';
    }
    else if( phone_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
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
    }
    else if( tablet_Asia.style.display === 'block' ){
        east_usa_asia_phone.style.display = 'block';
        east_usa_asia_tablet.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
    }
    else if( phone_Asia.style.display === 'block' ){
        east_usa_asia_phone.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
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
    }
    else if( tablet_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
        east_usa_north_america_tablet.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
    }
    else if( phone_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
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