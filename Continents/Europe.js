const monitor_europe_phone = document.querySelector('.monitor_europe_phone');
const monitor_europe_tablet = document.querySelector('.monitor_europe_tablet');
const monitor_europe_laptop = document.querySelector('.monitor_europe_laptop');

const ByteCloudEurope = document.getElementById('ByteCloud_Europe');
const starEuropeText = document.getElementById('star_Europe');
const latencyEuropeText = document.getElementById('latency_Europe');
const timeEuropeText = document.getElementById('time_Europe');
const videoEuropeText = document.getElementById('video_Europe');

const ObjectStorageEurope = document.getElementById('ObjectStorage_Europe');
const star_slowlyEuropeText = document.getElementById('star_slowly_Europe');
const latency_slowlyEuropeText = document.getElementById('latency_slowly_Europe');
const time_slowlyEuropeText = document.getElementById('time_slowly_Europe');
const video_slowlyEuropeText = document.getElementById('video_slowly_Europe');

const text_Europe = document.querySelector('.text_Europe');

const EuropeAudit_with_Gremany = () =>{
    if( laptop_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';
        germany_europe_laptop.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';
        monitor_europe_laptop.style.width = '36px';

        text_Europe.style.display = 'block';
    }
    else if( tablet_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';
        germany_europe_tablet.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';

        text_Europe.style.display = 'block';
    }
    else if( phone_Europe.style.display === 'block' ){
        germany_europe_phone.style.display = 'block';

        monitor_europe_phone.style.width = '28px';

        text_Europe.style.display = 'block';
    };

    monitor_europe_phone.style.transition = '310ms linear';
    monitor_europe_tablet.style.transition = '310ms linear';
    monitor_europe_laptop.style.transition = '310ms linear';

    text_Europe.textContent = `latency: 31`;

    setTimeout(()=>{
        text_Europe.textContent = 'time: 3 sec';
    },310);
};

const EuropeAudit_without_Gremany = () =>{
    if( laptop_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
        east_usa_europe_tablet.style.display = 'block';
        east_usa_europe_laptop.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';
        monitor_europe_laptop.style.width = '36px';

        text_Europe.style.display = 'block';
    }
    else if( tablet_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';
        east_usa_europe_tablet.style.display = 'block';

        monitor_europe_phone.style.width = '28px';
        monitor_europe_tablet.style.width = '30px';

        text_Europe.style.display = 'block';
    }
    else if( phone_Europe.style.display === 'block' ){
        east_usa_europe_phone.style.display = 'block';

        monitor_europe_phone.style.width = '28px';

        text_Europe.style.display = 'block';
    };

    monitor_europe_phone.style.transition = '820ms linear';
    monitor_europe_tablet.style.transition = '820ms linear';
    monitor_europe_laptop.style.transition = '820ms linear';

    text_Europe.textContent = `latency: 82`;

    setTimeout(()=>{
        text_Europe.textContent = 'time: 8 sec';
    },820);
};

const Europe_finally_with_Germany = () => {
    ByteCloudEurope.style.display = 'grid';
    starEuropeText.textContent = '★★★★★';
    latencyEuropeText.textContent = 31;
    timeEuropeText.textContent = '3 sec';
    videoEuropeText.textContent = '4K/2160p Ultra HD';
};

const Europe_finally_without_Germany = () => {
    ByteCloudEurope.style.display = 'grid';
    starEuropeText.textContent = '★★★★★';
    latencyEuropeText.textContent = 82;
    timeEuropeText.textContent = '8 sec';
    videoEuropeText.textContent = '4K/2160p Ultra HD';
};

const Europe_finally_only_Singapore = () => {
    ObjectStorageEurope.style.display = 'grid';
    star_slowlyEuropeText.textContent = '☆☆☆☆★';
    latency_slowlyEuropeText.textContent = 250;
    time_slowlyEuropeText.textContent = '25 sec';
    video_slowlyEuropeText.textContent = '480p';
};

const Europe_finally_only_Germany = () => {
    ObjectStorageEurope.style.display = 'grid';
    star_slowlyEuropeText.textContent = '★★★★★';
    latency_slowlyEuropeText.textContent = 31;
    time_slowlyEuropeText.textContent = '3 sec';
    video_slowlyEuropeText.textContent = '4K/2160p Ultra HD';
};

const Europe_finally_only_West_USA = () => {
    ObjectStorageEurope.style.display = 'grid';
    star_slowlyEuropeText.textContent = '☆☆★★★';
    latency_slowlyEuropeText.textContent = 141;
    time_slowlyEuropeText.textContent = '14 sec';
    video_slowlyEuropeText.textContent = '1080p Full HD';
};

const Europe_finally_only_East_USA = () => {
    ObjectStorageEurope.style.display = 'grid';
    star_slowlyEuropeText.textContent = '☆★★★★';
    latency_slowlyEuropeText.textContent = 82;
    time_slowlyEuropeText.textContent = '8 sec';
    video_slowlyEuropeText.textContent = '4K/2160p Ultra HD';
};