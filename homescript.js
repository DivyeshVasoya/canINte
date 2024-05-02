const form = document.querySelector("form");
const nextBtns = form.querySelectorAll(".nextBtn");
const backBtns = form.querySelectorAll(".backBtn");
const sections = form.querySelectorAll(".form");

// Function to check if all input fields in a section are filled
function checkInputs(section) {
  const inputs = section.querySelectorAll("input, select");
  return Array.from(inputs).every((input) => {
    return (
      input.value.trim() !== "" ||
      (input.tagName === "SELECT" && input.selectedIndex !== 0)
    );
  });
}
console.log("test");
// Function to handle next button click
nextBtns.forEach((nextBtn) => {
  console.log(nextBtn);
  nextBtn.addEventListener("click", (e) => {
    console.log("next click");
    let next = e.currentTarget.dataset.next;
    console.log(next);
    document.querySelectorAll(".form.active").forEach((item) => {
      item.classList.remove("active");
    });

    let ele = document.querySelector(`.form.${next}`);
    ele.classList.add("active");
    // const currentSection = nextBtn.closest(".form");
    // const nextSection = currentSection.nextElementSibling;

    // if (checkInputs(currentSection)) {
    //   form.classList.add("secActive");
    //   currentSection.style.display = "none";
    //   nextSection.style.display = "block";
    // }
  });
});

// Function to handle back button click
backBtns.forEach((backBtn) => {
  backBtn.addEventListener("click", (e) => {
    let next = e.currentTarget.dataset.prv;
    console.log(next);
    document.querySelectorAll(".form.active").forEach((item) => {
      item.classList.remove("active");
    });

    let ele = document.querySelector(`.form.${next}`);
    ele.classList.add("active");
    //   const currentSection = backBtn.closest(".form");
    //   const prevSection = currentSection.previousElementSibling;
    //   form.classList.remove("secActive");
    //   currentSection.style.display = "none";
    //   prevSection.style.display = "block";
  });
});

const stateOptions = {
  India: [
    "Gujarat",
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "Andhra Pradesh",
    "Tamil Nadu",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],

  // Add more states for other countries as needed
};
function updateStates() {
  const countrySelect = document.getElementById("country");
  const stateSelect = document.getElementById("state");
  const selectedCountry = countrySelect.value;

  // Clear existing options
  stateSelect.innerHTML = "<option value=''>Select State</option>";

  // Add options for selected country
  if (selectedCountry && stateOptions[selectedCountry]) {
    stateOptions[selectedCountry].forEach((state) => {
      const option = document.createElement("option");
      option.value = state;
      option.text = state;
      stateSelect.appendChild(option);
    });
  }
}
document.querySelectorAll("input[type=radio][name=choice]").forEach((input) => {
  input.addEventListener("change", function () {
    const breakReason = document.getElementById("breakReason");
    if (this.value === "YES") {
      breakReason.style.display = "block";
    } else {
      breakReason.style.display = "none";
    }
  });
});

// Function to toggle display of "KT/Backlog" select dropdown
document
  .querySelectorAll("input[type=radio][name=choice1]")
  .forEach((input) => {
    input.addEventListener("change", function () {
      const ktBacklog = document.getElementById("ktBacklog");
      if (this.value === "YES") {
        ktBacklog.style.display = "block";
      } else {
        ktBacklog.style.display = "none";
      }
    });
  });
document.querySelectorAll('input[name="pgStatus"]').forEach((input) => {
  input.addEventListener("change", function () {
    const education2 = document.querySelector(".education2");
    if (this.value === "yes") {
      education2.style.display = "block";
    } else {
      education2.style.display = "none";
    }
  });
});

document
  .getElementById("salesforceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fileInput = document.getElementById("resume");
    const file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      const resumeData = reader.result.split(",")[1];
      console.log("file data is", resumeData);

      var radios = document.getElementsByName("pgStatus");
      var pgStatus;
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          pgStatus = radios[i].value;
          break;
        }
      }
      var radios = document.getElementsByName("choice");
      var choice;
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          choice = radios[i].value;
          break;
        }
      }
      var radios = document.getElementsByName("choice1");
      var choice1;
      for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          choice1 = radios[i].value;
          break;
        }
      }

      const formData = {
        salutation: document.getElementById("salutation").value,
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        dob: document.getElementById("dob").value,
        gender: document.getElementById("gender").value,
        houseNo: document.getElementById("houseNo").value,
        streetName: document.getElementById("streetName").value,
        areaName: document.getElementById("areaName").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        pincode: document.getElementById("pincode").value,
        email: document.getElementById("state").value,
        altEmail: document.getElementById("altEmail").value,
        phone: document.getElementById("phone").value,
        altPhone: document.getElementById("altPhone").value,
        highInstitute: document.getElementById("highInstitute").value,
        highQualification: document.getElementById("highQualification").value,
        yearOfPassing: document.getElementById("yearOfPassing").value,
        ugCourseName: document.getElementById("ugCourseName").value,
        ugCourseType: document.getElementById("ugCourseType").value,
        ugSpecilization: document.getElementById("ugSpecilization").value,
        ugInstituteName: document.getElementById("ugInstituteName").value,
        ugUniversityName: document.getElementById("ugUniversityName").value,
        pgStatus: pgStatus,
        pgCourseName: document.getElementById("pgCourseName").value,
        pgStartDate: document.getElementById("pgStartDate").value,
        pgEndDate: document.getElementById("pgEndDate").value,
        pgCourseType: document.getElementById("pgCourseType").value,
        pgSpecialization: document.getElementById("pgSpecialization").value,
        pgInstituteName: document.getElementById("pgInstituteName").value,
        pgUniversityName: document.getElementById("pgUniversityName").value,
        pgCgpa: document.getElementById("pgCgpa").value,
        secBoard: document.getElementById("secBoard").value,
        highBoard: document.getElementById("highBoard").value,
        highMarks: document.getElementById("highMarks").value,
        choice: choice,
        reason: document.getElementById("reason").value,
        choice1: choice1,
        ktBacklog: document.getElementById("ktBacklog").value,
        lan1: document.getElementById("lan1").value,
        lan2: document.getElementById("lan2").value,
        lan3: document.getElementById("lan3").value,
        linkedin: document.getElementById("linkedin").value,
        github: document.getElementById("github").value,

        //email: localStorage.getItem("emailId"),
        resume: resumeData,
        fileName: file.name,
      };
      console.log("Form data:", formData);

      const accessToken =
        "00D5g00000LOawI!ARsAQKNgk_kEi4HE0qx5NIb4FJCn5nbsSQHurBF6u3hdPH_tR9Uc_nrR14VJY32UYTuTj6Wpi8BGFOFGS.or2DoKmdRh9yo7";

      // Send the formData object as JSON to the server
      fetch(
        "https://kriittechnologies2-dev-ed.develop.my.salesforce.com/services/apexrest/submitFresherData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        }
      )
        .then((response) => {
          // Handle response
          alert("Form Data Submitted Successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    reader.readAsDataURL(file);
  });