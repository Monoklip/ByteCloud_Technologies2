
//=================== North USA Peoples ===================

const man_empty_min_north_USA = document.querySelector('.man_empty_min-north_USA');
const man_empty_mid_north_USA = document.querySelector('.man_empty_mid-north_USA');
const man_empty_max_north_USA = document.querySelector('.man_empty_max-north_USA');
const worldNorth_USAPeoples = document.querySelector('.world-north_USA-peoples');

const phone_north_USA = document.querySelector('.phone-north_USA');
const tablet_north_USA = document.querySelector('.tablet-north_USA');
const laptop_north_USA = document.querySelector('.laptop-north_USA');
const worldNorth_USADevices = document.querySelector('.world-north_USA-devices');

// people north_USA

man_empty_min_north_USA.addEventListener('mousemove', () => {
    man_empty_min_north_USA.src = './image/man_filled.png';
});

man_empty_mid_north_USA.addEventListener('mousemove', () => {
    man_empty_min_north_USA.src = './image/man_filled.png';
    man_empty_mid_north_USA.src = './image/man_filled.png';
});

man_empty_max_north_USA.addEventListener('mousemove', () => {
    man_empty_min_north_USA.src = './image/man_filled.png';
    man_empty_mid_north_USA.src = './image/man_filled.png';
    man_empty_max_north_USA.src = './image/man_filled.png';
});

// =====

man_empty_min_north_USA.addEventListener('mouseleave', () => {
    man_empty_min_north_USA.src = './image/man_empty.png';
});

man_empty_mid_north_USA.addEventListener('mouseleave', () => {
    man_empty_min_north_USA.src = './image/man_empty.png';
    man_empty_mid_north_USA.src = './image/man_empty.png';
});

man_empty_max_north_USA.addEventListener('mouseleave', () => {
    man_empty_min_north_USA.src = './image/man_empty.png';
    man_empty_mid_north_USA.src = './image/man_empty.png';
    man_empty_max_north_USA.src = './image/man_empty.png';
});

// =====

man_empty_min_north_USA.addEventListener('click', () => {
    worldNorth_USAPeoples.style.display = 'none';
    worldNorth_USADevices.style.display = 'block';
    phone_north_USA.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_mid_north_USA.addEventListener('click', () => {
    worldNorth_USAPeoples.style.display = 'none';
    worldNorth_USADevices.style.display = 'block';
    phone_north_USA.style.display = 'block';
    tablet_north_USA.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_max_north_USA.addEventListener('click', () => {
    worldNorth_USAPeoples.style.display = 'none';
    worldNorth_USADevices.style.display = 'block';
    phone_north_USA.style.display = 'block';
    tablet_north_USA.style.display = 'block';
    laptop_north_USA.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

//=================== South USA Peoples ===================

const man_empty_min_south_USA = document.querySelector('.man_empty_min-south_USA');
const man_empty_mid_south_USA = document.querySelector('.man_empty_mid-south_USA');
const man_empty_max_south_USA = document.querySelector('.man_empty_max-south_USA');
const worldSouth_USAPeoples = document.querySelector('.world-south_USA-peoples');

const phone_south_USA = document.querySelector('.phone-south_USA');
const tablet_south_USA = document.querySelector('.tablet-south_USA');
const laptop_south_USA = document.querySelector('.laptop-south_USA');
const worldSouth_USADevices = document.querySelector('.world-south_USA-devices');

// people south_USA

man_empty_min_south_USA.addEventListener('mousemove', () => {
    man_empty_min_south_USA.src = './image/man_filled.png';
});

man_empty_mid_south_USA.addEventListener('mousemove', () => {
    man_empty_min_south_USA.src = './image/man_filled.png';
    man_empty_mid_south_USA.src = './image/man_filled.png';
});

man_empty_max_south_USA.addEventListener('mousemove', () => {
    man_empty_min_south_USA.src = './image/man_filled.png';
    man_empty_mid_south_USA.src = './image/man_filled.png';
    man_empty_max_south_USA.src = './image/man_filled.png';
});

// =====

man_empty_min_south_USA.addEventListener('mouseleave', () => {
    man_empty_min_south_USA.src = './image/man_empty.png';
});

man_empty_mid_south_USA.addEventListener('mouseleave', () => {
    man_empty_min_south_USA.src = './image/man_empty.png';
    man_empty_mid_south_USA.src = './image/man_empty.png';
});

man_empty_max_south_USA.addEventListener('mouseleave', () => {
    man_empty_min_south_USA.src = './image/man_empty.png';
    man_empty_mid_south_USA.src = './image/man_empty.png';
    man_empty_max_south_USA.src = './image/man_empty.png';
});

// =====

man_empty_min_south_USA.addEventListener('click', () => {
    worldSouth_USAPeoples.style.display = 'none';
    worldSouth_USADevices.style.display = 'block';
    phone_south_USA.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_mid_south_USA.addEventListener('click', () => {
    worldSouth_USAPeoples.style.display = 'none';
    worldSouth_USADevices.style.display = 'block';
    phone_south_USA.style.display = 'block';
    tablet_south_USA.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_max_south_USA.addEventListener('click', () => {
    worldSouth_USAPeoples.style.display = 'none';
    worldSouth_USADevices.style.display = 'block';
    phone_south_USA.style.display = 'block';
    tablet_south_USA.style.display = 'block';
    laptop_south_USA.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

//=================== Europe Peoples ===================

const man_empty_min_Europe = document.querySelector('.man_empty_min-Europe');
const man_empty_mid_Europe = document.querySelector('.man_empty_mid-Europe');
const man_empty_max_Europe = document.querySelector('.man_empty_max-Europe');
const worldEuropePeoples = document.querySelector('.world-Europe-peoples');

const phone_Europe = document.querySelector('.phone-Europe');
const tablet_Europe = document.querySelector('.tablet-Europe');
const laptop_Europe = document.querySelector('.laptop-Europe');
const worldEuropeDevices = document.querySelector('.world-Europe-devices');

// people Europe

man_empty_min_Europe.addEventListener('mousemove', () => {
    man_empty_min_Europe.src = './image/man_filled.png';
});

man_empty_mid_Europe.addEventListener('mousemove', () => {
    man_empty_min_Europe.src = './image/man_filled.png';
    man_empty_mid_Europe.src = './image/man_filled.png';
});

man_empty_max_Europe.addEventListener('mousemove', () => {
    man_empty_min_Europe.src = './image/man_filled.png';
    man_empty_mid_Europe.src = './image/man_filled.png';
    man_empty_max_Europe.src = './image/man_filled.png';
});

// =====

man_empty_min_Europe.addEventListener('mouseleave', () => {
    man_empty_min_Europe.src = './image/man_empty.png';
});

man_empty_mid_Europe.addEventListener('mouseleave', () => {
    man_empty_min_Europe.src = './image/man_empty.png';
    man_empty_mid_Europe.src = './image/man_empty.png';
});

man_empty_max_Europe.addEventListener('mouseleave', () => {
    man_empty_min_Europe.src = './image/man_empty.png';
    man_empty_mid_Europe.src = './image/man_empty.png';
    man_empty_max_Europe.src = './image/man_empty.png';
});

// =====

man_empty_min_Europe.addEventListener('click', () => {
    worldEuropePeoples.style.display = 'none';
    worldEuropeDevices.style.display = 'block';
    phone_Europe.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_mid_Europe.addEventListener('click', () => {
    worldEuropePeoples.style.display = 'none';
    worldEuropeDevices.style.display = 'block';
    phone_Europe.style.display = 'block';
    tablet_Europe.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_max_Europe.addEventListener('click', () => {
    worldEuropePeoples.style.display = 'none';
    worldEuropeDevices.style.display = 'block';
    phone_Europe.style.display = 'block';
    tablet_Europe.style.display = 'block';
    laptop_Europe.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

//=================== Asia Peoples ===================

const man_empty_min_Asia = document.querySelector('.man_empty_min-Asia');
const man_empty_mid_Asia = document.querySelector('.man_empty_mid-Asia');
const man_empty_max_Asia = document.querySelector('.man_empty_max-Asia');
const worldAsiaPeoples = document.querySelector('.world-Asia-peoples');

const phone_Asia = document.querySelector('.phone-Asia');
const tablet_Asia = document.querySelector('.tablet-Asia');
const laptop_Asia = document.querySelector('.laptop-Asia');
const worldAsiaDevices = document.querySelector('.world-Asia-devices');

// people Asia

man_empty_min_Asia.addEventListener('mousemove', () => {
    man_empty_min_Asia.src = './image/man_filled.png';
});

man_empty_mid_Asia.addEventListener('mousemove', () => {
    man_empty_min_Asia.src = './image/man_filled.png';
    man_empty_mid_Asia.src = './image/man_filled.png';
});

man_empty_max_Asia.addEventListener('mousemove', () => {
    man_empty_min_Asia.src = './image/man_filled.png';
    man_empty_mid_Asia.src = './image/man_filled.png';
    man_empty_max_Asia.src = './image/man_filled.png';
});

// =====

man_empty_min_Asia.addEventListener('mouseleave', () => {
    man_empty_min_Asia.src = './image/man_empty.png';
});

man_empty_mid_Asia.addEventListener('mouseleave', () => {
    man_empty_min_Asia.src = './image/man_empty.png';
    man_empty_mid_Asia.src = './image/man_empty.png';
});

man_empty_max_Asia.addEventListener('mouseleave', () => {
    man_empty_min_Asia.src = './image/man_empty.png';
    man_empty_mid_Asia.src = './image/man_empty.png';
    man_empty_max_Asia.src = './image/man_empty.png';
});

// =====

man_empty_min_Asia.addEventListener('click', () => {
    worldAsiaPeoples.style.display = 'none';
    worldAsiaDevices.style.display = 'block';
    phone_Asia.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_mid_Asia.addEventListener('click', () => {
    worldAsiaPeoples.style.display = 'none';
    worldAsiaDevices.style.display = 'block';
    phone_Asia.style.display = 'block';
    tablet_Asia.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_max_Asia.addEventListener('click', () => {
    worldAsiaPeoples.style.display = 'none';
    worldAsiaDevices.style.display = 'block';
    phone_Asia.style.display = 'block';
    tablet_Asia.style.display = 'block';
    laptop_Asia.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();

});

// //=================== Australia Peoples ===================

const man_empty_min_Australia = document.querySelector('.man_empty_min-Australia');
const man_empty_mid_Australia = document.querySelector('.man_empty_mid-Australia');
const man_empty_max_Australia = document.querySelector('.man_empty_max-Australia');
const worldAustraliaPeoples = document.querySelector('.world-Australia-peoples');

const phone_Australia = document.querySelector('.phone-Australia');
const tablet_Australia = document.querySelector('.tablet-Australia');
const laptop_Australia = document.querySelector('.laptop-Australia');
const worldAustraliaDevices = document.querySelector('.world-Australia-devices');

// people Australia

man_empty_min_Australia.addEventListener('mousemove', () => {
    man_empty_min_Australia.src = './image/man_filled.png';
});

man_empty_mid_Australia.addEventListener('mousemove', () => {
    man_empty_min_Australia.src = './image/man_filled.png';
    man_empty_mid_Australia.src = './image/man_filled.png';
});

man_empty_max_Australia.addEventListener('mousemove', () => {
    man_empty_min_Australia.src = './image/man_filled.png';
    man_empty_mid_Australia.src = './image/man_filled.png';
    man_empty_max_Australia.src = './image/man_filled.png';
});

// =====

man_empty_min_Australia.addEventListener('mouseleave', () => {
    man_empty_min_Australia.src = './image/man_empty.png';
});

man_empty_mid_Australia.addEventListener('mouseleave', () => {
    man_empty_min_Australia.src = './image/man_empty.png';
    man_empty_mid_Australia.src = './image/man_empty.png';
});

man_empty_max_Australia.addEventListener('mouseleave', () => {
    man_empty_min_Australia.src = './image/man_empty.png';
    man_empty_mid_Australia.src = './image/man_empty.png';
    man_empty_max_Australia.src = './image/man_empty.png';
});

// =====

man_empty_min_Australia.addEventListener('click', () => {
    worldAustraliaPeoples.style.display = 'none';
    worldAustraliaDevices.style.display = 'block';
    phone_Australia.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_mid_Australia.addEventListener('click', () => {
    worldAustraliaPeoples.style.display = 'none';
    worldAustraliaDevices.style.display = 'block';
    phone_Australia.style.display = 'block';
    tablet_Australia.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

man_empty_max_Australia.addEventListener('click', () => {
    worldAustraliaPeoples.style.display = 'none';
    worldAustraliaDevices.style.display = 'block';
    phone_Australia.style.display = 'block';
    tablet_Australia.style.display = 'block';
    laptop_Australia.style.display = 'block';
    btnNext.style.display = 'block';
    auditClickAllBall();
});

// //=================== Ball ===================

const ball_WestUSA = document.querySelector('.ball-WestUSA');
const ball_EastUSA = document.querySelector('.ball-EastUSA');
const ball_Germany = document.querySelector('.ball-Germany');
const ball_Singapore = document.querySelector('.ball-Singapore');

// == WestUSA

const ballWestUSAMouseMove = () => {
    ball_WestUSA.src = './image/circle_filled.png';
};

const ballWestUSAMouseLeave = () => {
    ball_WestUSA.src = './image/circle_empty.png';
};

ball_WestUSA.addEventListener('mousemove', ballWestUSAMouseMove);
ball_WestUSA.addEventListener('mouseleave', ballWestUSAMouseLeave);

// === EastUSA

const ballEastUSAMouseMove = () => {
    ball_EastUSA.src = './image/circle_filled.png';
};

const ballEastUSAMouseLeave = () => {
    ball_EastUSA.src = './image/circle_empty.png';
};

ball_EastUSA.addEventListener('mousemove', ballEastUSAMouseMove);
ball_EastUSA.addEventListener('mouseleave', ballEastUSAMouseLeave);

// === Germany

const ballGermanyMouseMove = () => {
    ball_Germany.src = './image/circle_filled.png';
};

const ballGermanyMouseLeave = () => {
    ball_Germany.src = './image/circle_empty.png';
};

ball_Germany.addEventListener('mousemove', ballGermanyMouseMove);
ball_Germany.addEventListener('mouseleave', ballGermanyMouseLeave);

// === Singapore

const ballSingaporeMouseMove = () => {
    ball_Singapore.src = './image/circle_filled.png';
};

const ballSingaporeMouseLeave = () => {
    ball_Singapore.src = './image/circle_empty.png';
};

ball_Singapore.addEventListener('mousemove', ballSingaporeMouseMove);
ball_Singapore.addEventListener('mouseleave', ballSingaporeMouseLeave);

// ===================================

let clickNum = 0;

let Germany, Singapore, WestUSA, EastUSA;
let Germany_Main, Singapore_Main, WestUSA_Main, EastUSA_Main;

// ========= Server West USA =========

const west_USA_BallAudit = () => {
    if (clickNum === 0) {
        ball_WestUSA.src = './image/server.png';
        ball_WestUSA.removeEventListener('click', west_USA_BallAudit);
        WestUSA_Main = true;
    }
    else {
        ball_WestUSA.src = './image/server_ByteCloud.png';
    }

    ball_WestUSA.removeEventListener('mousemove', ballWestUSAMouseMove);
    ball_WestUSA.removeEventListener('mouseleave', ballWestUSAMouseLeave);
    clickNum++;
    WestUSA = true;
    btnStart.style.display = 'block';
    allRegionsClick();

    if(clickNum > 2){
        btnStart.disabled = false;
    }
};


ball_WestUSA.addEventListener('click', west_USA_BallAudit);

// ========= Server East USA =========

const east_USA_BallAudit = () => {
    if (clickNum === 0) {
        ball_EastUSA.src = './image/server.png';
        ball_EastUSA.removeEventListener('click', east_USA_BallAudit);
        EastUSA_Main = true;
    }
    else {
        ball_EastUSA.src = './image/server_ByteCloud.png';
    }

    ball_EastUSA.removeEventListener('mousemove', ballEastUSAMouseMove);
    ball_EastUSA.removeEventListener('mouseleave', ballEastUSAMouseLeave);
    clickNum++;
    EastUSA = true;
    btnStart.style.display = 'block';
    allRegionsClick();

    if(clickNum > 2){
        btnStart.disabled = false;
    }
};

ball_EastUSA.addEventListener('click', east_USA_BallAudit);

// ========= Server Germany =========

const germany_BallAudit = () => {
    if (clickNum === 0) {
        ball_Germany.src = './image/server.png';
        ball_Germany.removeEventListener('click', germany_BallAudit);
        Germany_Main = true;
    }
    else {
        ball_Germany.src = './image/server_ByteCloud.png';
    }

    ball_Germany.removeEventListener('mousemove', ballGermanyMouseMove);
    ball_Germany.removeEventListener('mouseleave', ballGermanyMouseLeave);
    clickNum++;
    Germany = true;
    btnStart.style.display = 'block';
    allRegionsClick();

    if(clickNum > 2){
        btnStart.disabled = false;
    }
};

ball_Germany.addEventListener('click', germany_BallAudit);

// ========= Server Singapore =========

const singapore_BallAudit = () => {
    if (clickNum === 0) {
        ball_Singapore.src = './image/server.png';
        ball_Singapore.removeEventListener('click', singapore_BallAudit);
        Singapore_Main = true;
    }
    else {
        ball_Singapore.src = './image/server_ByteCloud.png';
    }

    ball_Singapore.removeEventListener('mousemove', ballSingaporeMouseMove);
    ball_Singapore.removeEventListener('mouseleave', ballSingaporeMouseLeave);
    clickNum++;
    Singapore = true;
    btnStart.style.display = 'block';
    allRegionsClick();

    if(clickNum > 2){
        btnStart.disabled = false;
    }
};

ball_Singapore.addEventListener('click', singapore_BallAudit);

// ======================================

const title = document.querySelector('.title');

const openAllBall = () => {
    ball_WestUSA.style.display = 'block';
    ball_EastUSA.style.display = 'block';
    ball_Germany.style.display = 'block';
    ball_Singapore.style.display = 'block';
};

const auditClickAllBall = () => {
    if (worldNorth_USAPeoples.style.display === 'none' &&
        worldSouth_USAPeoples.style.display === 'none' &&
        worldEuropePeoples.style.display === 'none' &&
        worldAsiaPeoples.style.display === 'none' &&
        worldAustraliaPeoples.style.display === 'none') {
        openAllBall();
        btnNext.style.display = 'none';
        btnStart.style.display = 'block';

        title.textContent = 'Where is you data? Choose one spot Object Storage system';
    }
};

// ================ Road All ==================

const allRegionsClick = () => {
    if (EastUSA && Germany && WestUSA && Singapore) {
        South_USA_Audit_with_West_USA();
        AustraliaAudit_with_Singapore();
        North_America_Audit_with_EastUSA();
        EuropeAudit_with_Gremany();
        AsiaAudit_with_Singapore();

        btnStart.style.display = 'none';

        setTimeout(()=>{
            oneServer();
        },5000);
    }
};

// ============================================

const btnNext = document.querySelector('.btnNext');
const btnStart = document.querySelector('.btnStart');

const btnClickNext = () => {
    if( worldNorth_USADevices.style.display === 'block' ||
        worldSouth_USADevices.style.display === 'block' ||
        worldAsiaDevices.style.display === 'block' ||
        worldAustraliaDevices.style.display === 'block' ||
        worldEuropeDevices.style.display === 'block' ){

        worldAsiaPeoples.style.display = 'none';
        worldEuropePeoples.style.display = 'none';
        worldNorth_USAPeoples.style.display = 'none';
        worldSouth_USAPeoples.style.display = 'none';
        worldAustraliaPeoples.style.display = 'none';

        openAllBall();
        btnNext.style.display = 'none';
    }
};

btnNext.addEventListener('click', btnClickNext);

const btnClickStart = () => {
    if (EastUSA && Germany && Singapore) {
        AustraliaAudit_with_Singapore();
        EuropeAudit_with_Gremany();
        AsiaAudit_with_Singapore();
        North_America_Audit_with_EastUSA();
        South_USA_Audit_without_West_USA();
        ball_WestUSA.style.display = 'none';
    }
    else if (EastUSA && WestUSA && Singapore) {
        AustraliaAudit_with_Singapore();
        EuropeAudit_without_Gremany();
        AsiaAudit_with_Singapore();
        North_America_Audit_with_EastUSA();
        South_USA_Audit_with_West_USA();
        ball_Germany.style.display = 'none';
    }
    else if (Germany && Singapore && WestUSA) {
        AustraliaAudit_with_Singapore();
        EuropeAudit_with_Gremany();
        AsiaAudit_with_Singapore();
        North_America_Audit_without_EastUSA();
        South_USA_Audit_with_West_USA();
        ball_EastUSA.style.display = 'none';
    }
    else if (EastUSA && Germany && WestUSA) {
        AustraliaAudit_without_Singapore();
        EuropeAudit_with_Gremany();
        AsiaAudit_without_Singapore();
        North_America_Audit_with_EastUSA();
        South_USA_Audit_with_West_USA();
        ball_Singapore.style.display = 'none';
    }

    btnStart.style.display = 'none';

    setTimeout(()=>{
        oneServer();
    },5000);

};

btnStart.addEventListener('click', btnClickStart);

const roadAll = document.querySelectorAll('.road');
const monitor = document.querySelectorAll('.monitor');

const oneServer = async() => {
    monitor.forEach(elem => {
        elem.style.width = '0';
        elem.style.transition = '0s';
    });
    roadAll.forEach(elem => {
        elem.style.display = 'none';
    });

    setTimeout(()=>{
        if(Singapore_Main){
            on_server_Singapore();
        }
        else if(WestUSA_Main){
            on_server_West_USA();
        }
        else if(EastUSA_Main){
            on_server_East_USA();
        }
        else if(Germany_Main){
            on_server_Germany();
        }
    },1000);
};