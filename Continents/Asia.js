const AsiaAudit_with_Singapore = () =>{
    if( laptop_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';
        singapore_asia_tablet.style.display = 'block';
        singapore_asia_laptop.style.display = 'block';
    }
    else if( tablet_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';
        singapore_asia_tablet.style.display = 'block';
    }
    else if( phone_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';
    };
};

const AsiaAudit_without_Singapore = () =>{
    if( laptop_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';
        germany_asia_laptop.style.display = 'block';
    }
    else if( tablet_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';
    }
    else if( phone_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';
    };
};