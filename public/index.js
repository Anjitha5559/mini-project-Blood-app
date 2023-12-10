// JavaScript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref,get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXNt6go94FDDX5gTf9Krrv57szChtEiTQ",
  authDomain: "blood-hubb.firebaseapp.com",
  databaseURL: "https://blood-hubb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blood-hubb",
  storageBucket: "blood-hubb.appspot.com",
  messagingSenderId: "486095709964",
  appId: "1:486095709964:web:9830276dd82cd47f598b29",
  measurementId: "G-51KLTCGV3P"
};

const socials = [
  { name: 'Facebook',  icon: './res/facebook.png', url: 'https://www.facebook.com' },
  { name: 'Instagram', icon: './res/instagram.png', url: 'https://www.instagram.com' },
  { name: 'Whatsapp', icon: './res/whatsapp.png', url: 'https://www.whatsapp.com' },
  { name: 'Message', icon: './res/inbox.png', url: 'https://www.example.com/message' },
  { name: 'Phone', icon: './res/telephone.png', url: 'tel:+1234567890' },
];

const quotesAndFacts = [
  "Blood donation is the best donation",
  "Every two seconds someone in the U.S. needs blood",
  "A single donation can potentially help more than one patient",
  "One donation can save up to three lives",
  "Blood is the most precious gift that anyone can give to another person",
];

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
const footer = document.getElementById('iconrow');
const quotesDiv = document.getElementById("quotes");
let currentQuoteIndex = 0;
const form = document.getElementById('formsubmit');


if (quotesDiv){
  updateQuote();
  setInterval(updateQuote, 4000);
}

if(form){
  validateAndCreateObject();
}


function validateAndCreateObject() {
 
  form.addEventListener('click', function(event) {
    event.preventDefault();
    const name = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const bloodGroup = document.getElementById('bloodGroup');
    const phone = document.getElementById('contactNumber');
    const history = document.getElementById('medicalHistory');
    const location = document.getElementById('location');
    const msg = document.getElementById('message');
    const userdata = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      bloodGroup: bloodGroup.value,
      phone: phone.value,
      history: history.value,
      location: location.value,
      msg: msg.value,
    };
    setuserdatatofirebase(db, userdata);
    name.value = '';
    lastName.value = '';
    email.value = ''; 
    bloodGroup.value = '';
    phone.value = '';
    location.value = '';
    msg.value = '';
    history.value = '';
  });
}

function setuserdatatofirebase(userdata) {
  let userexists = false;
  const users = ref(db, 'users');

  get(users).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();
      if (childData.email === userdata.email || childData.phone === userdata.phone) {
        userexists = true;
      }
    });

    if (userexists) {
      alert('User already exists');
      return;
    }
    set(ref(db, 'users/' + userdata.name), userdata);
  });
}

socials.forEach(social => {
  const div = document.createElement('div');
  div.innerHTML = `<a class="socialbtn" href="${social.url}" target="_blank"><img src="${social.icon}" alt="${social.name} icon"> <span class="iconname">${social.name}</span></a>`;
  div.className = 'soc';
  footer.appendChild(div);
});






function updateQuote() {
  quotesDiv.classList.add('fade-out');setTimeout(() => {
    quotesDiv.textContent = quotesAndFacts[currentQuoteIndex];
    quotesDiv.classList.remove('fade-out');
    quotesDiv.classList.add('fade-in'); setTimeout(() => {
      quotesDiv.classList.remove('fade-in');
    }, 1000);

    currentQuoteIndex = (currentQuoteIndex + 1) % quotesAndFacts.length;
  }, 1000);
}

