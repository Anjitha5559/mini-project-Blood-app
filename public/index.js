import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

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

let cities = [
    "Eranakulam", "palakkad", "Thrissur", "Kozhikode", "Kannur", "Kasaragod", "Malappuram", "Kollam", "Thiruvananthapuram", "Alappuzha", "Idukki", "Pathanamthitta", "Kottayam", "Wayanad", "Others"
]

const socials = [
  { name: 'Facebook', icon: './res/facebook.png', url: 'https://www.facebook.com' },
  { name: 'Instagram', icon: './res/instagram.png', url: 'https://www.instagram.com' },
  { name: 'Whatsapp', icon: './res/whatsapp.png', url: 'https://www.whatsapp.com' },
  { name: 'Message', icon: './res/inbox.png', url: 'https://www.example.com/message' },
  { name: 'Phone', icon: './res/telephone.png', url: 'tel:+1234567890' },
];

const quotesAndFacts = [
  {
    "quote": "The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you.",
    "author": "Unknown"
  },
  {
    "quote": "To give blood, you need neither extra strength nor extra food, and you will save a life.",
    "author": "Unknown"
  },
  {
    "quote": "The gift of blood is the gift of life.",
    "author": "American Red Cross"
  },
  {
    "quote": "Your blood donation is a timeless investment in saving lives.",
    "author": "Unknown"
  },
  {
    "quote": "A life may depend on a gesture from you, a bottle of Blood.",
    "author": "Unknown"
  },
  {
    "quote": "The blood you donate today gives someone another tomorrow.",
    "author": "Unknown"
  },
  {
    "quote": "The smallest act of kindness is worth more than the grandest intention.",
    "author": "Oscar Wilde"
  },
  {
    "quote": "Donating blood is the most divine service to mankind.",
    "author": "Unknown"
  },
  {
    "quote": "Blood donation is a volunteer act that each of us can do to help others.",
    "author": "Unknown"
  },
  {
    "quote": "Every drop of blood is like a breath for someone. Donate blood, save a life.",
    "author": "Unknown"
  },
  {
    "quote": "The purpose of human life is to serve and to show compassion and the will to help others.",
    "author": "Albert Schweitzer"
  },
  {
    "quote": "Your blood type is the link between you and the person you can save.",
    "author": "Unknown"
  },
  {
    "quote": "Blood donors are silent heroes who save lives without wearing capes.",
    "author": "Unknown"
  },
  {
    "quote": "A single pint can save three lives, a single gesture can create a million smiles.",
    "author": "Unknown"
  },
  {
    "quote": "Donating blood is not just a duty, it's a responsibility.",
    "author": "Unknown"
  },
  {
    "quote": "The best way to find yourself is to lose yourself in the service of others.",
    "author": "Mahatma Gandhi"
  },
  {
    "quote": "The feeling of donating blood is so overwhelming, knowing that it may save a life somewhere.",
    "author": "Unknown"
  },
  {
    "quote": "Share a little, care a little – Donate Blood.",
    "author": "Unknown"
  },
  {
    "quote": "To the young and healthy, it's no loss. To sick, it's hope of life. Donate blood to give back life.",
    "author": "Unknown"
  },
  {
    "quote": "Donating blood is a tangible way to support your community and save lives.",
    "author": "Unknown"
  }
]


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const footer = document.getElementById('iconrow');
const quotesDiv = document.getElementById("quotes");
let currentQuoteIndex = 0;
const form = document.getElementById('formsubmit');
const locationFilter = document.getElementById('locationFilter');
const bloodGroupFilter = document.getElementById('bloodGroupFilter');

if (quotesDiv) {
  updateQuote();
  setInterval(updateQuote, 4000);
}

if (form) {
  validateAndCreateObject();
}

if (locationFilter && bloodGroupFilter) {
     locationFilter.addEventListener('change', function() {
       searchusers();
      } );
     bloodGroupFilter.addEventListener('change', function() {
      searchusers();
     } );
     cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.innerHTML = city;
    locationFilter.appendChild(option);
  }
  );
}

function renderUsers(users) {
  const usersDiv = document.getElementById('users');
  usersDiv.innerHTML = '';
  users.forEach(user => {
    const div = document.createElement('div');
    div.className = 'donateuser';
    div.innerHTML = `<div class= "userdetailbox">
      <div class="donateuserdetail name">Name: ${user.name} ${user.lastName}</div>
      <div class="donateuserdetail bloodgroup">Blood Group: ${user.bloodGroup}</div>
       <div class="donateuserdetail history">History: ${user.history}</div>
      <div class="donateuserdetail message"> user msg: ${user.msg}</div>
      <div class="donateuserdetail userbtn contactnumber"><a href="tel:${user.phone}">Phone</a></div>
      <div class="donateuserdetail userbtn email"><a href="mailto:${user.email}">Email</a></div>
    </div>`;
    usersDiv.appendChild(div);
  });
}

function validateAndCreateObject() {

  form.addEventListener('click', function (event) {
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
    setuserdatatofirebase(userdata);
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


function searchusers() {
    const location   = document.getElementById('locationFilter').value;
    const bloodGroup = document.getElementById('bloodGroupFilter').value;
    console.log(location, bloodGroup);
    const users = ref(db, 'users');
    const filteredUsers = [];
    get(users).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        if (childData.location === location && childData.bloodGroup === bloodGroup) {
          filteredUsers.push(childData);
        }
      });
      renderUsers(filteredUsers);
    });
  }


function setuserdatatofirebase(userdata) {
  let userexists = false;
  // set timestamp
  const uniqueidd = Date.now();
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

    set(ref(db, 'users/' + uniqueidd), userdata);
    alert('Your data has been submitted successfully');
  });
}

socials.forEach(social => {
  const div = document.createElement('div');
  div.innerHTML = `<a class="socialbtn" href="${social.url}" target="_blank"><img src="${social.icon}" alt="${social.name} icon"> <span class="iconname">${social.name}</span></a>`;
  div.className = 'soc';
  footer.appendChild(div);
});


function updateQuote() {
  quotesDiv.classList.add('fade-out'); setTimeout(() => {
    quotesDiv.innerHTML = quotesAndFacts[currentQuoteIndex].quote + '<br><span class="author">- ' + quotesAndFacts[currentQuoteIndex].author + '</span>';
    quotesDiv.classList.remove('fade-out');
    quotesDiv.classList.add('fade-in'); setTimeout(() => {
      quotesDiv.classList.remove('fade-in');
    }, 1000);

    currentQuoteIndex = (currentQuoteIndex + 1) % quotesAndFacts.length;
  }, 1000);
}

