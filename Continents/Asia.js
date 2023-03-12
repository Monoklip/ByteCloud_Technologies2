
const monitor_asia_phone = document.querySelector('.monitor_asia_phone');
const monitor_asia_tablet = document.querySelector('.monitor_asia_tablet');
const monitor_asia_laptop = document.querySelector('.monitor_asia_laptop');

const ByteCloudAsia = document.getElementById('ByteCloud_Asia');
const starAsiaText = document.getElementById('star_Asia');
const latencyAsiaText = document.getElementById('latency_Asia');
const timeAsiaText = document.getElementById('time_Asia');
const videoAsiaText = document.getElementById('video_Asia');

const ObjectStorageAsia = document.getElementById('ObjectStorage_Asia');
const star_slowlyAsiaText = document.getElementById('star_slowly_Asia');
const latency_slowlyAsiaText = document.getElementById('latency_slowly_Asia');
const time_slowlyAsiaText = document.getElementById('time_slowly_Asia');
const video_slowlyAsiaText = document.getElementById('video_slowly_Asia');

const AsiaAudit_with_Singapore = () =>{
    if( laptop_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';
        singapore_asia_tablet.style.display = 'block';
        singapore_asia_laptop.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
        monitor_asia_laptop.style.width = '36px';
    }
    else if( tablet_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';
        singapore_asia_tablet.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
    }
    else if( phone_Asia.style.display === 'block' ){
        singapore_asia_phone.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
    };

    monitor_asia_phone.style.transition = '700ms linear';
    monitor_asia_tablet.style.transition = '700ms linear';
    monitor_asia_laptop.style.transition = '700ms linear';
};

const AsiaAudit_without_Singapore = () =>{
    if( laptop_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';
        germany_asia_laptop.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
        monitor_asia_laptop.style.width = '36px';
    }
    else if( tablet_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';
        germany_asia_tablet.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
        monitor_asia_tablet.style.width = '30px';
    }
    else if( phone_Asia.style.display === 'block' ){
        germany_asia_phone.style.display = 'block';

        monitor_asia_phone.style.width = '28px';
    };

    monitor_asia_phone.style.transition = '2960ms linear';
    monitor_asia_tablet.style.transition = '2960ms linear';
    monitor_asia_laptop.style.transition = '2960ms linear';
};

const Asia_finally_with_Singapore = () => {
    ByteCloudAsia.style.display = 'grid';
    starAsiaText.textContent = '★★★★★';
    latencyAsiaText.textContent = 73;
    timeAsiaText.textContent = '1 sec';
    videoAsiaText.textContent = '4K/2160p Ultra HD';
};
const Asia_finally_without_Singapore = () => {
    ByteCloudAsia.style.display = 'grid';
    starAsiaText.textContent = '★★★★★';
    latencyAsiaText.textContent = 73;
    timeAsiaText.textContent = '10 sec';
    videoAsiaText.textContent = '4K/2160p Ultra HD';
};

const Asia_finally_only_Singapore = () => {
    ObjectStorageAsia.style.display = 'grid';
    star_slowlyAsiaText.textContent = '☆★★★★';
    latency_slowlyAsiaText.textContent = 149;
    time_slowlyAsiaText.textContent = '61 sec';
    video_slowlyAsiaText.textContent = '4K/2160p Ultra HD';
};

const Asia_finally_only_Germany = () => {
    ObjectStorageAsia.style.display = 'grid';
    star_slowlyAsiaText.textContent = '☆★★★★';
    latency_slowlyAsiaText.textContent = 149;
    time_slowlyAsiaText.textContent = '610 sec';
    video_slowlyAsiaText.textContent = '4K/2160p Ultra HD';
};

const Asia_finally_only_West_USA = () => {
    ObjectStorageAsia.style.display = 'grid';
    star_slowlyAsiaText.textContent = '☆★★★★';
    latency_slowlyAsiaText.textContent = 149;
    time_slowlyAsiaText.textContent = '61000 sec';
    video_slowlyAsiaText.textContent = '4K/2160p Ultra HD';
};

const Asia_finally_only_East_USA = () => {
    ObjectStorageAsia.style.display = 'grid';
    star_slowlyAsiaText.textContent = '☆★★★★';
    latency_slowlyAsiaText.textContent = 149;
    time_slowlyAsiaText.textContent = '6100 sec';
    video_slowlyAsiaText.textContent = '4K/2160p Ultra HD';
};