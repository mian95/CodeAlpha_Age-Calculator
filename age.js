const ageInput = document.querySelector(".age-input");
const submitBtn = document.querySelector(".submit-btn");

// Current date
let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let currentDate = date.getDate();

// Display Fuction
let displayOutput = (Years, Months, Days) => {
  const output = document.querySelector(".output");
  return (output.innerHTML = `
  
    ${
      Years > 0
        ? ` <div> <h3>Years</h3> <p class="data">${Years}</p> </div>`
        : ""
    }
    ${
      Months > 0
        ? `  <div> <h3>Months</h3> <p class="data">${Months}</p> </div>`
        : ""
    }
    ${
      Days > 0
        ? `   <div> <h3>Days</h3> <p class="data">${Days}</p> </div>`
        : ""
    }
  
    `);
};

let calculater = (inputValue) => {
  let birthDate = inputValue.getDate();
  let birthMonth = inputValue.getMonth();
  let birthYear = inputValue.getFullYear();

  // Current Age
  let Years = currentYear - birthYear;
  let Months = currentMonth - birthMonth;
  let Days = currentDate - birthDate;

  displayOutput(Years, Months, Days);
};

// Checker Fuction
let checker = () => {
  let inputValue = new Date(ageInput.value);
  return inputValue != ""
    ? calculater(inputValue)
    : console.log("Enter the Value");
};

submitBtn.addEventListener("click", () => {
  checker();
  ageInput.value = "";
});
