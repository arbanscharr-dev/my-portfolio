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

function sendToWhatsApp(event) {
  // 1. Prevent the form from refreshing the browser page
  event.preventDefault();

  // 2. Define the target phone number (Arba Tech international layout)
  const phoneNumber = "+256709462590"; 

  // 3. Extract the text inputs from the form fields using your exact IDs
  const name = document.getElementById("username").value;
  const email = document.getElementById("useremail").value;

  // 4. Construct your message structure using your exact message ID
  const messageText = document.getElementById("usermessage").value;

  // 4b. Format a clean, human-readable notification layout for your inbox
  const formattedText = `New Project Inquiry - Arba Tech\n\n` +
                        `Name: ${name}\n` +
                        `Email: ${email}\n` +
                        `Message: \n${messageText}`;

  // 5. CRITICAL STEP: Encode the text into a clean URL-safe format
  const encodedMessage = encodeURIComponent(formattedText);

  // 6. Build the corrected WhatsApp API link using the correct query parameter format
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  // 7. Open the link in a safe new tab
  window.open(whatsappUrl, '_blank');
}
