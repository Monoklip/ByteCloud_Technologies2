
const monitor_north_america_phone = document.querySelector('.monitor_north_america_phone');
const monitor_north_america_tablet = document.querySelector('.monitor_north_america_tablet');
const monitor_north_america_laptop = document.querySelector('.monitor_north_america_laptop');

const North_America_Audit_with_EastUSA = () =>{
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
};

const North_America_Audit_without_EastUSA = () =>{
    if( laptop_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';
        west_usa_north_america_tablet.style.display = 'block';
        west_usa_north_america_laptop.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
        monitor_north_america_laptop.style.width = '36px';
    }
    else if( tablet_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';
        west_usa_north_america_tablet.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
    }
    else if( phone_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
    };

    monitor_north_america_phone.style.transition = '320ms linear';
    monitor_north_america_tablet.style.transition = '320ms linear';
    monitor_north_america_laptop.style.transition = '320ms linear';
};
