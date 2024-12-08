let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Physical Fitness', 'Weight Gain', 'Strength Training', 'Fat Lose', 'Weightlifting', 'Running'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
 });
 document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleBtn = item.querySelector('.toggle-btn');
  
    question.addEventListener('click', () => {
      const isVisible = answer.style.display === 'block';
      answer.style.display = isVisible ? 'none' : 'block';
      toggleBtn.textContent = isVisible ? '+' : '-';
    });
  });
  document.getElementById('profile-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const goal = document.getElementById('goal').value;
    
    // Display profile
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-age').textContent = age;
    document.getElementById('display-goal').textContent = goal;
    
    // Show the profile display and hide the form
    document.getElementById('profile-display').classList.remove('hidden');
    document.getElementById('profile-form').classList.add('hidden');
  });
    