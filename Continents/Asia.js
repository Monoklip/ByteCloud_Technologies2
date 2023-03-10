
const monitor_asia_phone = document.querySelector('.monitor_asia_phone');
const monitor_asia_tablet = document.querySelector('.monitor_asia_tablet');
const monitor_asia_laptop = document.querySelector('.monitor_asia_laptop');

const AsiaAudit_with_Singapore = () =>{
    if( laptop_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';
        singapore_asia_tablet.style.display = 'block';
        singapore_asia_laptop.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
        monitor_asia_laptop.style.width = '36px';
    }
    else if( tablet_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';
        singapore_asia_tablet.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
    }
    else if( phone_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
    };

    monitor_asia_phone.style.transition = '700ms linear';
    monitor_asia_tablet.style.transition = '700ms linear';
    monitor_asia_laptop.style.transition = '700ms linear';
};

const AsiaAudit_without_Singapore = () =>{
    if( laptop_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';
        germany_asia_laptop.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
        monitor_asia_laptop.style.width = '36px';
    }
    else if( tablet_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
    }
    else if( phone_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
    };

    monitor_asia_phone.style.transition = '2960ms linear';
    monitor_asia_tablet.style.transition = '2960ms linear';
    monitor_asia_laptop.style.transition = '2960ms linear';
};