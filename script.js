document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("user-input");
  const checkBtn = document.getElementById("check-btn");
  const clearBtn = document.getElementById("clear-btn");
  const resultsDiv = document.getElementById("results-div");

  function validatePhoneNumber(number) {
    // Remove all whitespace from the input
    const cleanNumber = number.trim();

    // Regular expression for valid US phone number formats
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

    // Test if the number matches the regex pattern
    if (phoneRegex.test(cleanNumber)) {
      // Check if country code is present and is 1
      if (cleanNumber.startsWith("1")) {
        // Verify the first digit after country code
        const afterCountryCode = cleanNumber.substring(1).trim();
        if (afterCountryCode.startsWith("(")) {
          const areaCode = afterCountryCode.match(/\((\d{3})\)/);
          if (!areaCode) return false;
        } else {
          const firstDigit = afterCountryCode.replace(/[^\d]/g, "")[0];
          if (!firstDigit) return false;
        }
      }
      return true;
    }
    return false;
  }

  checkBtn.addEventListener("click", function () {
    const phoneNumber = userInput.value;

    if (!phoneNumber) {
      alert("Please provide a phone number");
      return;
    }

    const isValid = validatePhoneNumber(phoneNumber);
    resultsDiv.textContent = `${
      isValid ? "Valid" : "Invalid"
    } US number: ${phoneNumber}`;
  });

  clearBtn.addEventListener("click", function () {
    userInput.value = "";
    resultsDiv.textContent = "";
  });
});
