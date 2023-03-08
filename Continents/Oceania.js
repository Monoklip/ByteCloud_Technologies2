
const AustraliaAudit_with_Singapore = () =>{
    if( laptop_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';
        singapore_oceania_tablet.style.display = 'block';
        singapore_oceania_laptop.style.display = 'block';
    }
    else if( tablet_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';
        singapore_oceania_tablet.style.display = 'block';
    }
    else if( phone_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';
    };
};

const AustraliaAudit_without_Singapore = () =>{
    if( laptop_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';
        germany_oceania_laptop.style.display = 'block';
    }
    else if( tablet_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';
    }
    else if( phone_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';
    };
};