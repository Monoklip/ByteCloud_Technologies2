
const monitor_oceania_phone = document.querySelector('.monitor_oceania_phone');
const monitor_oceania_tablet = document.querySelector('.monitor_oceania_tablet');
const monitor_oceania_laptop = document.querySelector('.monitor_oceania_laptop');

const AustraliaAudit_with_Singapore = () =>{
    if( laptop_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';
        singapore_oceania_tablet.style.display = 'block';
        singapore_oceania_laptop.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
        monitor_oceania_laptop.style.width = '36px';
    }
    else if( tablet_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';
        singapore_oceania_tablet.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
    }
    else if( phone_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
    };

    monitor_oceania_phone.style.transition = '920ms linear';
    monitor_oceania_tablet.style.transition = '920ms linear';
    monitor_oceania_laptop.style.transition = '920ms linear';
};

const AustraliaAudit_without_Singapore = () =>{
    if( laptop_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';
        germany_oceania_laptop.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
        monitor_oceania_laptop.style.width = '36px';
    }
    else if( tablet_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
    }
    else if( phone_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
    };

    monitor_oceania_phone.style.transition = '2550ms linear';
    monitor_oceania_tablet.style.transition = '2550ms linear';
    monitor_oceania_laptop.style.transition = '2550ms linear';
};