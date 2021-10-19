const shadow = "0 16px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)"
const sbg="2px"
const bbg="4px"

const aboutmes = "<h3>I repaired complex medical equipment. I had to use Raspberry \
                on one of the devices. Read Learning Python, Programming Python\
                5th Edition by Mark Lutz, 4 volumes. Wrote software for the device.\
                Soon there was a need to optimize the work of the security system \
                database and provide data to local users, look to Github. Python \
                began to tighten me! Finished the course Beetroot Academy,\
                in parallel, I have developed a robot device in the field of\
                biochemistry (full development cycle), this robot was a \
                graduation project, look to Youtube. In fact BA gave me Python engineer dev\
                skills. Thereafter Django 3.0 book, Dronov. After that Frontend JS, \
                DevOps AWS, S3 deploy, Herocu-django deploy projects to expand skills.\
                You are looking at the result now. Also several projects on request. Now my direction\
                is full stack samurai path, device control over sockets, web, eth. In search of interesting\
                technology projects. From myself I can give a lot to the team and\
                multiply my engineering skills in dev. See you…</h3>"
const edumes =   "<h2>Beetroot Academy</h2>\
                08.02.2021 — 12.02.2021   A+<br><br>\
                <h2>University of the state fiscal service Ukraine</h2>\
                2010 – 2013<br>\
                Bachelor's degree, Finance and Credit,   B<br><br>\
                <h2>State University of Telecommunications</h2>\
                2004 — 2008<br>\
                Master's degree, Protection of information in information systems and networks.   A+<br>"
const expmes =    "<h2>StarLightMedia - Junior Python developer</h2>\
                01.03.2021 — to date<br>\
                Create python database multiservices/application<br><br>\
                <h2>StarLightMedia  -  CSO(security systems engineer)</h2>\
                2017 — to date<br>\
                Security cluster administration and support. Implementation of safety systems.\
                Document flow<br><br>\
                <h2>Intteks – CTO (Chief Engineer)</h2>\
                2007 — 2017<br>\
                Full cycle of implementation of technical security systems.\
                Service Center Management. Development of security systems<br><br>"
const skilmes =   "<h2>Lang/Libraries/Modules/Frameworks:</h2>\
                Python, JS, CSS(flaxbox, grid), Bootstrap5, HTML, Django, MySql, SQLite, mongoDB(cloud), Redis, OS, SYS, Argparse, Tkinter, PyQt, Socket, Decimal, Random, Struct, Array,\
                Doctest, Pytest, Unittest,  PyUSB, HIDUSB, Threading,\
                Multiprocessing, Embedd Python Ex, Keyboard, mako, Jinja2, Logging, Numpy, Matplotlib,\
                Beautiful Soup, Unittest.<br><br>\
                <h2>Additional:</h2>\
                Win, Linux(Ubuntu), heroku,  AWS, GIT, Github, Tortoise SVN, PyCharm, Visual Studio Code, Slack, Codespaces beta, \
                Technical background. "
const contmes = " <h2>PHONE:</h2><br>\
                <h3>+38-067-381-80-46  (Telegram, Viber)</h3><br>\
                <h2>E-MAIL:</h2><br>\
                <h3>Kaplunalex1985@gmail.com</h3><br>\
                <h2>KYIV REGION</h2>"
const backmes = "<h2>Electrical and Electronics Engineer:</h2><br>\
                Analog electronics, digital electronics, consumer electronics, embedded systems\
                solid-state physics, radio engineering, telecommunications, control systems,\
                signal processing, systems engineering, computer engineering, instrumentation\
                engineering, electric power control, robotics.<br><br>\
                <h2>DIY Engineer:</h2><br>\
                Personal electric transport, audio amplifiers, Raspberry pi embedded programming,\
                cnc machining assembly processing, welding(TIG, MIG, MMA), Solidworks design,\
                EasyEDA design and manufacturing, assembly of metal structures and mechanisms."
const lnmes = "<h2> Python, JS, ENG(intermediate), UA and others...</h2>"
const sertmes = "<img src='img/SERT.jpg' class='img-fluid mx-auto d-block'></img>"

function borderW (point){
    [abbut, edbut, exbut, skbut, csbut, bkbut, lnbut, cnbut].map(a => {
    a.style.borderWidth = sbg
})
point.style.borderWidth=bbg
}

const headsection = document.getElementById('header')
const footersection = document.getElementById('footer')
const maininfo = document.getElementById('main_info')
const themebut = document.getElementById('suntheme')

let sunlebut = document.getElementById('sun')
    sunlebut.onclick=function(){
        if (headsection.style.backgroundColor=="black") {
            themebut.className="icon-moon"
            headsection.style.backgroundColor="green"
            footersection.style.backgroundColor="green"
        } 
        else {
            headsection.style.backgroundColor="black"
            footersection.style.backgroundColor="black"
            themebut.className="icon-sun"
        }
    }

const abbut = document.getElementById('ab_but')
    abbut.onmouseover=function(){abbut.style.boxShadow=shadow}
    abbut.onmouseleave=function(){abbut.style.boxShadow="none"}
    abbut.onclick=function() {
        maininfo.innerHTML=aboutmes
        borderW(abbut)
    }

const edbut = document.getElementById('ed_but')
    edbut.onmouseover=function(){edbut.style.boxShadow=shadow}
    edbut.onmouseleave=function(){edbut.style.boxShadow="none"}
    edbut.onclick=function() {
        maininfo.innerHTML=edumes
        borderW(edbut)
    }

const exbut = document.getElementById('ex_but')
    exbut.onmouseover=function(){exbut.style.boxShadow=shadow}
    exbut.onmouseleave=function(){exbut.style.boxShadow="none"}
    exbut.onclick=function() {
        maininfo.innerHTML=expmes
        borderW(exbut)
    }

const skbut = document.getElementById('sk_but')
    skbut.onmouseover=function(){skbut.style.boxShadow=shadow}
    skbut.onmouseleave=function(){skbut.style.boxShadow="none"}
    skbut.onclick=function() {
        maininfo.innerHTML=skilmes
        borderW(skbut)
    }

const csbut = document.getElementById('cs_but')
    csbut.onmouseover=function(){csbut.style.boxShadow=shadow}
    csbut.onmouseleave=function(){csbut.style.boxShadow="none"}
    csbut.onclick=function() {
        maininfo.innerHTML=sertmes
        borderW(csbut)
    }

const bkbut = document.getElementById('bk_but')
    bkbut.onmouseover=function(){bkbut.style.boxShadow=shadow}
    bkbut.onmouseleave=function(){bkbut.style.boxShadow="none"}
    bkbut.onclick=function() {
        maininfo.innerHTML=backmes
        borderW(bkbut)
    }

const lnbut = document.getElementById('ln_but')
    lnbut.onmouseover=function(){lnbut.style.boxShadow=shadow}
    lnbut.onmouseleave=function(){lnbut.style.boxShadow="none"}
    lnbut.onclick=function() {
        maininfo.innerHTML=lnmes
        borderW(lnbut)
    }

const cnbut = document.getElementById('cn_but')
    cnbut.onmouseover=function(){cnbut.style.boxShadow=shadow}
    cnbut.onmouseleave=function(){cnbut.style.boxShadow="none"}
    cnbut.onclick=function() {
        maininfo.innerHTML=contmes
        borderW(cnbut)
    }