const firebaseConfig = {
    apiKey: "AIzaSyDGnA2Ud_R1686bBnirwF-IEnTTOIO__EM",
    authDomain: "contactform-c8875.firebaseapp.com",
    databaseURL: "https://contactform-c8875-default-rtdb.firebaseio.com",
    projectId: "contactform-c8875",
    storageBucket: "contactform-c8875.firebasestorage.app",
    messagingSenderId: "741645275761",
    appId: "1:741645275761:web:701a976e597574599d41d0"
  };
  
firebase.initializeApp(firebaseConfig);

const contactFOrmdb = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const firstName = getElementVal("firstName");
    const lastName = getElementVal("lastName");
    const email = getElementVal("email");
    const contact = getElementVal("contact");
    const year = getElementVal("year");
    const domain = getElementVal("domain");
    const interest = getElementVal("interest");
    const question = getElementVal("question");
    saveMessage(firstName, lastName, email, contact, year, domain, interest, question);
    document.getElementById("contactForm").reset();
    // console.log(name, email, subject, message);
}

const saveMessage  = (firstName, lastName, email, contact, year, domain, interest, question) => {
    const newContactFormDB = contactFOrmdb.push();
    newContactFormDB.set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        contact: contact,
        year: year,
        domain: domain,
        interest: interest,
        question: question,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}