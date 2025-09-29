   // --- Basic slider ---
// Slider
let index=0; const slides=document.querySelector('.slides');
const total=document.querySelectorAll('.slide').length; const dots=document.querySelector('.dots');
for(let i=0;i<total;i++){const dot=document.createElement('span'); dot.classList.add('dot'); if(i===0) dot.classList.add('active'); dot.addEventListener('click',()=>showSlide(i)); dots.appendChild(dot);}
function showSlide(i){index=i; slides.style.transform=`translateX(${-i*100}%)`; document.querySelectorAll('.dot').forEach((d,idx)=>{d.classList.toggle('active',idx===i);});}
function autoSlide(){index=(index+1)%total; showSlide(index);} setInterval(autoSlide,5000);


// Dropdown of Schemes

// document.querySelectorAll('nav ul li').forEach(li=>{
// li.addEventListener('mouseenter',()=>{
// const dd=li.querySelector('.dropdown'); if(dd) dd.style.display='block';
// });
// li.addEventListener('mouseleave',()=>{
// const dd=li.querySelector('.dropdown'); if(dd) dd.style.display='none';
// });
// });
 // Basic toggle functionality for custom dropdown
  document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.closest('.dropdown');
      parent.classList.toggle('open');
    });
  });

  // Optional: Close dropdown if clicked outside
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  });

    (function(){
      const slides = document.getElementById('slides');
      const dotsWrap = document.getElementById('dots');
      const total = slides.children.length;
      let index = 0;

      function renderDots(){
        dotsWrap.innerHTML='';
        for(let i=0;i<total;i++){
          const d=document.createElement('div');d.className='dot'+(i===index?' active':'');d.dataset.i=i;
          d.addEventListener('click',()=>{index=i;update();});
          dotsWrap.appendChild(d);
        }
      }

      function update(){
        slides.style.transform=`translateX(-${index*100}%)`;
        Array.from(dotsWrap.children).forEach((d,i)=>d.classList.toggle('active',i===index));
      }

      function next(){index=(index+1)%total;update();}
      renderDots();update();
      let t = setInterval(next,4000);
      // pause on hover
      slides.parentElement.addEventListener('mouseenter',()=>clearInterval(t));
      slides.parentElement.addEventListener('mouseleave',()=>t=setInterval(next,4000));
    })();

    // --- Simple bilingual content system ---
    const translations = {
      en: {
        subTitle: 'Gram Panchayat', villageName: 'Sample Village Panchayat', navHome:'Home', navSchemes:'Schemes', navAdmin:'Administration', navGallery:'Gallery', navAbout:'About', navContact:'Contact',
        hero1: 'Welcome to Our Gram Panchayat', hero1sub:'Serving the village with transparency and care', hero2:'Local Development & Welfare', hero2sub:'Projects and schemes for every household', hero3:'Community Events & Gallery', hero3sub:'Memories and celebrations of our village', hero4:'Contact & Reachability', hero4sub:'Office hours and how to reach us',
        schemesTitle:'Government Schemes', schemesSubtitle:'(Completed, Ongoing & Future)', schemesCompleted:'Completed Schemes', schemesOngoing:'Ongoing Schemes', schemesFuture:'Future Schemes',
        scWSPtitle:'Water Supply Project', sc1desc:'A completed project that securely provides drinking water to all households.', scVRMtitle:'Village Road Improvement', sc2desc:'Improved connectivity with permanent pavements and drainage.',scPMAtitle:'PradhanMantri Awas',scJJMtitle:'Jal-Jivan Mission', scSDtitle:'Sanitation Drive', sc3desc:'Promoting cleanliness and building household toilets.', sc4title:'Crop Support Program', sc4desc:'Support for farmers with inputs and training.', sc5title:'Jal-Jivan Mission', sc5desc:'Plan for a multi-purpose hall for events and training.', sc6title:'Solar Street Lighting', sc6desc:'Proposal to install energy-efficient solar lights.',
        adminTitle:'Administration', adminSub:'Representative contacts and roles', person1name:'Mr. Ramesh Patil', person1role:'Sarpanch', person1phone:'+91-9876543210', person2name:'Mrs. Sunita More', person2role:'Deputy Sarpanch', person2phone:'+91-9123456780', person3name:'Mr. Manoj Kulkarni', person3role:'Panchayat Secretary', person3phone:'+91-9988776655',
        galleryTitle:'Gallery', gallerySub:'Events & Special Moments', aboutTitle:'About Panchayat', aboutSub:'History, tenure and quick facts', aboutHeading:'Overview', aboutText:'This Gram Panchayat is responsible for the local administration of the village. It manages civic services, local development projects and welfare schemes. The elected members serve a five-year tenure as per state legislation.', about2:'Tenure & Key Info', electionTenureLabel:'Current Tenure:', electionTenure:'2022 - 2027', officeHoursLabel:'Office Hours:', populationLabel:'Village Population (Approx.):',
         malePopulationLabel:'Male Population (Approx.):', femalePopulationLabel:'Female Population (Approx.):',contactTitle:'Contact Us', contactSub:'Address, phone and map', addressLabel:'Address:', phoneLabel:'Phone:', faxLabel:'Fax:', emailLabel:'Email:', dirLabel:'Get Directions:', ImpLinkLabel:'Important Links:',  GovtResolLabel:'Government Resolution',  NskZpLabel:'Nashik Zilha Parishad',  GovtMhLabel:'Maharashtra Government',  MhOnlnLabel:'MahaOnline', RTILabel:'Right To Information'
      },

      mr: {
        subTitle: 'ग्रामपंचायत', villageName: 'डेमो गाव पंचायत', navHome:'मुख्यपृष्ठ', navSchemes:'योजना', navAdmin:'प्रशासन', navGallery:'गॅलरी', navAbout:'बद्दल', navContact:'संपर्क',
        hero1: 'आपल्या ग्रामपंचायतमध्ये स्वागत आहे', hero1sub:'पारदर्शकतेसह आणि काळजीने गावाची सेवा', hero2:'स्थानिक विकास व कल्याण', hero2sub:'प्रत्येक घरासाठी प्रकल्प आणि योजना', hero3:'समुदायाचे कार्यक्रम आणि गॅलरी', hero3sub:'आपल्या गावाच्या आठवणी आणि उत्सव', hero4:'संपर्क व पोहोच', hero4sub:'कार्यालयाचे वेळापत्रक आणि कसे पोहोचायचे',
        schemesTitle:'शासकीय योजना', schemesSubtitle:'(पूर्ण झालेल्या, चालू आणि भावी)', schemesCompleted:'पूर्ण झालेल्या योजना', schemesOngoing:'चालू योजना', schemesFuture:'भावी योजना',
        scWSPtitle:'पाणीपुरवठा प्रकल्प', sc1desc:'सर्व घरांना सुरक्षित पिण्याचे पाणी पुरवणारा पूर्ण झालेला प्रकल्प.', scVRMtitle:'ग्रामरोड सुधारणा', scPMAtitle:'प्रधानमंत्री आवास',scPMAdesc:'', sc2desc:'स्थायी पाथवे आणि ड्रेनेजसह सुधारलेली कनेक्टिव्हिटी.', scSDtitle:'स्वच्छता अभियान', sc3desc:'स्वच्छता प्रोत्साहन आणि घरगुती शौचालयांच्या बांधकामाला प्रोत्साहन.', scJJMtitle:'जल-जीवन मिशन',scJJMdesc:'', sc4title:'पिक समर्थन कार्यक्रम', sc4desc:'शेतकऱ्यांना इनपुट्स व प्रशिक्षणासह समर्थन.', sc5title:'जल-जीवन  मिशन ', sc5desc:'कार्यक्रम आणि प्रशिक्षणासाठी बहुउद्देशीय हॉलचा आराखडा.', sc6title:'सोलर स्ट्रीट लाईटिंग', sc6desc:'ऊर्जा-कार्यक्षम सौर दिवे बसवण्याची प्रस्तावना.',
        adminTitle:'प्रशासन', adminSub:'प्रतिनिधी आणि संपर्क', person1name:' श्री. रमेश पाटील', person1role:'सरपंच', person1phone:'+91-9876543210', person2name:'श्रीमती. सुनीता मोरे', person2role:'उप सरपंच', person2phone:'+91-9123456780', person3name:'श्री. मनोज कुलकर्णी', person3role:'पंचायत सचिव', person3phone:'+91-9988776655',
        galleryTitle:'गॅलरी', gallerySub:'कार्यक्रम आणि खास क्षण', aboutTitle:'ग्रामपंचायतीबद्दल', aboutSub:'इतिहास, कार्यकाळ आणि माहिती', aboutHeading:'अवलोकन', aboutText:'ही ग्रामपंचायत गावाच्या स्थानिक प्रशासनासाठी जबाबदार आहे. ही नागरी सेवा, स्थानिक विकास प्रकल्प व कल्याण योजना व्यवस्थापित करते. निर्वाचित सदस्यांचा कार्यकाळ राज्य कायद्यानुसार पाच वर्षांचा असतो.', about2:'कार्यकाळ व महत्त्वाची माहिती', electionTenureLabel:'सध्याचा कार्यकाळ:', electionTenure:'2022 - 2027', officeHoursLabel:'कार्यालयाचे तास:', populationLabel:'गावाची लोकसंख्या (अंदाजे):',
        malePopulationLabel:'पुरुष (अंदाजे):', femalePopulationLabel:'महिला (अंदाजे):',  contactTitle:'आमच्याशी संपर्क करा', contactSub:'पत्ता, फोन व नकाशा', addressLabel:'पत्ता:', phoneLabel:'फोन:', faxLabel:'फॅक्स:', emailLabel:'ईमेल:', dirLabel:'मार्गदर्शन मिळवा:',   ImpLinkLabel:'महत्वाच्या लिंक्स: ',  GovtResolLabel:'सरकारी निर्णय',  NskZpLabel:'नाशिक जिल्हा परिषद',  GovtMhLabel:'महाराष्ट्र शासन',  MhOnlnLabel:'महा ऑनलाइन', RTILabel:'माहितीचा अधिकार'
      }
    };

    function setLanguage(lang){
      const el = document.body;
      el.setAttribute('data-lang',lang);
      const dict = translations[lang] || translations.en;
      document.querySelectorAll('[data-i18n]').forEach(node=>{
        const key = node.getAttribute('data-i18n');
        if(dict[key]) node.textContent = dict[key];
      });
    }

    // initialize language by reading stored pref or browser
    const saved = localStorage.getItem('gp-lang') || (navigator.language||'en').startsWith('mr')? 'mr':'en';
    setLanguage(saved);

    document.getElementById('langToggle').addEventListener('click',function(){
      const next = document.body.getAttribute('data-lang') === 'en' ? 'mr' : 'en';
      setLanguage(next);
      localStorage.setItem('gp-lang', next);
    });

    // set year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Small smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click',function(e){
        e.preventDefault();
        const id = this.getAttribute('href').substring(1);
        const el = document.getElementById(id);
        if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
      });
    });


  /*
    ----------------- NOTES & DEPLOYMENT -----------------
    - This is a single-file static website (index.html). To deploy, simply upload this file to any static hosting
      service (Netlify, GitHub Pages, Vercel static, Firebase Hosting, or an Apache/Nginx server).
    - Replace placeholder images by putting files in an /assets/ folder and changing the <img src> and background-image URLs.
    - To change the Google Maps embedded location, replace the iframe 'src' with your place's embed URL from Google Maps (Share -> Embed map).
    - To add/remove scheme cards or admin members, duplicate or remove the <article class="card"> and <div class="person"> blocks.
    - Colors are defined in :root — you can change them but keep to 3 main colors for the requested design.
    - This file supports English (en) and Marathi (mr). All visible text keys are controlled by the translations object near the top of the script.
  -->
  */