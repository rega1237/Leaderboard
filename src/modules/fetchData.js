const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dPyx6XkHjoa2mkIpboa6/scores/';

const displayScore = (data) => {
  const listContainer = document.querySelector('.scores');
  listContainer.innerHTML = null;
  data.forEach((score) => {
    const listScore = document.createElement('li');
    listScore.className = 'score';
    listScore.innerHTML = `${score.user} : ${score.score}`;
    listContainer.append(listScore);
  });
};

const getData = async () => {
  const data = await fetch(url);
  return data.json();
};

export const showScores = async () => {
  const dataScores = await getData();
  displayScore(dataScores.result);
};

export const addScores = async (user, score) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
