const imageSets = [
  {
    id: 1,
    name: 'Andrew Smith',
    title: 'Innocence',
    images: [
      'https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
      'https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
      'https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
    ],
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'Nature Adventures',
    images: [
      'https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      'https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80'
    ],
  },
  {
    id: 3,
    name: 'Irna Tawsen',
    title: 'Faces of the World',
    images: [
      'https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      'https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ],
  },
  {
    id: 4,
    name: 'Mark Dale',
    title: 'Wild Animals',
    images: [
      'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
      'https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80',
      'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      'https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
    ]
  }

];
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const counterSpan = document.getElementById("counter");
let detailsCurrentImg;
let selectedEntry;
let counter = 1;


window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  let currId = urlParams.get("id");

  selectedEntry = imageSets.filter(item => item.id == currId);

  const currEntry = `<div class="selected-entry">
    <h1 class="dark-mode-text">${selectedEntry[0].title}</h1>
    <h2 class="dark-mode-text">${selectedEntry[0].name}</h2>
    <img src="${selectedEntry[0].images[0]}" alt="${selectedEntry[0].title}" class="current-img">
    </div>`;

  const currEntryContainer = document.getElementById("curr-entry-container");
  currEntryContainer.innerHTML = currEntry;
  detailsCurrentImg = document.querySelector(".current-img");
};

function nextPicture() {
  if (counter < 5) {
    console.log({selectedEntry});
    counter++;
    counterSpan.innerHTML = counter;
    detailsCurrentImg.src = selectedEntry[0].images[counter - 1];
  }
  else {
    counter = 1;
    counterSpan.innerHTML = counter;
    detailsCurrentImg.src = selectedEntry[0].images[counter - 1];
  }
}

function prevPicture() {
  if (counter > 1) {
    counter--;
    counterSpan.innerHTML = counter;
    detailsCurrentImg.src = selectedEntry[0].images[counter - 1];
  }
  else {
    counter = 5;
    counterSpan.innerHTML = counter;
    detailsCurrentImg.src = selectedEntry[0].images[counter - 1];
  }

}


nextBtn.addEventListener("click", nextPicture);
prevBtn.addEventListener("click", prevPicture);

//Toggle Dark Mode & Light Mode
const themeBtn = document.getElementById("theme-btn");

const toggleTheme = () => {
  const darkModeText = document.querySelectorAll(".dark-mode-text");
  const body = document.querySelector("body");
  const submitLink = document.querySelector(".submit-link");
  if (body.style.backgroundColor !== "rgb(42, 59, 73)") {
    body.style.backgroundColor = "rgb(42, 59, 73)";
    themeBtn.innerHTML = "Light Mode";
    for (let i = 0; i < darkModeText.length; i++) {
      darkModeText[i].classList.add("white-text");
    }

  }
  else {
    body.style.backgroundColor = "rgb(255, 255, 255)";
    themeBtn.innerHTML = "Dark Mode";
    for (let i = 0; i < darkModeText.length; i++) {
      darkModeText[i].classList.remove("white-text");
    }

  }
}

themeBtn.onclick = toggleTheme;