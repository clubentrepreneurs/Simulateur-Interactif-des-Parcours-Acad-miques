// Questionnaire interaction
const startQuizButton = document.getElementById('startQuiz');
const resultsSection = document.getElementById('results');
const suggestedFields = document.getElementById('suggestedFields');
const exploreFieldsButton = document.getElementById('exploreFields');
const fieldsSection = document.getElementById('fields');
const fieldDetails = document.getElementById('fieldDetails');
const backToResultsButton = document.getElementById('backToResults');

// Example fields data
const fields = [
  { name: "Informatique", description: "Développement web, IA, et cybersécurité." },
  { name: "Médecine", description: "Formation en soins de santé et recherche médicale." },
  { name: "Sciences économiques", description: "Analyse financière et gestion d'entreprise." }
];

// Start the quiz
startQuizButton.addEventListener('click', () => {
  resultsSection.classList.remove('hidden');
  startQuizButton.parentElement.classList.add('hidden');
  
  // Generate suggested fields
  suggestedFields.innerHTML = '';
  fields.forEach(field => {
    const li = document.createElement('li');
    li.textContent = field.name;
    suggestedFields.appendChild(li);
  });
});

// Explore fields
exploreFieldsButton.addEventListener('click', () => {
  fieldsSection.classList.remove('hidden');
  resultsSection.classList.add('hidden');
  
  // Display field details
  fieldDetails.innerHTML = '';
  fields.forEach(field => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${field.name}</h3><p>${field.description}</p>`;
    fieldDetails.appendChild(div);
  });
});

// Back to results
backToResultsButton.addEventListener('click', () => {
  resultsSection.classList.remove('hidden');
  fieldsSection.classList.add('hidden');
});
