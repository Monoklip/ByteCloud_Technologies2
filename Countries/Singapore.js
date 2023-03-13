
// ======= Singapore line

const singapore_oceania_phone = document.querySelector('.singapore_oceania_phone');
const singapore_oceania_tablet = document.querySelector('.singapore_oceania_tablet');
const singapore_oceania_laptop = document.querySelector('.singapore_oceania_laptop');

const singapore_asia_phone = document.querySelector('.singapore_asia_phone');
const singapore_asia_tablet = document.querySelector('.singapore_asia_tablet');
const singapore_asia_laptop = document.querySelector('.singapore_asia_laptop');

const singapore_europe_phone = document.querySelector('.singapore_europe_phone');
const singapore_europe_tablet = document.querySelector('.singapore_europe_tablet');
const singapore_europe_laptop = document.querySelector('.singapore_europe_laptop');

const singapore_north_america_phone = document.querySelector('.singapore_north_america_phone');
const singapore_north_america_tablet = document.querySelector('.singapore_north_america_tablet');
const singapore_north_america_laptop = document.querySelector('.singapore_north_america_laptop');

const singapore_south_america_phone = document.querySelector('.singapore_south_america_phone');
const singapore_south_america_tablet = document.querySelector('.singapore_south_america_tablet');
const singapore_south_america_laptop = document.querySelector('.singapore_south_america_laptop');

const on_server_Singapore = () => {

        if( laptop_Australia.style.display === 'block' ){
            singapore_oceania_phone.style.display = 'block';
            singapore_oceania_tablet.style.display = 'block';
            singapore_oceania_laptop.style.display = 'block';
    
            monitor_oceania_phone.style.width = '28px';
            monitor_oceania_tablet.style.width = '30px';
            monitor_oceania_laptop.style.width = '36px';

            text_Oceania.textContent = 'latency: 92';

            setTimeout(()=>{
                text_Oceania.textContent = 'time: 9 sec';
            },920);
        }
        else if( tablet_Australia.style.display === 'block' ){
            singapore_oceania_phone.style.display = 'block';
            singapore_oceania_tablet.style.display = 'block';
    
            monitor_oceania_phone.style.width = '28px';
            monitor_oceania_tablet.style.width = '30px';

            text_Oceania.textContent = 'latency: 92';

            setTimeout(()=>{
                text_Oceania.textContent = 'time: 9 sec';
            },920);
        }
        else if( phone_Australia.style.display === 'block' ){
            singapore_oceania_phone.style.display = 'block';
    
            monitor_oceania_phone.style.width = '28px';

            text_Oceania.textContent = 'latency: 92';

            setTimeout(()=>{
                text_Oceania.textContent = 'time: 9 sec';
            },920);
        };
        
        monitor_oceania_phone.style.transition = '920ms linear';
        monitor_oceania_tablet.style.transition = '920ms linear';
        monitor_oceania_laptop.style.transition = '920ms linear';

        // ===========

        if( laptop_Europe.style.display === 'block' ){
            singapore_europe_phone.style.display = 'block';
            singapore_europe_tablet.style.display = 'block';
            singapore_europe_laptop.style.display = 'block';
    
            monitor_europe_phone.style.width = '28px';
            monitor_europe_tablet.style.width = '30px';
            monitor_europe_laptop.style.width = '36px';

            text_Europe.textContent = 'latency: 250';

            setTimeout(()=>{
                text_Europe.textContent = 'time: 25 sec';
            },2500);
        }
        else if( tablet_Europe.style.display === 'block' ){
            singapore_europe_phone.style.display = 'block';
            singapore_europe_tablet.style.display = 'block';
    
            monitor_europe_phone.style.width = '28px';
            monitor_europe_tablet.style.width = '30px';

            text_Europe.textContent = 'latency: 250';

            setTimeout(()=>{
                text_Europe.textContent = 'time: 25 sec';
            },2500);
        }
        else if( phone_Europe.style.display === 'block' ){
            singapore_europe_phone.style.display = 'block';
    
            monitor_europe_phone.style.width = '28px';

            text_Europe.textContent = 'latency: 250';

            setTimeout(()=>{
                text_Europe.textContent = 'time: 25 sec';
            },2500);
        };
        
        monitor_europe_phone.style.transition = '2500ms linear';
        monitor_europe_tablet.style.transition = '2500ms linear';
        monitor_europe_laptop.style.transition = '2500ms linear';

        // ============

        if( laptop_Asia.style.display === 'block' ){
            singapore_asia_phone.style.display = 'block';
            singapore_asia_tablet.style.display = 'block';
            singapore_asia_laptop.style.display = 'block';
    
            monitor_asia_phone.style.width = '28px';
            monitor_asia_tablet.style.width = '30px';
            monitor_asia_laptop.style.width = '36px';

            text_Asia.textContent = 'latency: 70';

            setTimeout(()=>{
                text_Asia.textContent = 'time: 7 sec';
            },700);
        }
        else if( tablet_Asia.style.display === 'block' ){
            singapore_asia_phone.style.display = 'block';
            singapore_asia_tablet.style.display = 'block';
    
            monitor_asia_phone.style.width = '28px';
            monitor_asia_tablet.style.width = '30px';

            text_Asia.textContent = 'latency: 70';

            setTimeout(()=>{
                text_Asia.textContent = 'time: 7 sec';
            },700);
        }
        else if( phone_Asia.style.display === 'block' ){
            singapore_asia_phone.style.display = 'block';
    
            monitor_asia_phone.style.width = '28px';

            text_Asia.textContent = 'latency: 70';

            setTimeout(()=>{
                text_Asia.textContent = 'time: 7 sec';
            },700);
        };
        
        monitor_asia_phone.style.transition = '700ms linear';
        monitor_asia_tablet.style.transition = '700ms linear';
        monitor_asia_laptop.style.transition = '700ms linear';

        // =============

        if( laptop_north_USA.style.display === 'block' ){
            singapore_north_america_phone.style.display = 'block';
            singapore_north_america_tablet.style.display = 'block';
            singapore_north_america_laptop.style.display = 'block';
    
            monitor_north_america_phone.style.width = '28px';
            monitor_north_america_tablet.style.width = '30px';
            monitor_north_america_laptop.style.width = '36px';

            text_North_USA.textContent = 'latency: 204';

            setTimeout(()=>{
                text_North_USA.textContent = 'time: 20 sec';
            },2040);
        }
        else if( tablet_north_USA.style.display === 'block' ){
            singapore_north_america_phone.style.display = 'block';
            singapore_north_america_tablet.style.display = 'block';
    
            monitor_north_america_phone.style.width = '28px';
            monitor_north_america_tablet.style.width = '30px';

            text_North_USA.textContent = 'latency: 204';

            setTimeout(()=>{
                text_North_USA.textContent = 'time: 20 sec';
            },2040);
        }
        else if( phone_north_USA.style.display === 'block' ){
            singapore_north_america_phone.style.display = 'block';
    
            monitor_north_america_phone.style.width = '28px';

            text_North_USA.textContent = 'latency: 204';

            setTimeout(()=>{
                text_North_USA.textContent = 'time: 20 sec';
            },2040);
        };
        
        monitor_north_america_phone.style.transition = '2040ms linear';
        monitor_north_america_tablet.style.transition = '2040ms linear';
        monitor_north_america_laptop.style.transition = '2040ms linear';

        // ===============

        if( laptop_south_USA.style.display === 'block' ){
            singapore_south_america_phone.style.display = 'block';
            singapore_south_america_tablet.style.display = 'block';
            singapore_south_america_laptop.style.display = 'block';
    
            monitor_south_america_phone.style.width = '28px';
            monitor_south_america_tablet.style.width = '30px';
            monitor_south_america_laptop.style.width = '36px';

            text_South_USA.textContent = 'latency: 367';

            setTimeout(()=>{
                text_South_USA.textContent = 'time: 36 sec';
            }, 3670);
        }
        else if( tablet_south_USA.style.display === 'block' ){
            singapore_south_america_phone.style.display = 'block';
            singapore_south_america_tablet.style.display = 'block';
    
            monitor_south_america_phone.style.width = '28px';
            monitor_south_america_tablet.style.width = '30px';

            text_South_USA.textContent = 'latency: 367';

            setTimeout(()=>{
                text_South_USA.textContent = 'time: 36 sec';
            }, 3670);
        }
        else if( phone_south_USA.style.display === 'block' ){
            singapore_south_america_phone.style.display = 'block';
    
            monitor_south_america_phone.style.width = '28px';

            text_South_USA.textContent = 'latency: 367';

            setTimeout(()=>{
                text_South_USA.textContent = 'time: 36 sec';
            }, 3670);
        };
        
        monitor_south_america_phone.style.transition = '3670ms linear';
        monitor_south_america_tablet.style.transition = '3670ms linear';
        monitor_south_america_laptop.style.transition = '3670ms linear';
};