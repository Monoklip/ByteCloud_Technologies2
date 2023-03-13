
const monitor_south_america_phone = document.querySelector('.monitor_south_america_phone');
const monitor_south_america_tablet = document.querySelector('.monitor_south_america_tablet');
const monitor_south_america_laptop = document.querySelector('.monitor_south_america_laptop');

const ByteCloudSouth_USA = document.getElementById('ByteCloud_South_USA');
const starSouth_USAText = document.getElementById('star_South_USA');
const latencySouth_USAText = document.getElementById('latency_South_USA');
const timeSouth_USAText = document.getElementById('time_South_USA');
const videoSouth_USAText = document.getElementById('video_South_USA');

const ObjectStorageSouth_USA = document.getElementById('ObjectStorage_South_USA');
const star_slowlySouth_USAText = document.getElementById('star_slowly_South_USA');
const latency_slowlySouth_USAText = document.getElementById('latency_slowly_South_USA');
const time_slowlySouth_USAText = document.getElementById('time_slowly_South_USA');
const video_slowlySouth_USAText = document.getElementById('video_slowly_South_USA');

const text_South_USA = document.querySelector('.text_South_USA');

const South_USA_Audit_with_West_USA = () =>{
    if( laptop_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';
        west_usa_south_america_tablet.style.display = 'block';
        west_usa_south_america_laptop.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';
        monitor_south_america_laptop.style.width = '36px';

        text_South_USA.style.display = 'block';
    }
    else if( tablet_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';
        west_usa_south_america_tablet.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';

        text_South_USA.style.display = 'block';
    }
    else if( phone_south_USA.style.display === 'block' ){
        west_usa_south_america_phone.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';

        text_South_USA.style.display = 'block';
    };

    monitor_south_america_phone.style.transition = '1390ms linear';
    monitor_south_america_tablet.style.transition = '1390ms linear';
    monitor_south_america_laptop.style.transition = '1390ms linear';

    text_South_USA.textContent = 'latency: 181';

    setTimeout(()=>{
        text_South_USA.textContent = 'time: 13 sec';
    },1390);
};

const South_USA_Audit_without_West_USA = () =>{
    if( laptop_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';
        east_usa_south_america_tablet.style.display = 'block';
        east_usa_south_america_laptop.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';
        monitor_south_america_laptop.style.width = '36px';

        text_South_USA.style.display = 'block';
    }
    else if( tablet_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';
        east_usa_south_america_tablet.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';
        monitor_south_america_tablet.style.width = '30px';

        text_South_USA.style.display = 'block';
    }
    else if( phone_south_USA.style.display === 'block' ){
        east_usa_south_america_phone.style.display = 'block';

        monitor_south_america_phone.style.width = '28px';

        text_South_USA.style.display = 'block';
    };

    monitor_south_america_phone.style.transition = '1810ms linear';
    monitor_south_america_tablet.style.transition = '1810ms linear';
    monitor_south_america_laptop.style.transition = '1810ms linear';

    text_South_USA.textContent = 'latency: 139';

    setTimeout(()=>{
        text_South_USA.textContent = 'time: 13 sec';
    },1810);
};

const South_USA_finally_with_West_USA = () => {
    ByteCloudSouth_USA.style.display = 'grid';
    starSouth_USAText.textContent = '☆☆★★★';
    latencySouth_USAText.textContent = 165;
    timeSouth_USAText.textContent = '18 sec';
    videoSouth_USAText.textContent = '1080 Full HD';
};
const South_USA_finally_without_West_USA = () => {
    ByteCloudSouth_USA.style.display = 'grid';
    starSouth_USAText.textContent = '☆☆★★★';
    latencySouth_USAText.textContent = 139;
    timeSouth_USAText.textContent = '13 sec';
    videoSouth_USAText.textContent = '1080 Full HD';
};

const South_USA_finally_only_Singapore = () => {
    ObjectStorageSouth_USA.style.display = 'grid';
    star_slowlySouth_USAText.textContent = '☆☆☆☆★';
    latency_slowlySouth_USAText.textContent = 367;
    time_slowlySouth_USAText.textContent = '36 sec';
    video_slowlySouth_USAText.textContent = '480p';
};

const South_USA_finally_only_Germany = () => {
    ObjectStorageSouth_USA.style.display = 'grid';
    star_slowlySouth_USAText.textContent = '☆☆★★★';
    latency_slowlySouth_USAText.textContent = 174;
    time_slowlySouth_USAText.textContent = '17 sec';
    video_slowlySouth_USAText.textContent = '1080 Full HD';
};

const South_USA_finally_only_West_USA = () => {
    ObjectStorageSouth_USA.style.display = 'grid';
    star_slowlySouth_USAText.textContent = '☆☆★★★';
    latency_slowlySouth_USAText.textContent = 181;
    time_slowlySouth_USAText.textContent = '18 sec';
    video_slowlySouth_USAText.textContent = '1080 Full HD';
};

const South_USA_finally_only_East_USA = () => {
    ObjectStorageSouth_USA.style.display = 'grid';
    star_slowlySouth_USAText.textContent = '☆☆★★★';
    latency_slowlySouth_USAText.textContent = 139;
    time_slowlySouth_USAText.textContent = '13 sec';
    video_slowlySouth_USAText.textContent = '1080 Full HD';
};