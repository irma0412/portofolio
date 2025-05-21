var audio=document.getElementById("audioPlayer"),loader=document.getElementById("preloader");function settingtoggle(){document.getElementById("setting-container").classList.toggle("settingactivate"),document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"),document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow")}function playpause(){!1==document.getElementById("switchforsound").checked?audio.pause():audio.play()}function visualmode(){document.body.classList.toggle("light-mode"),document.querySelectorAll(".needtobeinvert").forEach(function(e){e.classList.toggle("invertapplied")})}window.addEventListener("load",function(){loader.style.display="none",document.querySelector(".hey").classList.add("popup")});let emptyArea=document.getElementById("emptyarea"),mobileTogglemenu=document.getElementById("mobiletogglemenu");function hamburgerMenu(){document.body.classList.toggle("stopscrolling"),document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"),document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"),document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"),document.getElementById("burger-bar3").classList.toggle("hamburger-animation3")}function hidemenubyli(){document.body.classList.toggle("stopscrolling"),document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"),document.getElementById("burger-bar1").classList.remove("hamburger-animation1"),document.getElementById("burger-bar2").classList.remove("hamburger-animation2"),document.getElementById("burger-bar3").classList.remove("hamburger-animation3")}const sections=document.querySelectorAll("section"),navLi=document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),mobilenavLi=document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");window.addEventListener("scroll",()=>{let e="";sections.forEach(t=>{let o=t.offsetTop;t.clientHeight,pageYOffset>=o-200&&(e=t.getAttribute("id"))}),mobilenavLi.forEach(t=>{t.classList.remove("activeThismobiletab"),t.classList.contains(e)&&t.classList.add("activeThismobiletab")}),navLi.forEach(t=>{t.classList.remove("activeThistab"),t.classList.contains(e)&&t.classList.add("activeThistab")})}),console.log("%c Designed and Developed by Vinod Jangid ","background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");let mybutton=document.getElementById("backtotopbutton");function scrollFunction(){document.body.scrollTop>400||document.documentElement.scrollTop>400?mybutton.style.display="block":mybutton.style.display="none"}function scrolltoTopfunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},document.addEventListener("contextmenu",function(e){"IMG"===e.target.nodeName&&e.preventDefault()},!1);let Pupils=document.getElementsByClassName("footer-pupil"),pupilsArr=Array.from(Pupils),pupilStartPoint=-10,pupilRangeX=20,pupilRangeY=15,mouseXStartPoint=0,mouseXEndPoint=window.innerWidth,currentXPosition=0,fracXValue=0,mouseYEndPoint=window.innerHeight,currentYPosition=0,fracYValue=0,mouseXRange=mouseXEndPoint-mouseXStartPoint;const mouseMove=e=>{fracXValue=(currentXPosition=e.clientX-mouseXStartPoint)/mouseXRange,fracYValue=(currentYPosition=e.clientY)/mouseYEndPoint;let t=pupilStartPoint+fracXValue*pupilRangeX,o=pupilStartPoint+fracYValue*pupilRangeY;pupilsArr.forEach(e=>{e.style.transform=`translate(${t}px, ${o}px)`})},windowResize=e=>{mouseXEndPoint=window.innerWidth,mouseYEndPoint=window.innerHeight,mouseXRange=mouseXEndPoint-mouseXStartPoint};window.addEventListener("mousemove",mouseMove),window.addEventListener("resize",windowResize);

// Object containing all translatable text elements
const translations = {
  // Home section
  "info-para": {
    en: "A meticulous QA Tester with expertise in both manual and automated testing. I enjoy uncovering issues, ensuring quality, and improving user satisfaction. <br /><br /> I value thorough testing processes, clear communication, and seamless collaboration. I'm also eager to learn new tools and approaches to deliver the best results for users.",
    id: "Seorang QA Tester yang teliti dengan keahlian dalam pengujian manual dan otomatis. Saya senang menemukan masalah, memastikan kualitas, dan meningkatkan kepuasan pengguna. <br /><br /> Saya menghargai proses pengujian yang menyeluruh, komunikasi yang jelas, dan kolaborasi yang lancar. Saya juga bersemangat untuk mempelajari alat dan pendekatan baru untuk memberikan hasil terbaik bagi pengguna."
  },
  "letsTalkBtn-text": {
    en: "Let's Talk!",
    id: "Mari Bicara!"
  },
  
  // About section
  "about-info": {
    en: "<p tabindex='0'>Hi! My name is Irma. I'm a fresh graduate in Information Systems who’s  passionate about QA testing and enhancing software quality <br /> I’ve gained experience in blackbox testing, documenting test cases, and recording results for decision support systems. I've also explored tools like JIRA, Postman, and Selenium.  <br />  Currently, I’m focused on building my skills in QA testing while learning  new tools to ensure reliable and high-quality systems. I’m eager to contribute to projects that deliver an exceptional user experience!</p>",
    id: "<p tabindex='0'>Hai! Nama saya Irma. Saya adalah lulusan baru di bidang Sistem Informasi yang bersemangat tentang pengujian QA dan meningkatkan kualitas perangkat lunak<br />Saya telah mendapatkan pengalaman dalam pengujian blackbox, mendokumentasikan kasus uji, dan mencatat hasil untuk sistem pendukung keputusan. Saya juga telah mengeksplorasi alat seperti JIRA, Postman, dan Selenium.<br />Saat ini, saya fokus membangun keterampilan saya dalam pengujian QA sambil mempelajari alat baru untuk memastikan sistem yang andal dan berkualitas tinggi. Saya ingin berkontribusi pada proyek yang memberikan pengalaman pengguna yang luar biasa!</p>"
  },
  
  // Nav and Sections
  "home-tab": {
    en: "&#60;/Home&#62;",
    id: "&#60;/Beranda&#62;"
  },
  "about-tab": {
    en: "&#60;/AboutMe&#62;",
    id: "&#60;/TentangSaya&#62;"
  },
  "skills-tab": {
    en: "&#60;/Skills&#62;",
    id: "&#60;/Keahlian&#62;"
  },
  "projects-tab": {
    en: "&#60;/Projects&#62;",
    id: "&#60;/Proyek&#62;"
  },
  
  // Skills section
  "tech-stack-heading": {
    en: "Tech Stack",
    id: "Keahlian Teknis"
  },
  
  // Project section descriptions
  "project1-description": {
    en: "Project TA SPK: A decision support system for selecting outstanding students using AHP and TOPSIS methods. 😊",
    id: "Proyek TA SPK: Sistem pendukung keputusan untuk memilih siswa berprestasi menggunakan metode AHP dan TOPSIS. 😊"
  },
  "project2-description": {
    en: "Testing with Selenium using Python ensures the functionality of all features in the web-based decision support system (DSS), including login, criteria management, alternative data, and calculation processes.",
    id: "Pengujian dengan Selenium menggunakan Python memastikan fungsionalitas semua fitur dalam sistem pendukung keputusan (SPK) berbasis web, termasuk login, manajemen kriteria, data alternatif, dan proses perhitungan."
  },
  "project3-description": {
    en: "Contains the test cases from the SPK website testing process, including scenarios, test steps, expected results, actual results, and status. Use the 'Live View' button to access the detailed spreadsheet and explore the testing process.",
    id: "Berisi kasus uji dari proses pengujian situs web SPK, termasuk skenario, langkah-langkah pengujian, hasil yang diharapkan, hasil aktual, dan status. Gunakan tombol 'Live View' untuk mengakses spreadsheet terperinci dan mengeksplorasi proses pengujian."
  },
  "project4-description": {
    en: "Published in a Sinta 4 journal, this article highlights the development of a DSS using AHP and TOPSIS methods. It reflects my dedication to analytical problem-solving and technical writing",
    id: "Diterbitkan di jurnal Sinta 4, artikel ini menyoroti pengembangan SPK menggunakan metode AHP dan TOPSIS. Ini mencerminkan dedikasi saya terhadap pemecahan masalah analitis dan penulisan teknis"
  },
  
  // Project buttons
  "live-view": {
    en: "Live view",
    id: "Lihat Langsung"
  },
  
  // Footer
  "quote": {
    en: "\"Learning, Living, and Leveling Up.\"",
    id: "\"Belajar, Hidup, dan Terus Berkembang.\""
  },
  "getintouch": {
    en: "GetinTouch();",
    id: "Hubungi();",
  },
  "resume-btn": {
    en: "Resume",
    id: "CV"
  },
  "back-to-top": {
    en: "&#8592;BACK TO TOP",
    id: "&#8592;KEMBALI KE ATAS"
  },
  "footer-copyright": {
    en: "Design & Built by Vinod Jangid &#169; twentytwentythree",
    id: "Didesain & Dibangun oleh Vinod Jangid &#169; duaributiga"
  },
  
  // Additional elements
  "hey": {
    en: "Hey!",
    id: "Hai!"
  },
  "im": {
    en: "I'm",
    id: "Saya"
  },
  "name": {
    en: "Irma Suryani.",
    id: "Irma Suryani."
  },
  "work": {
    en: "I Quality & Testing",
    id: "Saya Kualitas & Pengujian"
  }
};

// Function to translate all content
function translatePage(toIndonesian) {
  // Store the current language in localStorage
  localStorage.setItem('language', toIndonesian ? 'id' : 'en');
  
  // Update the toggle button appearance
  document.getElementById('switchforlanguage').checked = toIndonesian;
  
  // Get all elements that need translation
  for (const [id, content] of Object.entries(translations)) {
    const element = document.getElementById(id);
    if (element) {
      // For elements with special content
      if (id === "info-para" || id === "about-info") {
        element.innerHTML = toIndonesian ? content.id : content.en;
      } else {
        element.textContent = toIndonesian ? content.id : content.en;
      }
    }
  }
  
  // Handle elements that might appear multiple times (like "Live view" buttons)
  const liveViewButtons = document.querySelectorAll('.cta span');
  liveViewButtons.forEach(button => {
    button.textContent = toIndonesian ? translations["live-view"].id : translations["live-view"].en;
  });
  
  // Handle navigation items in both desktop and mobile
  const navItems = {
    "home": translations["home-tab"],
    "about": translations["about-tab"],
    "skills": translations["skills-tab"],
    "projects": translations["projects-tab"]
  };
  
  // Update desktop navbar
  for (const [className, content] of Object.entries(navItems)) {
    const desktopElements = document.querySelectorAll(`.${className} a`);
    desktopElements.forEach(el => {
      el.innerHTML = toIndonesian ? content.id : content.en;
    });
  }
  
  // Update section headings
  document.querySelectorAll('.section-heading-article').forEach(heading => {
    const sectionId = heading.closest('section').id;
    if (sectionId && navItems[sectionId]) {
      heading.innerHTML = toIndonesian ? navItems[sectionId].id : navItems[sectionId].en;
    }
  });
  
  // Update project descriptions
  document.querySelectorAll('.ProjectDescription').forEach((element, index) => {
    const key = `project${index+1}-description`;
    if (translations[key]) {
      element.innerHTML = toIndonesian ? translations[key].id : translations[key].en;
    }
  });
  
  // Update Tech Stack heading
  const techStackHeading = document.querySelector('.frontend-dev-heading');
  if (techStackHeading) {
    techStackHeading.textContent = toIndonesian ? 
      translations["tech-stack-heading"].id : 
      translations["tech-stack-heading"].en;
  }
  
  // Update resume button
  const resumeBtn = document.querySelector('.resume-btn .text');
  if (resumeBtn) {
    resumeBtn.textContent = toIndonesian ? 
      translations["resume-btn"].id : 
      translations["resume-btn"].en;
  }
  
  // Update back to top button
  const backToTopBtn = document.querySelector('#backtotopbutton article');
  if (backToTopBtn) {
    backToTopBtn.innerHTML = toIndonesian ? 
      translations["back-to-top"].id : 
      translations["back-to-top"].en;
  }
  
  // Update footer elements
  const footerQuote = document.querySelector('.two-words article');
  if (footerQuote) {
    footerQuote.innerHTML = toIndonesian ? 
      translations["quote"].id : 
      translations["quote"].en;
  }
  
  const getInTouch = document.querySelector('.getintouch-heading article');
  if (getInTouch) {
    getInTouch.textContent = toIndonesian ? 
      translations["getintouch"].id : 
      translations["getintouch"].en;
  }
  
  const footerCopyright = document.querySelector('.footer-bottom article');
  if (footerCopyright) {
    footerCopyright.innerHTML = toIndonesian ? 
      translations["footer-copyright"].id : 
      translations["footer-copyright"].en;
  }
  
  // Update "Hey" text
  const heyText = document.querySelector('.hey');
  if (heyText) {
    heyText.textContent = toIndonesian ? 
      translations["hey"].id : 
      translations["hey"].en;
  }
  
  // Update jello animated text sections
  updateJelloText('hello-friend', toIndonesian ? translations["im"].id : translations["im"].en);
  updateJelloText('name', toIndonesian ? translations["name"].id : translations["name"].en);
  updateJelloText('work', toIndonesian ? translations["work"].id : translations["work"].en);
}

// Helper function to update jello animated text
function updateJelloText(elementId, newText) {
  const container = document.getElementById(elementId);
  if (!container) return;
  
  // Clear existing content
  container.innerHTML = '';
  
  // Create new jello elements for each character
  for (let i = 0; i < newText.length; i++) {
    if (newText[i] === ' ') {
      container.appendChild(document.createTextNode(' '));
    } else {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.className = 'jello';
      p.textContent = newText[i];
      
      if (elementId === 'work') {
        container.appendChild(div);
        div.appendChild(p);
      } else {
        container.appendChild(p);
      }
    }
  }
}

// Function to toggle language
function toggleLanguage() {
  const currentLanguage = localStorage.getItem('language') || 'en';
  translatePage(currentLanguage === 'en');
}

// Check for saved language preference on page load
document.addEventListener('DOMContentLoaded', function() {
  // Add the language toggle button to the setting container
  addLanguageToggleButton();
  
  // Apply saved language preference
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage === 'id') {
    translatePage(true);
  }
});

// Function to add the language toggle button to the settings container
function addLanguageToggleButton() {
  const settingContainer = document.getElementById('setting-container');
  if (!settingContainer) return;
  
  // Create the language toggle button container
  const languageToggleContainer = document.createElement('div');
  languageToggleContainer.className = 'languagetogglebuttoncontainer';
  languageToggleContainer.id = 'languagetogglebuttoncontainer';
  
  // Create the toggle input element
  const toggleInput = document.createElement('input');
  toggleInput.type = 'checkbox';
  toggleInput.id = 'switchforlanguage';
  toggleInput.onclick = toggleLanguage;
  
  // Create the label element
  const toggleLabel = document.createElement('label');
  toggleLabel.htmlFor = 'switchforlanguage';
  toggleLabel.id = 'labelforlanguage';
  toggleLabel.tabIndex = '0';
  toggleLabel.setAttribute('aria-label', 'switch language');
  toggleLabel.className = 'needtobeinvert';
  
  // Add the input and label to the container
  languageToggleContainer.appendChild(toggleInput);
  languageToggleContainer.appendChild(toggleLabel);
  
  // Add the language toggle container after the sound toggle container
  const soundToggleContainer = document.getElementById('soundtogglebuttoncontainer');
  if (soundToggleContainer) {
    settingContainer.insertBefore(languageToggleContainer, soundToggleContainer.nextSibling);
  } else {
    settingContainer.appendChild(languageToggleContainer);
  }
}