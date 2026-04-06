const navItems = document.querySelectorAll('.categorys');
const sections = document.querySelectorAll('.category-section');

navItems.forEach(item => {
  item.addEventListener('click', function() {
    navItems.forEach(p => p.classList.remove('active'));
    this.classList.add('active');

    // Step 2: Manage the Content
    sections.forEach(section => section.classList.remove('active'));
    
    // Step 3: Find the target ID and show it
    const targetId = this.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});