const monitor_europe_phone = document.querySelector('.monitor_europe_phone');
const monitor_europe_tablet = document.querySelector('.monitor_europe_tablet');
const monitor_europe_laptop = document.querySelector('.monitor_europe_laptop');

const EuropeAudit_with_Gremany = () =>{
    if( laptop_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';
        germany_europe_laptop.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';
        monitor_europe_laptop.style.width = '36px';
    }
    else if( tablet_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';
    }
    else if( phone_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
    };

    monitor_europe_phone.style.transition = '310ms linear';
    monitor_europe_tablet.style.transition = '310ms linear';
    monitor_europe_laptop.style.transition = '310ms linear';
};

const EuropeAudit_without_Gremany = () =>{
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
};
