document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#FF6B6B';
      } else {
        field.style.borderColor = 'rgba(106, 90, 205, 0.2)';
      }
    });

    if (isValid) {
      const confirmationModal = document.getElementById('registrationConfirmation');
      confirmationModal.classList.add('show');
    }
  });

  function closeConfirmation() {
    const confirmationModal = document.getElementById('registrationConfirmation');
    confirmationModal.classList.remove('show');
    document.getElementById('registrationForm').reset();
  }