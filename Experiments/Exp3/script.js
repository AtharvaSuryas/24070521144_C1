// Dom elements selection
const form = document.getElementById('gradeForm');
const marksInput = document.getElementById('marks');
const resultBox = document.getElementById('result');

form.addEventListener('submit', function (e) {
  // Prevent default form page reload
  e.preventDefault();

  // Reset the display classes
  resultBox.className = "result-box hidden";

  const rawInput = marksInput.value.trim();
  const marks = Number(rawInput);

  // Form Validation Control Structure
  if (rawInput === "" || isNaN(marks) || marks < 0 || marks > 100) {
    resultBox.textContent = "Error: Please enter a valid number between 0 and 100.";
    resultBox.classList.remove('hidden');
    resultBox.classList.add('error');
    return;
  }

  // Grading Logic Control Structure
  let grade = "";

  if (marks >= 90) {
    grade = "A+";
  } else if (marks >= 80) {
    grade = "A";
  } else if (marks >= 70) {
    grade = "B";
  } else if (marks >= 60) {
    grade = "C";
  } else if (marks >= 50) {
    grade = "D";
  } else {
    grade = "F (Fail)";
  }

  // Render successful output
  resultBox.textContent = `Your Grade is: ${grade}`;
  resultBox.classList.remove('hidden');
  resultBox.classList.add('success');
});
