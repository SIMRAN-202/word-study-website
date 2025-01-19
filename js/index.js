const wordsData = [
    {
      word: 'Abundance',
      pronunciation: '/əˈbʌndəns/',
      meaning: 'A large quantity of something.',
      synonyms: 'plenty, wealth, prosperity',
      antonyms: 'lack, scarcity'
    },
    {
      word: 'Serendipity',
      pronunciation: '/ˌsɛrənˈdɪpɪti/',
      meaning: 'The occurrence of events by chance in a happy or beneficial way.',
      synonyms: 'coincidence, fluke',
      antonyms: 'misfortune'
    },
    {
      word: 'Ephemeral',
      pronunciation: '/ɪˈfɛmərəl/',
      meaning: 'Lasting for a very short time.',
      synonyms: 'momentary, fleeting, short-lived',
      antonyms: 'permanent, enduring'
    }
  ];
  
  // Function to dynamically update the content
  function updateWordContent(index) {
    const wordContent = wordsData[index];
  
    document.querySelector('.word-text').textContent = wordContent.word;
    document.querySelector('.pronunciation-text').textContent = wordContent.pronunciation;
    document.querySelector('.meaning-text').textContent = wordContent.meaning;
    document.querySelector('#synonyms-text').textContent = wordContent.synonyms;
    document.querySelector('#antonyms-text').textContent = wordContent.antonyms;
  }
  
  // Initially display the first word
  updateWordContent(0);
  
  // Example navigation through words
  let currentWordIndex = 0;
  document.getElementById('next-word').addEventListener('click', () => {
    currentWordIndex = (currentWordIndex + 1) % wordsData.length;
    updateWordContent(currentWordIndex);
  });

  







  // Function to start recording
function startRecording() {
    console.log("Recording started...");

    // Simulate recording
    setTimeout(() => {
        console.log("Recording stopped.");
    }, 5000); // Recording stops after 5 seconds
}

// Function to play audio
function playAudio() {
    let audio = new Audio('../images/audio.mp3'); // Path to your audio file

    if (audio && !audio.paused) {
        audio.pause();
        audio = null; // Clear the audio object
    } else {
        audio = new Audio('../images/audio.mp3');
        audio.play();
    }
}

// Function to repeat audio
function repeatAudio() {
    const audio = new Audio('../images/audio.mp3'); // Path to your audio file
    audio.play();
}

// Function to adjust speed
function adjustSpeed(speed) {
    const audio = new Audio('../images/audio.mp3'); // Path to your audio file
    switch(speed) {
        case 'slow':
            audio.playbackRate = 0.5;
            break;
        case 'normal':
            audio.playbackRate = 1.0;
            break;
        case 'fast':
            audio.playbackRate = 1.5;
            break;
    }
    audio.play();
}

// Function to show feedback
document.querySelector('.show-feedback').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Showing feedback...');
});
