import './styles.css';
import { showScores, addScores } from './modules/fetchData.js';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

refresh.addEventListener('click', showScores);

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');

  if (name.value === '') {
    name.placeholder = 'please insert a name';
    name.style.backgroundColor = '#ffff8f';
    name.style.border = 'solid 1px #ff7777';
  } else if (score.value === '') {
    score.placeholder = 'please insert a score';
    score.style.backgroundColor = '#ffff8f';
    score.style.border = 'solid 1px #ff7777';
  } else {
    await addScores(name.value, score.value);
    showScores();
    e.target.parentElement.reset();
  }
});
