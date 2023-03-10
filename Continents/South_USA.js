
const monitor_south_america_phone = document.querySelector('.monitor_south_america_phone');
const monitor_south_america_tablet = document.querySelector('.monitor_south_america_tablet');
const monitor_south_america_laptop = document.querySelector('.monitor_south_america_laptop');

const South_USA_Audit_with_West_USA = () =>{
    if( laptop_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';
        west_usa_south_america_tablet.style.display = 'block';
        west_usa_south_america_laptop.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';
        monitor_south_america_laptop.style.width = '36px';
    }
    else if( tablet_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';
        west_usa_south_america_tablet.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';
    }
    else if( phone_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
    };

    monitor_south_america_phone.style.transition = '1390ms linear';
    monitor_south_america_tablet.style.transition = '1390ms linear';
    monitor_south_america_laptop.style.transition = '1390ms linear';
};

const South_USA_Audit_without_West_USA = () =>{
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

    monitor_south_america_phone.style.transition = '1810ms linear';
    monitor_south_america_tablet.style.transition = '1810ms linear';
    monitor_south_america_laptop.style.transition = '1810ms linear';
};
