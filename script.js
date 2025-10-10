   // --- Basic slider ---
// Slider
let index=0; const slides=document.querySelector('.slides');
const total=document.querySelectorAll('.slide').length; const dots=document.querySelector('.dots');
for(let i=0;i<total;i++){const dot=document.createElement('span'); dot.classList.add('dot'); if(i===0) dot.classList.add('active'); dot.addEventListener('click',()=>showSlide(i)); dots.appendChild(dot);}
function showSlide(i){index=i; slides.style.transform=`translateX(${-i*100}%)`; document.querySelectorAll('.dot').forEach((d,idx)=>{d.classList.toggle('active',idx===i);});}
function autoSlide(){index=(index+1)%total; showSlide(index);} setInterval(autoSlide,5000);


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



//Simple Logout Implementation

document.addEventListener("DOMContentLoaded", () => {
  const adminLoginBtn = document.getElementById("adminlogin");
  if (adminLoginBtn) {
    adminLoginBtn.style.display = "none";
  }
});

 document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("token");
    window.location.href = "index.html";
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


    //Complaint Reason Dropdown
    
    const reason = [
      {id : 1, name : 'Water Problem'},
      {id : 2, name : 'Sanitation'},
      {id : 3, name : 'Chamber'},
      {id : 4, name : 'Road Transport'},
      {id : 5, name : 'Street Light'},
      {id : 6, name : 'Solid Waste'},
      {id : 7, name : 'Other'},
      {id : 8, name : 'suggestion'},
    ]

    const reasonDrpDown = document.getElementById('reasonDropdown');

    reason.forEach(rsn => {
      const option = document.createElement('option');
      option.value = rsn.id;
      option.textContent = rsn.name;
      reasonDrpDown.appendChild(option);
    })


    //---------------Complaint Reason Dropdown---------------





    //--------------------------------------Api Implementation-----------------------------------



const adminLoginForm = document.getElementById('adminLoginForm');
if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const apiPath = window.APP_CONFIG.apiBaseUrl;
    const resp = await fetch(apiPath + 'admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!resp.ok) {
      message.style.color = "red";
      message.textContent = "Invalid credentials, Login Failed!";
      return;
    }

    const data = await resp.json();
    localStorage.setItem('adminToken', data.token);   
    // window.location.href = '/Admindashboard.html';
    window.open("Admindashboard.html", "_blank");
  });
}




//Fetching Images from api 


async function loadGallery() {
  try {
    // Replace with your correct API URL
    const apiPath = window.APP_CONFIG.apiBaseUrl;
    const resp = await fetch(apiPath + 'galleryImage')
    if (!resp.ok) {
      console.error('Gallery fetch failed', resp.status, await resp.text());
      return;
    }
    const images = await resp.json();
    renderGallery(images);
  } catch (err) {
    console.error('Error fetching gallery', err);
  }
}


function renderGallery(images) {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) {
    console.error('No #galleryGrid element found');
    return;
  }

  // Clear existing content
  galleryGrid.innerHTML = '';

  images.forEach(img => {
    // img.filepath is something like "/gallery/unique-filename.jpg"
    // Compose full URL if needed (for example, if your API is on another domain)
    const src = img.filepath;  
    const caption = img.caption || '';
    const title = img.title || '';

    // Create anchor element for lightbox
    const a = document.createElement('a');
    a.href = src;
    a.setAttribute('data-lightbox', 'models');
    a.setAttribute('data-title', caption);

    // Create image element
    const imageEl = document.createElement('img');
    imageEl.classList.add('gimg');
    imageEl.src = src;
    imageEl.alt = title;

    // Append
    a.appendChild(imageEl);
    galleryGrid.appendChild(a);
  });
}





// sending Comlaint to api

document.getElementById('complaintForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name = document.getElementById('complainterName').value;
  const number = document.getElementById('complainterNumber').value;
  const rsn = document.getElementById('reasonDropdown').value;
  const msg = document.getElementById('comlaintDesc').value;
  
  const selectedReason = reason.find(r => r.id === parseInt(rsn))?.name;

    const apiPath = window.APP_CONFIG.apiBaseUrl;
    const resp = await fetch(apiPath + 'complaint/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Name: name, Number : number, Reason : selectedReason, Description: msg })
  });
  if (resp.ok) {
    alert('Complaint sent Successfully!');
    document.getElementById('complaintForm').reset();
    // optionally close modal
  } else {
    alert('Complaint - Operation Failed!');
  }
});


