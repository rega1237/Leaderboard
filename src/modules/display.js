import data from './data.js';

const displayScore = () => {
  const listContainer = document.querySelector('.scores');
  data.allScores.forEach((score) => {
    const listScore = document.createElement('li');
    listScore.className = 'score';
    listScore.innerHTML = `Name: ${score}`;
    listContainer.append(listScore);
  });
};

export default displayScore;