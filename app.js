// Application Data and State
const frameworksData = {
  "frameworks": [
    {
      "name": "Gottman Relationship Health",
      "description": "Measures communication patterns, emotional connection, and conflict resolution based on 40+ years of research",
      "weight": 0.20,
      "questions": [
        {
          "id": "gottman_1",
          "text": "When we have disagreements, we are able to work through them constructively",
          "type": "likert7",
          "category": "conflict_resolution"
        },
        {
          "id": "gottman_2", 
          "text": "My partner really listens when I talk about my feelings",
          "type": "likert7",
          "category": "emotional_connection"
        },
        {
          "id": "gottman_3",
          "text": "We rarely criticize each other's character during arguments",
          "type": "likert7",
          "category": "communication"
        },
        {
          "id": "gottman_4",
          "text": "I feel emotionally safe sharing vulnerable feelings with my partner",
          "type": "likert7",
          "category": "trust"
        }
      ]
    },
    {
      "name": "Sternberg's Love Triangle",
      "description": "Assesses the three components of love: intimacy, passion, and commitment",
      "weight": 0.18,
      "questions": [
        {
          "id": "sternberg_1",
          "text": "I feel very close and connected to my partner",
          "type": "likert7",
          "category": "intimacy"
        },
        {
          "id": "sternberg_2",
          "text": "I find my partner physically and romantically attractive",
          "type": "likert7", 
          "category": "passion"
        },
        {
          "id": "sternberg_3",
          "text": "I am committed to maintaining this relationship long-term",
          "type": "likert7",
          "category": "commitment"
        },
        {
          "id": "sternberg_4",
          "text": "My partner and I share our deepest thoughts and feelings",
          "type": "likert7",
          "category": "intimacy"
        }
      ]
    },
    {
      "name": "Love Languages",
      "description": "Identifies how you and your partner prefer to express and receive love",
      "weight": 0.12,
      "questions": [
        {
          "id": "love_lang_1",
          "text": "What makes you feel most loved by your partner?",
          "type": "multiple_choice",
          "options": [
            "Hearing 'I love you' and words of encouragement",
            "Receiving thoughtful gifts or surprises", 
            "Getting help with tasks or responsibilities",
            "Spending uninterrupted quality time together",
            "Physical affection like hugs and kisses"
          ],
          "category": "love_language"
        },
        {
          "id": "love_lang_2", 
          "text": "How do you most naturally express love to your partner?",
          "type": "multiple_choice",
          "options": [
            "Telling them how much they mean to me",
            "Giving gifts or planning surprises",
            "Doing things to help and support them", 
            "Planning special time together",
            "Physical touch and affection"
          ],
          "category": "love_expression"
        }
      ]
    },
    {
      "name": "PERMA Wellbeing",
      "description": "Evaluates positive emotions, engagement, relationships, meaning, and accomplishment in your partnership",
      "weight": 0.10,
      "questions": [
        {
          "id": "perma_1",
          "text": "Being with my partner generally makes me feel joyful and positive",
          "type": "likert7",
          "category": "positive_emotion"
        },
        {
          "id": "perma_2",
          "text": "My partner and I share similar values and life meaning",
          "type": "likert7",
          "category": "meaning"
        },
        {
          "id": "perma_3",
          "text": "We celebrate each other's achievements and accomplishments",
          "type": "likert7",
          "category": "accomplishment"
        }
      ]
    },
    {
      "name": "Attachment Security",
      "description": "Measures attachment anxiety and avoidance in close relationships",
      "weight": 0.15,
      "questions": [
        {
          "id": "attachment_1",
          "text": "I worry about my partner not wanting to stay with me",
          "type": "likert7",
          "category": "attachment_anxiety",
          "reverse_scored": true
        },
        {
          "id": "attachment_2", 
          "text": "I find it easy to depend on my partner emotionally",
          "type": "likert7",
          "category": "attachment_avoidance"
        },
        {
          "id": "attachment_3",
          "text": "I feel comfortable sharing my private thoughts and feelings with my partner",
          "type": "likert7",
          "category": "attachment_security"
        }
      ]
    },
    {
      "name": "Relationship Satisfaction", 
      "description": "Overall satisfaction and happiness in the relationship",
      "weight": 0.08,
      "questions": [
        {
          "id": "satisfaction_1",
          "text": "How satisfied are you with your relationship overall?",
          "type": "likert7",
          "category": "general_satisfaction"
        },
        {
          "id": "satisfaction_2",
          "text": "How well does your partner meet your needs?",
          "type": "likert7", 
          "category": "need_fulfillment"
        }
      ]
    },
    {
      "name": "Interpersonal Closeness",
      "description": "Measures the degree of interconnectedness and intimacy",
      "weight": 0.07,
      "questions": [
        {
          "id": "closeness_1",
          "text": "My partner and I influence each other's daily decisions",
          "type": "likert7",
          "category": "interdependence"
        },
        {
          "id": "closeness_2",
          "text": "We share many activities and interests together",
          "type": "likert7",
          "category": "shared_activities"
        }
      ]
    },
    {
      "name": "Conflict Resolution",
      "description": "How you handle disagreements and solve problems together",
      "weight": 0.08,
      "questions": [
        {
          "id": "conflict_1",
          "text": "When we disagree, we try to find solutions that work for both of us",
          "type": "likert7",
          "category": "collaborative_resolution"
        },
        {
          "id": "conflict_2",
          "text": "During conflicts, I tend to withdraw and avoid discussing the issue",
          "type": "likert7",
          "category": "conflict_avoidance",
          "reverse_scored": true
        }
      ]
    },
    {
      "name": "Character Strengths Alignment",
      "description": "How well your core character strengths complement each other",
      "weight": 0.07,
      "questions": [
        {
          "id": "strengths_1", 
          "text": "My partner and I bring out the best in each other",
          "type": "likert7",
          "category": "mutual_growth"
        },
        {
          "id": "strengths_2",
          "text": "We have complementary strengths that balance our relationship",
          "type": "likert7",
          "category": "strength_balance"
        }
      ]
    }
  ],
  "scoring": {
    "synergy_ranges": [
      {"min": 85, "max": 100, "label": "Exceptional Synergy", "description": "You two are remarkably well-matched across multiple dimensions. Your relationship shows strong compatibility and mutual support.", "color": "#22c55e"},
      {"min": 70, "max": 84, "label": "Strong Synergy", "description": "Your relationship demonstrates solid compatibility with many areas of strength. Some areas may benefit from attention.", "color": "#84cc16"},
      {"min": 55, "max": 69, "label": "Moderate Synergy", "description": "You have a good foundation with opportunities for growth. Focus on strengthening key areas.", "color": "#eab308"}, 
      {"min": 40, "max": 54, "label": "Developing Synergy", "description": "Your relationship has potential but may benefit from intentional work in several areas.", "color": "#f97316"},
      {"min": 0, "max": 39, "label": "Growth Needed", "description": "Consider focusing on fundamental relationship skills and communication patterns.", "color": "#ef4444"}
    ],
    "recommendations": {
      "high_synergy": [
        "Continue nurturing your strong foundation by maintaining regular check-ins",
        "Focus on growing together by setting shared goals and dreams",
        "Consider being mentors to other couples given your relationship strength"
      ],
      "moderate_synergy": [
        "Schedule regular relationship conversations to address areas for improvement",
        "Consider couples counseling or relationship education to strengthen your bond",
        "Practice active listening and validation techniques with each other"
      ],
      "low_synergy": [
        "Focus on rebuilding basic trust and communication patterns",
        "Consider professional relationship counseling to work through challenges",
        "Start with small, positive interactions to rebuild your connection"
      ]
    }
  }
};

// Application State
let appState = {
  currentSection: 'landing',
  currentPartner: null,
  currentFrameworkIndex: 0,
  currentQuestionIndex: 0,
  responses: {
    partnerA: {},
    partnerB: {}
  },
  results: null
};

// Flatten all questions for easier navigation
let allQuestions = [];
frameworksData.frameworks.forEach(framework => {
  framework.questions.forEach(question => {
    allQuestions.push({
      ...question,
      framework: framework.name,
      frameworkDescription: framework.description
    });
  });
});

// Navigation Functions
function showSection(sectionId) {
  console.log('Showing section:', sectionId);
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    appState.currentSection = sectionId;
  } else {
    console.error('Section not found:', sectionId);
  }
}

function startAssessment() {
  console.log('Starting assessment');
  showSection('partner-selection');
}

function selectPartner(partner) {
  console.log('Selected partner:', partner);
  appState.currentPartner = partner;
  appState.currentFrameworkIndex = 0;
  appState.currentQuestionIndex = 0;
  showAssessmentQuestion();
  showSection('assessment');
}

function startPartnerB() {
  console.log('Starting Partner B assessment');
  appState.currentPartner = 'B';
  appState.currentFrameworkIndex = 0;
  appState.currentQuestionIndex = 0;
  showAssessmentQuestion();
  showSection('assessment');
}

// Assessment Functions
function getCurrentQuestionIndex() {
  return appState.currentFrameworkIndex * 4 + appState.currentQuestionIndex;
}

function showAssessmentQuestion() {
  const questionIndex = getCurrentQuestionIndex();
  const question = allQuestions[questionIndex];
  const totalQuestions = allQuestions.length;
  
  console.log('Showing question:', questionIndex, question);
  
  // Update progress
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    const progressPercent = ((questionIndex + 1) / totalQuestions) * 100;
    progressFill.style.width = `${progressPercent}%`;
  }
  
  // Update info bar
  const currentPartnerEl = document.querySelector('.current-partner');
  const progressTextEl = document.querySelector('.progress-text');
  
  if (currentPartnerEl) currentPartnerEl.textContent = `Partner ${appState.currentPartner}`;
  if (progressTextEl) progressTextEl.textContent = `Question ${questionIndex + 1} of ${totalQuestions}`;
  
  // Update framework info
  const frameworkTitleEl = document.querySelector('.framework-title');
  const frameworkDescEl = document.querySelector('.framework-description');
  
  if (frameworkTitleEl) frameworkTitleEl.textContent = question.framework;
  if (frameworkDescEl) frameworkDescEl.textContent = question.frameworkDescription;
  
  // Update question
  const questionTextEl = document.querySelector('.question-text');
  if (questionTextEl) questionTextEl.textContent = question.text;
  
  // Clear previous answers
  document.querySelectorAll('input[name="current-question"]').forEach(input => {
    input.checked = false;
  });
  
  // Show appropriate question type
  const likertScale = document.querySelector('.likert-scale');
  const multipleChoice = document.querySelector('.multiple-choice-options');
  
  if (question.type === 'likert7') {
    if (likertScale) likertScale.style.display = 'block';
    if (multipleChoice) multipleChoice.style.display = 'none';
  } else if (question.type === 'multiple_choice') {
    if (likertScale) likertScale.style.display = 'none';
    if (multipleChoice) {
      multipleChoice.style.display = 'block';
      
      // Populate multiple choice options
      multipleChoice.innerHTML = '';
      question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'multiple-choice-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => selectMultipleChoice(optionDiv, index + 1);
        multipleChoice.appendChild(optionDiv);
      });
    }
  }
  
  // Update navigation buttons
  updateNavigationButtons();
  
  // Add event listeners for likert scale
  document.querySelectorAll('input[name="current-question"]').forEach(input => {
    input.addEventListener('change', updateNavigationButtons);
  });
}

function selectMultipleChoice(element, value) {
  // Remove previous selections
  document.querySelectorAll('.multiple-choice-option').forEach(option => {
    option.classList.remove('selected');
  });
  
  // Select current option
  element.classList.add('selected');
  element.dataset.value = value;
  
  updateNavigationButtons();
}

function updateNavigationButtons() {
  const prevBtn = document.querySelector('.question-navigation .btn--outline');
  const nextBtn = document.querySelector('.question-navigation .btn--primary');
  
  if (!prevBtn || !nextBtn) return;
  
  // Enable/disable previous button
  prevBtn.disabled = getCurrentQuestionIndex() === 0;
  
  // Check if question is answered
  const questionIndex = getCurrentQuestionIndex();
  const question = allQuestions[questionIndex];
  let isAnswered = false;
  
  if (question.type === 'likert7') {
    isAnswered = document.querySelector('input[name="current-question"]:checked') !== null;
  } else if (question.type === 'multiple_choice') {
    isAnswered = document.querySelector('.multiple-choice-option.selected') !== null;
  }
  
  nextBtn.disabled = !isAnswered;
  
  // Update next button text
  const isLastQuestion = getCurrentQuestionIndex() === allQuestions.length - 1;
  if (isLastQuestion && appState.currentPartner === 'A') {
    nextBtn.innerHTML = '<i class="fas fa-check"></i> Complete Partner A';
  } else if (isLastQuestion && appState.currentPartner === 'B') {
    nextBtn.innerHTML = '<i class="fas fa-chart-bar"></i> View Results';
  } else {
    nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
  }
}

function previousQuestion() {
  if (getCurrentQuestionIndex() > 0) {
    if (appState.currentQuestionIndex > 0) {
      appState.currentQuestionIndex--;
    } else if (appState.currentFrameworkIndex > 0) {
      appState.currentFrameworkIndex--;
      appState.currentQuestionIndex = 3; // Last question in previous framework
    }
    showAssessmentQuestion();
  }
}

function nextQuestion() {
  // Save current answer
  saveCurrentAnswer();
  
  const isLastQuestion = getCurrentQuestionIndex() === allQuestions.length - 1;
  
  if (isLastQuestion) {
    if (appState.currentPartner === 'A') {
      showSection('transition');
    } else {
      calculateAndShowResults();
    }
  } else {
    // Move to next question
    if (appState.currentQuestionIndex < 3) {
      appState.currentQuestionIndex++;
    } else {
      appState.currentFrameworkIndex++;
      appState.currentQuestionIndex = 0;
    }
    showAssessmentQuestion();
  }
}

function saveCurrentAnswer() {
  const questionIndex = getCurrentQuestionIndex();
  const question = allQuestions[questionIndex];
  let value = null;
  
  if (question.type === 'likert7') {
    const checked = document.querySelector('input[name="current-question"]:checked');
    if (checked) {
      value = parseInt(checked.value);
    }
  } else if (question.type === 'multiple_choice') {
    const selected = document.querySelector('.multiple-choice-option.selected');
    if (selected) {
      value = parseInt(selected.dataset.value);
    }
  }
  
  if (value !== null) {
    const partnerKey = `partner${appState.currentPartner}`;
    appState.responses[partnerKey][question.id] = value;
    console.log('Saved answer:', question.id, value);
  }
}

// Results Calculation
function calculateAndShowResults() {
  const results = calculateSynergyScore();
  appState.results = results;
  
  displayResults();
  showSection('results');
}

function calculateSynergyScore() {
  let frameworkScores = [];
  let totalWeightedScore = 0;
  let totalWeight = 0;
  
  frameworksData.frameworks.forEach(framework => {
    let frameworkTotal = 0;
    let questionCount = 0;
    
    framework.questions.forEach(question => {
      const partnerAResponse = appState.responses.partnerA[question.id] || 0;
      const partnerBResponse = appState.responses.partnerB[question.id] || 0;
      
      // Apply reverse scoring if needed
      let scoreA = question.reverse_scored ? 8 - partnerAResponse : partnerAResponse;
      let scoreB = question.reverse_scored ? 8 - partnerBResponse : partnerBResponse;
      
      // For multiple choice, normalize to 7-point scale
      if (question.type === 'multiple_choice') {
        scoreA = (scoreA / 5) * 7;
        scoreB = (scoreB / 5) * 7;
      }
      
      // Calculate compatibility (how close the scores are) and average score
      const compatibility = 1 - Math.abs(scoreA - scoreB) / 7;
      const averageScore = (scoreA + scoreB) / 2;
      
      // Combine compatibility and average score (weighted toward average)
      const combinedScore = (averageScore * 0.7) + (compatibility * 7 * 0.3);
      
      frameworkTotal += combinedScore;
      questionCount++;
    });
    
    const frameworkAverage = frameworkTotal / questionCount;
    const frameworkScore = (frameworkAverage / 7) * 100; // Convert to percentage
    
    frameworkScores.push({
      name: framework.name,
      score: Math.round(frameworkScore),
      weight: framework.weight
    });
    
    totalWeightedScore += frameworkScore * framework.weight;
    totalWeight += framework.weight;
  });
  
  const overallScore = Math.round(totalWeightedScore / totalWeight);
  
  // Determine synergy level
  let synergyLevel = frameworksData.scoring.synergy_ranges.find(range => 
    overallScore >= range.min && overallScore <= range.max
  );
  
  // Get recommendations
  let recommendations = [];
  if (overallScore >= 70) {
    recommendations = frameworksData.scoring.recommendations.high_synergy;
  } else if (overallScore >= 55) {
    recommendations = frameworksData.scoring.recommendations.moderate_synergy;
  } else {
    recommendations = frameworksData.scoring.recommendations.low_synergy;
  }
  
  return {
    overallScore,
    synergyLevel,
    frameworkScores,
    recommendations,
    strengths: getStrengths(frameworkScores),
    growthAreas: getGrowthAreas(frameworkScores)
  };
}

function getStrengths(frameworkScores) {
  return frameworkScores
    .filter(score => score.score >= 75)
    .map(score => `Strong ${score.name.toLowerCase()} with excellent compatibility`)
    .slice(0, 3);
}

function getGrowthAreas(frameworkScores) {
  return frameworkScores
    .filter(score => score.score < 70)
    .map(score => `Focus on improving ${score.name.toLowerCase()} through intentional practice`)
    .slice(0, 3);
}

function displayResults() {
  const results = appState.results;
  
  // Update score display
  const scoreNumberEl = document.querySelector('.score-number');
  const synergyLevelEl = document.querySelector('.synergy-level');
  const synergyDescEl = document.querySelector('.synergy-description');
  
  if (scoreNumberEl) scoreNumberEl.textContent = results.overallScore;
  if (synergyLevelEl) {
    synergyLevelEl.textContent = results.synergyLevel.label;
    synergyLevelEl.style.color = results.synergyLevel.color;
  }
  if (synergyDescEl) synergyDescEl.textContent = results.synergyLevel.description;
  
  // Update component scores
  const componentScoresContainer = document.querySelector('.component-scores');
  if (componentScoresContainer) {
    componentScoresContainer.innerHTML = '';
    
    results.frameworkScores.forEach(framework => {
      const scoreDiv = document.createElement('div');
      scoreDiv.className = 'component-score';
      scoreDiv.innerHTML = `
        <span class="component-name">${framework.name}</span>
        <div class="component-bar">
          <div class="component-bar-fill" style="width: ${framework.score}%"></div>
        </div>
        <span class="component-value">${framework.score}</span>
      `;
      componentScoresContainer.appendChild(scoreDiv);
    });
  }
  
  // Update strengths
  const strengthsList = document.querySelector('.strength-list');
  if (strengthsList) {
    strengthsList.innerHTML = '';
    results.strengths.forEach(strength => {
      const li = document.createElement('li');
      li.textContent = strength;
      strengthsList.appendChild(li);
    });
  }
  
  // Update growth areas
  const growthList = document.querySelector('.growth-list');
  if (growthList) {
    growthList.innerHTML = '';
    results.growthAreas.forEach(area => {
      const li = document.createElement('li');
      li.textContent = area;
      growthList.appendChild(li);
    });
  }
  
  // Update recommendations
  const recommendationsContainer = document.querySelector('.recommendations');
  if (recommendationsContainer) {
    recommendationsContainer.innerHTML = '';
    results.recommendations.forEach(recommendation => {
      const recDiv = document.createElement('div');
      recDiv.className = 'recommendation';
      recDiv.textContent = recommendation;
      recommendationsContainer.appendChild(recDiv);
    });
  }
  
  // Create radar chart
  setTimeout(createRadarChart, 100); // Small delay to ensure DOM is ready
}

function createRadarChart() {
  const ctx = document.getElementById('radarChart');
  if (!ctx) return;
  
  const canvasCtx = ctx.getContext('2d');
  const results = appState.results;
  
  // Destroy existing chart if it exists
  if (window.radarChartInstance) {
    window.radarChartInstance.destroy();
  }
  
  window.radarChartInstance = new Chart(canvasCtx, {
    type: 'radar',
    data: {
      labels: results.frameworkScores.map(f => f.name.replace(' ', '\n')),
      datasets: [{
        label: 'Synergy Scores',
        data: results.frameworkScores.map(f => f.score),
        fill: true,
        backgroundColor: 'rgba(33, 128, 141, 0.2)',
        borderColor: 'rgba(33, 128, 141, 1)',
        pointBackgroundColor: 'rgba(33, 128, 141, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(33, 128, 141, 1)'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function restartAssessment() {
  appState = {
    currentSection: 'landing',
    currentPartner: null,
    currentFrameworkIndex: 0,
    currentQuestionIndex: 0,
    responses: {
      partnerA: {},
      partnerB: {}
    },
    results: null
  };
  
  showSection('landing');
}

// Global functions to ensure they're available
window.startAssessment = startAssessment;
window.selectPartner = selectPartner;
window.startPartnerB = startPartnerB;
window.previousQuestion = previousQuestion;
window.nextQuestion = nextQuestion;
window.restartAssessment = restartAssessment;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  showSection('landing');
  
  // Add keyboard navigation support
  document.addEventListener('keydown', function(e) {
    if (appState.currentSection === 'assessment') {
      if (e.key === 'ArrowLeft') {
        previousQuestion();
      } else if (e.key === 'ArrowRight') {
        const nextBtn = document.querySelector('.question-navigation .btn--primary');
        if (nextBtn && !nextBtn.disabled) {
          nextQuestion();
        }
      }
    }
  });
});