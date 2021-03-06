/* eslint-disable no-multi-str */
const shadow = '0 16px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)'
const sbg = '2px'
const bbg = '4px'

const messages = {
  aboutMessage: '<h3>I repaired complex medical equipment. I had to use Raspberry \
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
          multiply my engineering skills in dev. See you…</h3>',
  educationMessage: "<h2>Beetroot Academy</h2>\
          08.02.2021 — 12.02.2021   A+<br><br>\
          <h2>University of the state fiscal service Ukraine</h2>\
          2010 – 2013<br>\
          Bachelor's degree, Finance and Credit,   B<br><br>\
          <h2>State University of Telecommunications</h2>\
          2004 — 2008<br>\
          Master's degree, Protection of information in information systems and networks.   A+<br>",

  experienceMessage: '<h2>StarLightMedia - Junior Python developer</h2>\
          01.03.2021 — to date<br>\
          Create python database multiservices/application<br><br>\
          <h2>StarLightMedia  -  CSO(security systems engineer)</h2>\
          2017 — to date<br>\
          Security cluster administration and support. Implementation of safety systems.\
          Document flow<br><br>\
          <h2>Intteks – CTO (Chief Engineer)</h2>\
          2007 — 2017<br>\
          Full cycle of implementation of technical security systems.\
          Service Center Management. Development of security systems<br><br>',
  skillsMessage: '<h2>Lang/Libraries/Modules/Frameworks:</h2>\
          Python, Django, REST, FastApi, Asincio, Celery Threading, Multiprocessing, Beautiful Soup, JS(basic),\
          REACT(basic), CSS(flaxbox, grid), Bootstrap5, MySql, SQLite, Postgress, mongoDB(cloud), Redis,\
          OS, SYS, Argparse, Tkinter, PyQt, Socket, Decimal, Random, Struct, Array,\
          Doctest, Pytest, Unittest,  PyUSB, HIDUSB,\
          Embedd Python Ex, Keyboard, mako, Jinja2, Logging, Numpy, Matplotlib,\
          <br><br>\
          <h2>Additional:</h2>\
          Win, Linux(Ubuntu), heroku,  AWS, GIT, Github, Docker, Postman, PyCharm, Visual Studio Code, Slack,\
          Technical background. ',
  contactsMessage: ' <h2>PHONE:</h2><br>\
            <h3>+38-067-381-80-46  (Telegram, Viber)</h3><br>\
            <h2>E-MAIL:</h2><br>\
            <h3>kaplunalex1985@gmail.com</h3><br>\
            <h2>KYIV REGION</h2>',
  backgroundMessage: '<h2>Electrical and Electronics Engineer:</h2><br>\
          Analog electronics, digital electronics, consumer electronics, embedded systems\
          solid-state physics, radio engineering, telecommunications, control systems,\
          signal processing, systems engineering, computer engineering, instrumentation\
          engineering, electric power control, robotics.<br><br>\
          <h2>DIY Engineer:</h2><br>\
          Personal electric transport, audio amplifiers, Raspberry pi embedded programming,\
          cnc machining assembly processing, welding(TIG, MIG, MMA), Solidworks design,\
          EasyEDA design and manufacturing, assembly of metal structures and mechanisms.',
  languagesMessage: '<h2> Python, JS, ENG(intermediate), UA and others...</h2>',
  certificationsMessage: "<img src='img/SERT.jpg' class='img-fluid mx-auto d-block'></img>",
}

const buttonIds = [
  'about',
  'education',
  'experience',
  'skills',
  'contacts',
  'background',
  'languages',
  'certifications',
]

const headSection = document.getElementById('header')
const footerSection = document.getElementById('footer')
const mainInfo = document.getElementById('main_info')
const themeBut = document.getElementById('suntheme')

let colorScheme = false
const sunleBut = document.getElementById('sun')

sunleBut.onclick = () => {
  themeBut.className = colorScheme ? 'icon-sun' : 'icon-moon'
  headSection.style.backgroundColor = colorScheme ? 'black' : 'green'
  footerSection.style.backgroundColor = colorScheme ? 'black' : 'green'

  colorScheme = !colorScheme
}

const borderWidth = pointId => {
  buttonIds.forEach(id => {
    const button = document.getElementById(`${id}_but`)

    if (button) {
      button.style.borderWidth = (id === pointId) ? bbg : sbg
    }
  })
}

const initButtons = ids => {
  ids.forEach(id => {
    const button = document.getElementById(`${id}_but`)

    if (button) {
      button.onmouseover = () => { button.style.boxShadow = shadow }
      button.onmouseleave = () => { button.style.boxShadow = 'none' }

      button.onclick = () => {
        mainInfo.innerHTML = messages[`${id}Message`]
        borderWidth(id)
      }
    }
  })
}

initButtons(buttonIds)
