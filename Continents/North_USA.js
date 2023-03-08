
const North_America_Audit_with_EastUSA = () =>{
    if( laptop_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
        east_usa_north_america_tablet.style.display = 'block';
        east_usa_north_america_laptop.style.display = 'block';
    }
    else if( tablet_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
        east_usa_north_america_tablet.style.display = 'block';
    }
    else if( phone_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
    };
};

const North_America_Audit_without_EastUSA = () =>{
    if( laptop_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';
        west_usa_north_america_tablet.style.display = 'block';
        west_usa_north_america_laptop.style.display = 'block';
    }
    else if( tablet_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';
        west_usa_north_america_tablet.style.display = 'block';
    }
    else if( phone_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';
    };
};