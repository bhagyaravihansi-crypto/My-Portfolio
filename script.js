/**
 * ============================================================================
 * M.A. Rawihansi Bhagya - Personal Portfolio Script
 * Pure Vanilla JavaScript (ES6+) - Zero External Dependencies
 * ============================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. Theme Switcher (Dark / Light Mode) with LocalStorage Persistence
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('rb-portfolio-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial theme setup
  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('rb-portfolio-theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} Mode`);
    });
  }

  /* --------------------------------------------------------------------------
     2. Project Dataset for Interactive Modal Showcase
     -------------------------------------------------------------------------- */
  const projectData = {
    aquasweep: {
      category: 'IoT & Robotics / Environmental Tech',
      title: 'AquaSweep',
      subtitle: 'IoT-Based Smart Salvinia Detection, Monitoring and Removal Robot',
      description: 'AquaSweep is an innovative environmental robotics solution engineered to detect, monitor, and remove invasive Salvinia aquatic weeds. Built utilizing IoT architecture, ESP32 microcontrollers, AI-assisted detection, and robotic harvesting mechanisms, the robot automates water surface navigation and weed collection to safeguard irrigation canals and water bodies.',
      highlights: [
        'AI & Sensory Detection: Detection mechanisms identifying Salvinia weed clusters on the water surface.',
        'ESP32 & IoT Microcontroller Core: Real-time telemetry, wireless command reception, and sensor processing.',
        'Robotic Harvesting Mechanism: Integrated mechanical collection system designed to extract floating weeds.',
        'Remote Control & Telemetry: Operators can monitor cleanup operations and maneuver the robot safely from shore.',
        'Eco-Friendly Waterway Maintenance: Provides a sustainable alternative to chemical sprays and manual labor.'
      ],
      techStack: ['IoT', 'ESP32', 'AI', 'Robotics'],
      role: 'IoT architecture, ESP32 programming, sensor calibration & robotic hardware integration',
      image: 'assets/aquasweep_image.jpeg',
      video: 'assets/aquasweep_video.mp4'
    },

    nwsdb: {
      category: 'Web & Desktop Application / Enterprise Management',
      title: 'NWSDB Management System',
      subtitle: 'Web and Desktop Water Board Management System',
      description: 'A comprehensive web and desktop water board management system developed as an academic project for the National Water Supply and Drainage Board (NWSDB). Developed utilizing C#, .NET, and SQL database management, the solution provides an administrative desktop application alongside a web portal to streamline consumer records, water billing, complaint workflows, and departmental operations.',
      highlights: [
        'Dual Web & Desktop Architecture: Combines a robust C# .NET desktop client for office administrative tasks with a responsive web portal.',
        'Consumer & Account Management: Centralized database for consumer profiles, meter readings, and connection details.',
        'Billing & Tariff Processing: Structured recordkeeping for automated water billing calculations and payment status tracking.',
        'Complaint & Maintenance Tracking: Systematic logging and monitoring for pipeline leaks, breakdowns, and service requests.',
        'Relational Database Architecture: Designed with SQL for data integrity, secure access, and fast query execution.'
      ],
      techStack: ['C#', '.NET', 'SQL', 'Database Management', 'Desktop Application', 'Web Application'],
      role: 'C#/.NET desktop & web development, database architecture & UI design',
      screenshots: [
        {
          src: 'assets/nwsdb/01_web_home.jpg',
          title: 'NWSDB Customer Portal – Home (Web)',
          type: 'web',
          caption: 'Online bill payment landing page featuring instant account lookup and portal navigation.'
        },
        {
          src: 'assets/nwsdb/02_web_login.png',
          title: 'Customer Login Interface (Web)',
          type: 'web',
          caption: 'Secure customer authentication interface with credential verification and recovery.'
        },
        {
          src: 'assets/nwsdb/03_web_onetime_payment.png',
          title: 'One-Time Bill Payment (Web)',
          type: 'web',
          caption: 'Fast guest checkout allowing consumers to settle water bills without signing in.'
        },
        {
          src: 'assets/nwsdb/04_web_register.png',
          title: 'Customer Registration Form (Web)',
          type: 'web',
          caption: 'Comprehensive onboarding form with NIC, account number, address, and password creation.'
        },
        {
          src: 'assets/nwsdb/05_web_dashboard.png',
          title: 'Personalized Customer Dashboard (Web)',
          type: 'web',
          caption: 'User dashboard showing current billing status, water usage (m³), and recent payment logs.'
        },
        {
          src: 'assets/nwsdb/06_web_current_bill.png',
          title: 'Current Bill & Usage Details (Web)',
          type: 'web',
          caption: 'Itemized billing summary, previous vs current meter readings, and due dates.'
        },
        {
          src: 'assets/nwsdb/07_web_payment_details.png',
          title: 'Online Payment Checkout (Web)',
          type: 'web',
          caption: 'Encrypted credit/debit card payment gateway with billing summary review.'
        },
        {
          src: 'assets/nwsdb/08_desktop_login.png',
          title: 'NWSDB Staff Login (Desktop App)',
          type: 'desktop',
          caption: 'Administrative desktop login window built with C# .NET for water board management.'
        },
        {
          src: 'assets/nwsdb/09_desktop_dashboard.jpg',
          title: 'Customer Portal Dashboard (Desktop App)',
          type: 'desktop',
          caption: 'Desktop operational view displaying customer status, active bills, and payment records.'
        },
        {
          src: 'assets/nwsdb/10_desktop_payment.png',
          title: 'Online Payment Module (Desktop App)',
          type: 'desktop',
          caption: 'Desktop payment processing module with real-time balance lookup and verification.'
        },
        {
          src: 'assets/nwsdb/11_desktop_payment_management.jpg',
          title: 'Payment Management Database (Desktop App)',
          type: 'desktop',
          caption: 'Tabular payment records with search, filter, and real-time transaction auditing.'
        }
      ]
    },

    printxpress: {
      category: 'Android Mobile Application',
      title: 'PrintXpress',
      subtitle: 'Android Mobile Printing & Custom Design Application',
      description: 'PrintXpress is a native Android mobile application developed as an academic project to deliver on-demand printing solutions and document queue management for university students and professionals. Built with Java/XML in Android Studio, it features catalog browsing, custom design requests, artwork uploads, shopping cart checkout, and real-time order tracking.',
      highlights: [
        'Interactive Product Catalog: Browse business cards, flyers, posters, banners, stickers, t-shirts, and mugs.',
        'Custom Design Brief Submission: Upload artwork directly from mobile storage and request custom designs with quotes.',
        'Seamless Shopping Cart & Checkout: Supports home delivery or store pickup with instant order confirmation.',
        'Live Print Queue Tracking: Track order statuses (Pending, Ready, Cancelled) and manage past orders.',
        'User Profile & Preferences: Dedicated user account area managing saved addresses, order history, and design guidelines.'
      ],
      techStack: ['Android Studio', 'Java / XML', 'Mobile Development', 'UI/UX Design'],
      role: 'Android mobile app development, UI/UX implementation & event handling',
      screenshots: [
        {
          src: 'assets/printxpress/01_splash_screen.png',
          title: 'PrintXpress Startup Splash Screen',
          type: 'catalog',
          caption: 'Branded startup splash screen with animated loading indicator.'
        },
        {
          src: 'assets/printxpress/02_home_categories.jpg',
          title: 'Home Screen & Product Categories',
          type: 'catalog',
          caption: 'Category grid presenting Business Cards, Flyers, Posters, Banners, Stickers, T-Shirts, and Mugs.'
        },
        {
          src: 'assets/printxpress/03_business_cards_listing.jpg',
          title: 'Category Catalog (Business Cards)',
          type: 'catalog',
          caption: 'Product options including Premium, Glossy, Textured, Minimalist, and Gold Foil cards with pricing.'
        },
        {
          src: 'assets/printxpress/04_request_custom_design.jpg',
          title: 'Request Custom Design Form',
          type: 'catalog',
          caption: 'Form to specify design type, provide detailed requirements, and upload custom artwork.'
        },
        {
          src: 'assets/printxpress/05_product_details_upload.jpg',
          title: 'Product Details & Artwork Upload',
          type: 'catalog',
          caption: 'A4 Color Flyer configuration with quantity selector, custom text, and local file attachment.'
        },
        {
          src: 'assets/printxpress/06_shopping_cart.png',
          title: 'Shopping Cart',
          type: 'orders',
          caption: 'Cart view showing itemized selected products, prices, quantities, and proceed to checkout button.'
        },
        {
          src: 'assets/printxpress/07_checkout_delivery.png',
          title: 'Checkout & Delivery Method',
          type: 'orders',
          caption: 'Delivery method selection (Home Delivery vs. Store Pickup) and address details.'
        },
        {
          src: 'assets/printxpress/08_order_confirmed.jpg',
          title: 'Order Confirmation Feedback',
          type: 'orders',
          caption: 'Instant on-screen feedback confirming successful print order placement.'
        },
        {
          src: 'assets/printxpress/09_my_orders_tracking.png',
          title: 'My Orders & Real-Time Tracking',
          type: 'orders',
          caption: 'Order tracking screen displaying order history, pending statuses, and rescheduling options.'
        },
        {
          src: 'assets/printxpress/10_user_profile.jpg',
          title: 'User Profile & Settings',
          type: 'orders',
          caption: 'User account management screen with order history, delivery addresses, and design guidelines.'
        }
      ]
    },

    travel: {
      category: 'Web Development / Client Portal',
      title: 'GlobeTrek Adventures',
      subtitle: 'Responsive Travel Agency & Vacation Booking Platform',
      liveUrl: 'https://bhagyaravihansi-crypto.github.io/WebProject/',
      image: 'assets/globtrek_banner.jpg',
      description: 'GlobeTrek Adventures is an interactive, responsive travel agency website designed to present destination itineraries, international tour packages (Paris, Dubai, Tokyo, Swiss Alps), and smooth vacation booking inquiries. Fully published and hosted on GitHub Pages for live viewing.',
      highlights: [
        'Live Deployment: Hosted live on GitHub Pages with fast global performance.',
        'Curated Travel Showcases: Structured package presentations highlighting itineraries, destinations, and activities.',
        'Responsive Web Design: Mobile-first responsive layout adapting across smartphones, tablets, and desktops.',
        'Booking Inquiry System: Simple interactive client-side booking inquiries for interested travelers.'
      ],
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages', 'Responsive Design'],
      role: 'Complete frontend development, responsive design & GitHub Pages live deployment'
    }
  };

  /* --------------------------------------------------------------------------
     3. Header Scroll Effect & Navigation Handling
     -------------------------------------------------------------------------- */
  const header = document.getElementById('header');
  const navMenu = document.getElementById('nav-menu');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTop');

  // Sticky header background and back-to-top visibility
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Header styling on scroll
    if (scrollPos > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollPos > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Active Navigation Link on Scroll
    highlightActiveNavLink(scrollPos);
  }, { passive: true });

  // Function to highlight active navigation link based on scroll position
  function highlightActiveNavLink(scrollPos) {
    const scrollOffset = scrollPos + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollOffset >= sectionTop && scrollOffset < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // Mobile Hamburger Toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');
      toggleMobileMenu(!isOpen);
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMobileMenu(false);
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('open') &&
          !navMenu.contains(e.target) &&
          !hamburgerBtn.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });

    // Reset menu on resize to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    });
  }

  function toggleMobileMenu(open) {
    if (open) {
      navMenu.classList.add('open');
      hamburgerBtn.classList.add('active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
    } else {
      navMenu.classList.remove('open');
      hamburgerBtn.classList.remove('active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    }
  }

  // Smooth scroll back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. Project Category Filter
     -------------------------------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active filter button
      filterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const filterValue = button.getAttribute('data-filter');

      // Filter cards
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     5. Interactive Project Details Modal
     -------------------------------------------------------------------------- */
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContent = document.getElementById('modalContent');
  const modalOpenButtons = document.querySelectorAll('.open-modal-btn');
  const footerProjectLinks = document.querySelectorAll('.footer-project-link');

  function openProjectModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // Render modal content
    const techStackPills = data.techStack
      .map(tech => `<span class="tech-pill">${tech}</span>`)
      .join('');

    const highlightsList = data.highlights
      .map(item => `<li><span class="feature-bullet">&#10003;</span> <span>${item}</span></li>`)
      .join('');

    // Generate media gallery (image and video or multi-screenshot gallery)
    let mediaHTML = '';
    if (data.screenshots && data.screenshots.length > 0) {
      const allScreens = data.screenshots;
      let tabsHTML = `<button class="gallery-tab-btn active" data-type="all">All Screens (${allScreens.length})</button>`;

      const hasWeb = allScreens.some(s => s.type === 'web');
      const hasDesktop = allScreens.some(s => s.type === 'desktop');
      const hasCatalog = allScreens.some(s => s.type === 'catalog');
      const hasOrders = allScreens.some(s => s.type === 'orders');

      if (hasWeb && hasDesktop) {
        const webCount = allScreens.filter(s => s.type === 'web').length;
        const desktopCount = allScreens.filter(s => s.type === 'desktop').length;
        tabsHTML += `
          <button class="gallery-tab-btn" data-type="web">Web Portal (${webCount})</button>
          <button class="gallery-tab-btn" data-type="desktop">Desktop Application (${desktopCount})</button>
        `;
      } else if (hasCatalog && hasOrders) {
        const catCount = allScreens.filter(s => s.type === 'catalog').length;
        const ordCount = allScreens.filter(s => s.type === 'orders').length;
        tabsHTML += `
          <button class="gallery-tab-btn" data-type="catalog">Catalog &amp; Design (${catCount})</button>
          <button class="gallery-tab-btn" data-type="orders">Cart &amp; Orders Flow (${ordCount})</button>
        `;
      }

      mediaHTML = `
        <div class="modal-gallery-container">
          <div class="gallery-tabs" id="galleryTabs">
            ${tabsHTML}
          </div>

          <div class="gallery-main-view">
            <div class="gallery-main-img-wrap">
              <button class="gallery-nav-arrow prev" id="galleryPrevBtn" aria-label="Previous screenshot">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              <img src="${allScreens[0].src}" alt="${allScreens[0].title}" class="gallery-main-img" id="galleryMainImg">
              <button class="gallery-nav-arrow next" id="galleryNextBtn" aria-label="Next screenshot">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
            <div class="gallery-caption-bar">
              <div>
                <span class="gallery-caption-title" id="galleryCaptionTitle">${allScreens[0].title}</span>
                <p class="gallery-caption-sub" id="galleryCaptionSub">${allScreens[0].caption}</p>
              </div>
              <span class="gallery-counter-badge" id="galleryCounterBadge">1 / ${allScreens.length}</span>
            </div>
          </div>

          <div class="gallery-thumbs-strip" id="galleryThumbsStrip">
            ${allScreens.map((s, idx) => `
              <div class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" data-index="${idx}" data-type="${s.type}" title="${s.title}">
                <img src="${s.src}" alt="${s.title}" loading="lazy">
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (data.image || data.video) {
      mediaHTML = `<div class="modal-media-section">`;
      if (data.image) {
        mediaHTML += `
          <div class="modal-media-box">
            <div class="modal-media-header" style="justify-content: space-between;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                <span>${data.liveUrl ? 'Live Website Interface Preview' : 'Project Prototype Photograph'}</span>
              </div>
              ${data.liveUrl ? `
                <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.8rem; color: var(--blue-primary); font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
                  <span>Open Live Site</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              ` : ''}
            </div>
            <img src="${data.image}" alt="${data.title}" class="modal-project-img" loading="lazy">
            <p class="media-caption">${data.liveUrl ? 'Hosted live on GitHub Pages: <a href="' + data.liveUrl + '" target="_blank" rel="noopener noreferrer" style="color: var(--blue-primary); font-weight: 600;">' + data.liveUrl + '</a>' : 'Physical hardware assembly &amp; environmental testing of the robot'}</p>
          </div>
        `;
      }
      if (data.video) {
        mediaHTML += `
          <div class="modal-media-box">
            <div class="modal-media-header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              <span>AquaSweep Demonstration Video</span>
            </div>
            <video controls preload="metadata" ${data.image ? `poster="${data.image}"` : ''} class="modal-project-video">
              <source src="${data.video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <p class="media-caption">Live demonstration video of the AquaSweep robot in operation</p>
          </div>
        `;
      }
      mediaHTML += `</div>`;
    }

    modalContent.innerHTML = `
      <span class="modal-category-tag">${data.category}</span>
      <h2 class="modal-title" id="modalTitle">${data.title}</h2>
      <p class="modal-subtitle">${data.subtitle}</p>

      ${mediaHTML}

      <p class="modal-desc" style="color: var(--text-body); line-height: 1.7; margin-bottom: 1.25rem;">
        ${data.description}
      </p>

      <h3 class="modal-section-title">Key Innovations &amp; Features:</h3>
      <ul class="modal-features-list">
        ${highlightsList}
      </ul>

      <h3 class="modal-section-title">Technologies &amp; Tools Used:</h3>
      <div class="project-tech-stack">
        ${techStackPills}
      </div>

      <div style="margin-top: 1.25rem; font-size: 0.9rem; color: var(--text-muted); background: var(--bg-alt); padding: 0.75rem 1rem; border-radius: var(--radius-sm); border-left: 3px solid var(--blue-primary);">
        <strong>Role / Contribution:</strong> ${data.role}
      </div>

      <div class="modal-actions">
        ${data.liveUrl ? `
          <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" id="modalLiveBtn">
            <span>Launch Live Website</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ` : ''}
        <a href="#contact" class="btn btn-secondary btn-sm" id="modalContactBtn">
          <span>Inquire About Project</span>
        </a>
        <button class="btn btn-outline btn-sm" id="modalCloseActionBtn">
          <span>Close Preview</span>
        </button>
      </div>
    `;

    // Modal action bindings
    document.getElementById('modalCloseActionBtn').addEventListener('click', closeModal);
    document.getElementById('modalContactBtn').addEventListener('click', () => {
      closeModal();
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });

    // Bind screenshot gallery controls if present (e.g. NWSDB)
    if (data.screenshots && data.screenshots.length > 0) {
      let currentIndex = 0;
      const mainImg = document.getElementById('galleryMainImg');
      const captionTitle = document.getElementById('galleryCaptionTitle');
      const captionSub = document.getElementById('galleryCaptionSub');
      const counterBadge = document.getElementById('galleryCounterBadge');
      const thumbs = modalContent.querySelectorAll('.gallery-thumb-item');
      const tabBtns = modalContent.querySelectorAll('.gallery-tab-btn');
      const prevBtn = document.getElementById('galleryPrevBtn');
      const nextBtn = document.getElementById('galleryNextBtn');

      function updateActiveScreen(index) {
        if (index < 0) index = data.screenshots.length - 1;
        if (index >= data.screenshots.length) index = 0;
        currentIndex = index;

        const screen = data.screenshots[currentIndex];
        if (mainImg) {
          mainImg.style.opacity = '0.35';
          setTimeout(() => {
            mainImg.src = screen.src;
            mainImg.alt = screen.title;
            if (captionTitle) captionTitle.textContent = screen.title;
            if (captionSub) captionSub.textContent = screen.caption;
            if (counterBadge) counterBadge.textContent = `${currentIndex + 1} / ${data.screenshots.length}`;
            mainImg.style.opacity = '1';
          }, 90);
        }

        thumbs.forEach((th, i) => {
          if (i === currentIndex) {
            th.classList.add('active');
            th.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            th.classList.remove('active');
          }
        });
      }

      thumbs.forEach(th => {
        th.addEventListener('click', () => {
          const idx = parseInt(th.getAttribute('data-index'), 10);
          updateActiveScreen(idx);
        });
      });

      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateActiveScreen(currentIndex - 1);
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateActiveScreen(currentIndex + 1);
        });
      }

      tabBtns.forEach(tab => {
        tab.addEventListener('click', (e) => {
          e.stopPropagation();
          tabBtns.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const type = tab.getAttribute('data-type');

          let firstMatchingIndex = -1;
          thumbs.forEach((th, i) => {
            const thType = th.getAttribute('data-type');
            if (type === 'all' || thType === type) {
              th.style.display = 'block';
              if (firstMatchingIndex === -1) firstMatchingIndex = i;
            } else {
              th.style.display = 'none';
            }
          });

          if (firstMatchingIndex !== -1) {
            updateActiveScreen(firstMatchingIndex);
          }
        });
      });
    }

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!projectModal) return;
    // Pause any playing videos
    const videos = modalContent.querySelectorAll('video');
    videos.forEach(v => {
      v.pause();
    });
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Trigger modal from card buttons
  modalOpenButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Trigger modal from footer links
  footerProjectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = link.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Close modal via button or backdrop click
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeModal();
    }
  });

  /* --------------------------------------------------------------------------
     6. Contact Form Validation & Realistic Submission (Mailto Integration)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const submitBtn = document.getElementById('submitBtn');
  const formFeedback = document.getElementById('formFeedback');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const subjectError = document.getElementById('subjectError');
  const messageError = document.getElementById('messageError');

  // Clear errors on typing
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        const errField = document.getElementById(`${input.name}Error`);
        if (errField) errField.textContent = '';
        if (formFeedback) {
          formFeedback.style.display = 'none';
          formFeedback.className = 'form-feedback';
        }
      });
    }
  });

  // Email validation regex helper
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Reset errors
      [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
        if (field) field.classList.remove('is-invalid');
      });
      if (nameError) nameError.textContent = '';
      if (emailError) emailError.textContent = '';
      if (subjectError) subjectError.textContent = '';
      if (messageError) messageError.textContent = '';

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        if (nameError) nameError.textContent = 'Please enter your name.';
        isValid = false;
      } else if (nameInput.value.trim().length < 2) {
        nameInput.classList.add('is-invalid');
        if (nameError) nameError.textContent = 'Name must be at least 2 characters long.';
        isValid = false;
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        emailInput.classList.add('is-invalid');
        if (emailError) emailError.textContent = 'Please enter your email address.';
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        if (emailError) emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('is-invalid');
        if (subjectError) subjectError.textContent = 'Please provide a subject.';
        isValid = false;
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('is-invalid');
        if (messageError) messageError.textContent = 'Please write your message.';
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        if (messageError) messageError.textContent = 'Message should be at least 10 characters long.';
        isValid = false;
      }

      if (!isValid) {
        return;
      }

      const senderName = nameInput.value.trim();
      const senderEmail = emailInput.value.trim();
      const mailSubject = subjectInput.value.trim();
      const mailMessage = messageInput.value.trim();

      // Button loading indicator
      const originalBtnHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Opening Email...</span>`;

      // Compose mailto link to bhagyaravihansi@gmail.com
      const mailBody = `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${mailMessage}`;
      const mailtoUrl = `mailto:bhagyaravihansi@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHTML;

        // Open user's default email client
        window.location.href = mailtoUrl;

        // Display transparent status feedback
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <strong>Thank you, ${senderName}!</strong> Your message has been prepared for sending to <strong>bhagyaravihansi@gmail.com</strong>.
            If your email application did not launch automatically, feel free to write directly or connect via WhatsApp at <strong>0706052127</strong>.
          `;
          formFeedback.style.display = 'block';
        }

        showToast('Email client opened. You can also connect directly via WhatsApp!');
        contactForm.reset();
      }, 700);
    });
  }

  /* --------------------------------------------------------------------------
     7. Copy Email to Clipboard Feature
     -------------------------------------------------------------------------- */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const emailContactLink = document.getElementById('emailContactLink');

  if (copyEmailBtn && emailContactLink) {
    copyEmailBtn.addEventListener('click', () => {
      const email = emailContactLink.textContent.trim();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast('Email address copied to clipboard!');
        }).catch(() => {
          fallbackCopyText(email);
        });
      } else {
        fallbackCopyText(email);
      }
    });
  }

  function fallbackCopyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast('Email address copied to clipboard!');
    } catch (err) {
      showToast('Could not copy email automatically.');
    }
    document.body.removeChild(tempInput);
  }

  /* --------------------------------------------------------------------------
     8. Download CV Button Handling
     -------------------------------------------------------------------------- */
  const downloadCvBtn = document.getElementById('downloadCvBtn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
      if (typeof showToast === 'function') {
        showToast('Downloading CV (M_A_Rawihansi_Bhagya_CV.pdf)...');
      }
    });
  }

  /* --------------------------------------------------------------------------
     9. Toast Notification Utility
     -------------------------------------------------------------------------- */
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  /* --------------------------------------------------------------------------
     10. Dynamic Copyright Year
     -------------------------------------------------------------------------- */
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

});
