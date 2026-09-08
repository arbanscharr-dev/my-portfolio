window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  
  // Apply a smooth fade out transition
  preloader.style.opacity = "0";
  
  // Remove the div completely from the DOM after fading out
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); 
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollTopButton = document.getElementById('scroll-top');

  if (scrollTopButton) {
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTopButton.classList.add('active');
      } else {
        scrollTopButton.classList.remove('active');
      }
    };

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);

    scrollTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const filterListItems = document.querySelectorAll('#portfolio-flters li');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterListItems.forEach(filterBtn => {
    filterBtn.addEventListener('click', function() {
      // 1. Manage Active Class Styles on Buttons
      filterListItems.forEach(li => li.classList.remove('filter-active'));
      this.classList.add('filter-active');

      // 2. Select Filter Target
      const targetFilter = this.getAttribute('data-filter');

      // 3. Toggle visibility with a clean fade interaction
      portfolioItems.forEach(item => {
        if (targetFilter === '*' || item.classList.contains(targetFilter.substring(1))) {
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; }, 10);
        } else {
          item.style.opacity = '0';
          setTimeout(() => { item.style.display = 'none'; }, 200);
        }
      });
    });
  });
});

