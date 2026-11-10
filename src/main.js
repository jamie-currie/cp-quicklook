import '@google/model-viewer';

const viewer = document.querySelector('model-viewer');
const hint = document.querySelector('.hint');
const spinner = document.querySelector('.spinner');

viewer.addEventListener('load', () => {
  spinner.hidden = true;
  document.body.classList.toggle('has-ar', viewer.canActivateAR);
  if (!viewer.canActivateAR) hint.textContent = 'Drag to turn it round, scroll to zoom. Open on a phone to see it in AR.';
});

viewer.addEventListener('error', () => {
  spinner.hidden = true;
  hint.textContent = 'The model failed to load.';
});
