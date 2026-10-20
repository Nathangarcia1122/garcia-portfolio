# Nathaniel Garcia — E-Certificate Portfolio

A static HTML/CSS/JavaScript portfolio for presenting 18 e-certificates.

## Certificate order
1. DICT — 2
2. Cisco — 2
3. Microsoft — 4
4. Northeastern College — 4
5. TESDA — 5
6. Other / DOST Rizal — 1

All PDF certificates from the original version were converted to JPG images so they display as thumbnails like the other certificates.

## Add your profile photo
1. Prepare a square JPG or PNG photo.
2. Rename it to `profile.jpg`.
3. Put it inside the `assets` folder.
4. In `index.html`, change `assets/profile-placeholder.svg` to `assets/profile.jpg`.

## GitHub + Vercel
Upload the entire project folder, including `certificates` and `assets`, to GitHub. Then import the repository into Vercel and deploy it as a static site.


## Professional portfolio sections
- Personal introduction and education
- Technical skills
- Academic projects
- Professional development activities and all 18 certificate images
- Public-safe downloadable resume PDF (phone number and full street address omitted)
- GitHub, live-site, and email links

Profile photo: `assets/nathaniel-profile.jpg`
Resume: `assets/Nathaniel_Garcia_Resume.pdf`


Design update: simplified navigation and certificate cards sorted by completion date (newest first).

Certificate display order: DICT, Cisco, Microsoft, Northeastern College, TESDA, then Other. Certificates within each organization are sorted by completion date, newest first. The certificate layout is responsive for mobile screens.


Resume actions: **View Resume** opens the PDF in a new browser tab; **Download Resume** downloads the PDF file. Both point to `assets/Nathaniel_Garcia_Resume.pdf`.


Header design update: compact NG brand mark, spacious navigation links, one prominent resume action, and a horizontally scrollable navigation row on narrow mobile screens.


Header simplification: one Resume link in the header, no duplicate View Resume action in the hero, and a cleaner navigation layout with responsive spacing.


Certificate cards now include an “Open original PDF” link. Uploaded PDF certificates are used where provided; image-only certificates are also available as PDFs generated from the supplied certificate images.
