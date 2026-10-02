// Jana Ahmed Farahat Portfolio JavaScript (Streamlined Edition)

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});

// Select Freelance Service & Scroll to Contact Form
function selectService(serviceName) {
  const serviceSelect = document.getElementById('serviceSelect');
  if (serviceSelect) {
    serviceSelect.value = serviceName;
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
  showToast(`Selected "${serviceName}". Pre-filled in form.`);
}

// 1-Click Copy Email
function copyEmail() {
  const email = "janaahmedf18@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    showToast("Email (janaahmedf18@gmail.com) copied!");
  }).catch(() => {
    showToast("Email: janaahmedf18@gmail.com");
  });
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
  }
}

// Form Submission Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('userName').value;
  const email = document.getElementById('userEmail').value;
  const service = document.getElementById('serviceSelect').value;
  const message = document.getElementById('projectMessage').value;

  const submitBtn = document.getElementById('submitBtn');
  const toast = document.getElementById('formSuccessToast');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="animate-spin mr-2">◌</span> Sending...`;
  }

  setTimeout(() => {
    if (toast) toast.classList.remove('hidden');
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i><span>Ready in Email</span>`;
      if (window.lucide) window.lucide.createIcons();
    }

    const mailtoSubject = encodeURIComponent(`[Inquiry] ${service} - From ${name}`);
    const mailtoBody = encodeURIComponent(`Hi Jana,

Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`);
    
    window.location.href = `mailto:janaahmedf18@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  }, 600);
}
