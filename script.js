const filterButtons = document.querySelectorAll('.filter');
const certificateGroups = document.querySelectorAll('.certificate-group');
const themeToggle = document.getElementById('themeToggle');

function applyCategoryFilter(category) {
  filterButtons.forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  certificateGroups.forEach(group => {
    const show = category === 'all' || group.dataset.group === category;
    group.classList.toggle('hidden', !show);
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => applyCategoryFilter(button.dataset.filter));
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => link.addEventListener('click', () => {
  navLinks.forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    themeToggle.textContent = dark ? '☾' : '☼';
    themeToggle.setAttribute('aria-pressed', String(dark));
  });
}


// Download the local resume as a file instead of opening the PDF viewer.
const resumeDownloads = document.querySelectorAll('a[download][href="assets/Nathaniel_Garcia_Resume.pdf"]');
resumeDownloads.forEach(link => {
  link.addEventListener('click', async event => {
    event.preventDefault();
    try {
      const response = await fetch(link.href);
      if (!response.ok) throw new Error('Resume file could not be fetched');
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = objectUrl;
      downloadLink.download = 'Nathaniel_Garcia_Resume.pdf';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      downloadLink.remove();
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      // Keep a direct download fallback if browser fetch restrictions apply.
      window.location.href = link.href;
    }
  });
});


// Show certificate images in an overlay on the current page.
const certificateModal = document.getElementById('certificateModal');
const certificateModalImage = document.getElementById('certificateModalImage');
const certificateModalClose = document.getElementById('certificateModalClose');

function openCertificatePreview(imageUrl, altText) {
  if (!certificateModal || !certificateModalImage) return;
  certificateModalImage.src = imageUrl;
  certificateModalImage.alt = altText || 'Certificate preview';
  certificateModal.classList.add('is-open');
  certificateModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('certificate-modal-open');
  if (certificateModalClose) certificateModalClose.focus();
}

function closeCertificatePreview() {
  if (!certificateModal || !certificateModalImage) return;
  certificateModal.classList.remove('is-open');
  certificateModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('certificate-modal-open');
  certificateModalImage.src = '';
}

document.querySelectorAll('.certificate-image-preview').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const image = link.querySelector('img');
    openCertificatePreview(link.href, image ? image.alt : 'Certificate preview');
  });
});

document.querySelectorAll('.view-certificate-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.grouped-certificate-card');
    const image = card ? card.querySelector('.certificate-image-preview img') : null;
    if (image) openCertificatePreview(image.src, image.alt);
  });
});

if (certificateModalClose) certificateModalClose.addEventListener('click', closeCertificatePreview);
if (certificateModal) {
  certificateModal.addEventListener('click', event => {
    if (event.target === certificateModal) closeCertificatePreview();
  });
}
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && certificateModal && certificateModal.classList.contains('is-open')) {
    closeCertificatePreview();
  }
});
