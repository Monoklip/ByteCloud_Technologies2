
const monitor_oceania_phone = document.querySelector('.monitor_oceania_phone');
const monitor_oceania_tablet = document.querySelector('.monitor_oceania_tablet');
const monitor_oceania_laptop = document.querySelector('.monitor_oceania_laptop');

const ByteCloudOceania = document.getElementById('ByteCloud_Oceania');
const starOceaniaText = document.getElementById('star_Oceania');
const latencyOceaniaText = document.getElementById('latency_Oceania');
const timeOceaniaText = document.getElementById('time_Oceania');
const videoOceaniaText = document.getElementById('video_Oceania');

const ObjectStorageOceania = document.getElementById('ObjectStorage_Oceania');
const star_slowlyOceaniaText = document.getElementById('star_slowly_Oceania');
const latency_slowlyOceaniaText = document.getElementById('latency_slowly_Oceania');
const time_slowlyOceaniaText = document.getElementById('time_slowly_Oceania');
const video_slowlyOceaniaText = document.getElementById('video_slowly_Oceania');

const text_Oceania = document.querySelector('.text_Oceania');

const AustraliaAudit_with_Singapore = () =>{
    if( laptop_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';
        singapore_oceania_tablet.style.display = 'block';
        singapore_oceania_laptop.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
        monitor_oceania_laptop.style.width = '36px';

        text_Oceania.style.display = 'block';
    }
    else if( tablet_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';
        singapore_oceania_tablet.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';

        text_Oceania.style.display = 'block';
    }
    else if( phone_Australia.style.display === 'block' ){
        singapore_oceania_phone.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        
        text_Oceania.style.display = 'block';
    };

    monitor_oceania_phone.style.transition = '920ms linear';
    monitor_oceania_tablet.style.transition = '920ms linear';
    monitor_oceania_laptop.style.transition = '920ms linear';

    text_Oceania.textContent = 'latency: 92';

    setTimeout(()=>{
        text_Oceania.textContent = 'time: 9 sec';
    },920);
};

const AustraliaAudit_without_Singapore = () =>{
    if( laptop_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';
        germany_oceania_laptop.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';
        monitor_oceania_laptop.style.width = '36px';

        text_Oceania.style.display = 'block';
    }
    else if( tablet_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';
        germany_oceania_tablet.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';
        monitor_oceania_tablet.style.width = '30px';

        text_Oceania.style.display = 'block';
    }
    else if( phone_Australia.style.display === 'block' ){
        germany_oceania_phone.style.display = 'block';

        monitor_oceania_phone.style.width = '28px';

        text_Oceania.style.display = 'block';
    };

    monitor_oceania_phone.style.transition = '2550ms linear';
    monitor_oceania_tablet.style.transition = '2550ms linear';
    monitor_oceania_laptop.style.transition = '2550ms linear';

    text_Oceania.textContent = 'latency: 255';

    setTimeout(()=>{
        text_Oceania.textContent = 'time: 25 sec';
    },2550);
};

const Oceania_finally_with_Singapore = () => {
    ByteCloudOceania.style.display = 'grid';
    starOceaniaText.textContent = '★★★★★';
    latencyOceaniaText.textContent = 92;
    timeOceaniaText.textContent = '9 sec';
    videoOceaniaText.textContent = '4K/2160p Ultra HD';
};
const Oceania_finally_without_Singapore = () => {
    ByteCloudOceania.style.display = 'grid';
    starOceaniaText.textContent = '☆☆★★★';
    latencyOceaniaText.textContent = 255;
    timeOceaniaText.textContent = '25 sec';
    videoOceaniaText.textContent = '1080p Full HD';
};

const Oceania_finally_only_Singapore = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '★★★★★';
    latency_slowlyOceaniaText.textContent = 92;
    time_slowlyOceaniaText.textContent = '9 sec';
    video_slowlyOceaniaText.textContent = '4K/2160p Ultra HD';
};

const Oceania_finally_only_Germany = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '☆☆★★★';
    latency_slowlyOceaniaText.textContent = 255;
    time_slowlyOceaniaText.textContent = '29 sec';
    video_slowlyOceaniaText.textContent = '1080p Full HD';
};

const Oceania_finally_only_West_USA = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '☆☆☆★★';
    latency_slowlyOceaniaText.textContent = 179;
    time_slowlyOceaniaText.textContent = '17 sec';
    video_slowlyOceaniaText.textContent = '720p';
};

const Oceania_finally_only_East_USA = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '☆☆☆☆★';
    latency_slowlyOceaniaText.textContent = 207;
    time_slowlyOceaniaText.textContent = '20 sec';
    video_slowlyOceaniaText.textContent = '480p';
};