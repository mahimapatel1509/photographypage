let menuicon = document.querySelector(".menu-i");
let menubar = document.querySelector(".menu-bar");

menuicon.addEventListener("click", () => {
  if (menubar.style.visibility === "hidden") {
    menubar.style.visibility = "visible";
  } else {
    menubar.style.visibility = "hidden";
  }
});

// gallery

let previousgallery = document.querySelector(".imgs");
let viewbtn = document.querySelector(".gal-btn");
let gallery = document.querySelector(".view-gallery");
let remove = document.querySelector(".removebtn");

viewbtn.addEventListener("click", () => {
  if (gallery.style.display == "none") {
    gallery.style.display = "block";
    gallery.style.backgroundColor = "transparent";
    previousgallery.style.display = "none";
    viewbtn.textContent = "remove";
  } else {
    gallery.style.display = "none";
    previousgallery.style.display = "block";
    viewbtn.textContent = "view All";
  }
});

// schedulenow
let scheduleBtn = document.querySelector(".schedule-btn");
let scheduleInfo = document.querySelector(".schedulenow");
let openBtn = document.querySelectorAll(".open");
let inputBox = document.querySelectorAll(".inp-box");
let doneBtn = document.querySelector(".done");
let navScheduleBtn = document.querySelector(".nav-btn");
let monInp = document.querySelector(".monInput");

document.querySelectorAll('input[type="time"]').forEach((input) => {
  input.addEventListener("change", collectSchedule);
});

function collectSchedule() {
  const days = document.querySelectorAll(".day");
  const schedule = [];

  days.forEach((day) => {
    const dayName = day.querySelector("span").innerText;
    const inputs = day.querySelectorAll('input[type="time"]');
    const startTime = inputs[0]?.value;
    const endTime = inputs[1]?.value;
     if(startTime && endTime) {
      schedule.push(`${dayName}: ${startTime} to ${endTime}`);
    }
  });

  schedule.forEach((item) => alert(`your schedule is fix on ${item}`));
}

// Optionally: when user clicks Done
document.querySelector(".done").addEventListener("click", collectSchedule);

scheduleBtn.addEventListener("click", () => {
  scheduleInfo.style.display = "block";
});
navScheduleBtn.addEventListener("click", () => {
  scheduleInfo.style.display = "block";
});

openBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const input = inputBox[index];
    if (input.style.display === "none" || input.style.display === "") {
      input.style.display = "block";
    } else {
      input.style.display = "none";
    }
  });
});

// done btn

doneBtn.addEventListener("click", () => {
  if (scheduleInfo.style.display == "block") {
    scheduleInfo.style.display = "none";
  }
});

// form

let form = document.querySelector(".form");
let formInp = document.querySelectorAll(".form-inp");
let firstName = document.querySelector(".first-name");
let secondName = document.querySelector(".second-name");
let email = document.querySelector(".email");
let phoneNo = document.querySelector(".phone");
let service = document.querySelector(".service");
let date = document.querySelector(".date");
let textArea = document.getElementById("textarea");
let submitBtn = document.querySelector(".submit-btn");
let popuoBtn = document.createElement("button");

function handleInp(e) {
  let firstname = firstName.value;
  let secondname = secondName.value;
  let Email = email.value;
  let servs = service.value;
  let Date = date.value;

  let userInfo = {
    firstname: firstname,
    secondname: secondname,
    Email: Email,
    servs: servs,
    Date: Date,
  };

  let arr = [];
  arr = userInfo;
  localStorage.setItem("userInfo", JSON.stringify(userInfo) || "[]");
}

function submit() {
  if (
    firstName.value === "" ||
    secondName.value === "" ||
    email.value === "" ||
    phoneNo.value === "" ||
    service.value === "" ||
    date.value === "" ||
    service.value === ""
  ) {
    alert("firstly fiil all the details in form");
  } else {
    let mess = document.createElement("div");
    mess.setAttribute("class", "submitMess");
    mess.innerHTML = "your session is booked";
    form.append(mess);
    popuoBtn.innerHTML = "ok";
    popuoBtn.setAttribute("class", "popBtn");
    mess.appendChild(popuoBtn);
    popuoBtn.addEventListener("click", () => {
      mess.remove();
    });
  }
}
