const c = 'click';

const input = document.querySelector('.form input');
const add = document.querySelector('.form button');
const ol = document.querySelector('.list ol');

function addTask() {
  if (input.value === '') {
    alert('Please insert task first !');
    return false;
  }

  const li = document.createElement('li');
  li.textContent = input.value;
  ol.appendChild(li);

  const clear = document.createElement('p');
  clear.textContent = 'c';
  const del = document.createElement('b');
  del.textContent = 'x';

  li.appendChild(clear);
  li.appendChild(del);

  clear.addEventListener(c, () => {
    if (clear.parentElement.style.textDecoration === 'line-through') {
      clear.parentElement.style.textDecoration = 'none';
      clear.parentElement.style.color = 'rgba(0,0,0,1)';
      clear.parentElement.style.fontStyle = 'normal';
    } else {
      clear.parentElement.style.textDecoration = 'line-through';
      clear.parentElement.style.fontStyle = 'italic';
      clear.parentElement.style.color = 'red';
    }
  });

  del.addEventListener(c, () => {
    del.parentElement.remove();
    console.log('removed!');
  });

  console.log('Task added!');
  input.value = '';
  const result = document.querySelector('.result');
  result.textContent = '';
}

input.addEventListener('input', () => {
  const result = document.querySelector('.result');
  result.textContent = `Characters : ${input.value.length} / 45`;
  if (input.value.length <= 45) {
    result.style.color = 'black';
  }
  if (input.value.length >= 45) {
    result.textContent = 'Maximum character reached !';
    result.style.color = 'red';
  }
});

const sidebar = document.querySelector('#container .sidebar');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('#container .sidebar ul .close');

hamburger.addEventListener(c, () => {
  sidebar.classList.toggle('active');
  if (sidebar.classList.contains('active')) {
    window.addEventListener(c, (e) => {
      if (e.target.classList.contains('universe')) {
        sidebar.classList.remove('active');
      }
    });
  }
});

close.addEventListener(c, () => {
  sidebar.classList.toggle('active');
});
