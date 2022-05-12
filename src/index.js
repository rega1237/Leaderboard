import './styles.css';
import { showScores, addScores } from './modules/fetchData.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', showScores);

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  await addScores(name.value, score.value);
  showScores();
  e.target.parentElement.reset();
});
