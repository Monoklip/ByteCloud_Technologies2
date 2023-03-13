
const monitor_north_america_phone = document.querySelector('.monitor_north_america_phone');
const monitor_north_america_tablet = document.querySelector('.monitor_north_america_tablet');
const monitor_north_america_laptop = document.querySelector('.monitor_north_america_laptop');

const ByteCloudNorth_USA = document.getElementById('ByteCloud_North_USA');
const starNorth_USAText = document.getElementById('star_North_USA');
const latencyNorth_USAText = document.getElementById('latency_North_USA');
const timeNorth_USAText = document.getElementById('time_North_USA');
const videoNorth_USAText = document.getElementById('video_North_USA');

const ObjectStorageNorth_USA = document.getElementById('ObjectStorage_North_USA');
const star_slowlyNorth_USAText = document.getElementById('star_slowly_North_USA');
const latency_slowlyNorth_USAText = document.getElementById('latency_slowly_North_USA');
const time_slowlyNorth_USAText = document.getElementById('time_slowly_North_USA');
const video_slowlyNorth_USAText = document.getElementById('video_slowly_North_USA');

const text_North_USA = document.querySelector('.text_North_USA');

const North_America_Audit_with_EastUSA = () =>{
    if( laptop_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
        east_usa_north_america_tablet.style.display = 'block';
        east_usa_north_america_laptop.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
        monitor_north_america_laptop.style.width = '36px';

        text_North_USA.style.display = 'block';
    }
    else if( tablet_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';
        east_usa_north_america_tablet.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';   
        
        text_North_USA.style.display = 'block';
    }
    else if( phone_north_USA.style.display === 'block' ){
        east_usa_north_america_phone.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        
        text_North_USA.style.display = 'block';
    };
    
    monitor_north_america_phone.style.transition = '480ms linear';
    monitor_north_america_tablet.style.transition = '480ms linear';
    monitor_north_america_laptop.style.transition = '480ms linear';

    text_North_USA.textContent = 'latency: 48';

    setTimeout(()=>{
        text_North_USA.textContent = 'time: 4 sec';
    },480);
};

const North_America_Audit_without_EastUSA = () =>{
    if( laptop_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';
        west_usa_north_america_tablet.style.display = 'block';
        west_usa_north_america_laptop.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
        monitor_north_america_laptop.style.width = '36px';
        
        text_North_USA.style.display = 'block';
    }
    else if( tablet_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';
        west_usa_north_america_tablet.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        monitor_north_america_tablet.style.width = '30px';
        
        text_North_USA.style.display = 'block';
    }
    else if( phone_north_USA.style.display === 'block' ){
        west_usa_north_america_phone.style.display = 'block';

        monitor_north_america_phone.style.width = '28px';
        
        text_North_USA.style.display = 'block';
    };

    monitor_north_america_phone.style.transition = '320ms linear';
    monitor_north_america_tablet.style.transition = '320ms linear';
    monitor_north_america_laptop.style.transition = '320ms linear';

    text_North_USA.textContent = 'latency: 48';

    setTimeout(()=>{
        text_North_USA.textContent = 'time: 3 sec';
    },320);
};

const North_USA_finally_with_East_USA = () => {
    ByteCloudNorth_USA.style.display = 'grid';
    starNorth_USAText.textContent = '★★★★★';
    latencyNorth_USAText.textContent = 48;
    timeNorth_USAText.textContent = '4 sec';
    videoNorth_USAText.textContent = '4K/2160p Ultra HD';
};
const North_USA_finally_without_East_USA = () => {
    ByteCloudNorth_USA.style.display = 'grid';
    starNorth_USAText.textContent = '★★★★★';
    latencyNorth_USAText.textContent = 32;
    timeNorth_USAText.textContent = '3 sec';
    videoNorth_USAText.textContent = '4K/2160p Ultra HD';
};

const North_USA_finally_only_Singapore = () => {
    ObjectStorageNorth_USA.style.display = 'grid';
    star_slowlyNorth_USAText.textContent = '☆☆☆★★';
    latency_slowlyNorth_USAText.textContent = 204;
    time_slowlyNorth_USAText.textContent = '20 sec';
    video_slowlyNorth_USAText.textContent = '720p';
};

const North_USA_finally_only_Germany = () => {
    ObjectStorageNorth_USA.style.display = 'grid';
    star_slowlyNorth_USAText.textContent = '☆★★★★';
    latency_slowlyNorth_USAText.textContent = 122;
    time_slowlyNorth_USAText.textContent = '12 sec';
    video_slowlyNorth_USAText.textContent = '4K/2160p Ultra HD';
};

const North_USA_finally_only_West_USA = () => {
    ObjectStorageNorth_USA.style.display = 'grid';
    star_slowlyNorth_USAText.textContent = '★★★★★';
    latency_slowlyNorth_USAText.textContent = 32;
    time_slowlyNorth_USAText.textContent = '3 sec';
    video_slowlyNorth_USAText.textContent = '4K/2160p Ultra HD';
};

const North_USA_finally_only_East_USA = () => {
    ObjectStorageNorth_USA.style.display = 'grid';
    star_slowlyNorth_USAText.textContent = '★★★★★';
    latency_slowlyNorth_USAText.textContent = 48;
    time_slowlyNorth_USAText.textContent = '4 sec';
    video_slowlyNorth_USAText.textContent = '4K/2160p Ultra HD';
};