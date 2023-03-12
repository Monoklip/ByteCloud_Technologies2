
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

const Oceania_finally_with_Singapore = () => {
    ByteCloudOceania.style.display = 'grid';
    starOceaniaText.textContent = '★★★★★';
    latencyOceaniaText.textContent = 73;
    timeOceaniaText.textContent = '1 sec';
    videoOceaniaText.textContent = '4K/2160p Ultra HD';
};
const Oceania_finally_without_Singapore = () => {
    ByteCloudOceania.style.display = 'grid';
    starOceaniaText.textContent = '★★★★★';
    latencyOceaniaText.textContent = 73;
    timeOceaniaText.textContent = '10 sec';
    videoOceaniaText.textContent = '4K/2160p Ultra HD';
};

const Oceania_finally_only_Singapore = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '☆★★★★';
    latency_slowlyOceaniaText.textContent = 149;
    time_slowlyOceaniaText.textContent = '61 sec';
    video_slowlyOceaniaText.textContent = '4K/2160p Ultra HD';
};

const Oceania_finally_only_Germany = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '☆★★★★';
    latency_slowlyOceaniaText.textContent = 149;
    time_slowlyOceaniaText.textContent = '610 sec';
    video_slowlyOceaniaText.textContent = '4K/2160p Ultra HD';
};

const Oceania_finally_only_West_USA = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '☆★★★★';
    latency_slowlyOceaniaText.textContent = 149;
    time_slowlyOceaniaText.textContent = '61000 sec';
    video_slowlyOceaniaText.textContent = '4K/2160p Ultra HD';
};

const Oceania_finally_only_East_USA = () => {
    ObjectStorageOceania.style.display = 'grid';
    star_slowlyOceaniaText.textContent = '☆★★★★';
    latency_slowlyOceaniaText.textContent = 149;
    time_slowlyOceaniaText.textContent = '6100 sec';
    video_slowlyOceaniaText.textContent = '4K/2160p Ultra HD';
};