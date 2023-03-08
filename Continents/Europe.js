const EuropeAudit_with_Gremany = () =>{
    if( laptop_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';
        germany_europe_laptop.style.display = 'block';
    }
    else if( tablet_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';
    }
    else if( phone_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';
    };
};

const EuropeAudit_without_Gremany = () =>{
    if( laptop_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
        east_usa_europe_tablet.style.display = 'block';
        east_usa_europe_laptop.style.display = 'block';
    }
    else if( tablet_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
        east_usa_europe_tablet.style.display = 'block';
    }
    else if( phone_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
    };
};