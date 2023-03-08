
const South_USA_Audit_with_West_USA = () =>{
    if( laptop_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';
        west_usa_south_america_tablet.style.display = 'block';
        west_usa_south_america_laptop.style.display = 'block';
    }
    else if( tablet_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';
        west_usa_south_america_tablet.style.display = 'block';
    }
    else if( phone_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';
    };
};

const South_USA_Audit_without_West_USA = () =>{
    if( laptop_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';
        east_usa_south_america_tablet.style.display = 'block';
        east_usa_south_america_laptop.style.display = 'block';
    }
    else if( tablet_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';
        east_usa_south_america_tablet.style.display = 'block';
    }
    else if( phone_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';
    };
};