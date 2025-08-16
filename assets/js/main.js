// Interactive background with Three.js
let scene,
  camera,
  renderer,
  particles,
  mouse = { x: 0, y: 0 };

// Page content data
const pages = {
  home: `
        <section class="hero">
            <div class="interactive-bg" id="interactive-bg"></div>
            <div class="hero-content">
                <h1>Daffa Ramadhan</h1>
                <p class="subtitle">Junior Backend Web Developer</p>
                <a href="#" class="cta-button" data-page="projects">Explore My Work</a>
            </div>
        </section>
    `,
  technologies: `
        <section class="section">
            <h2 class="section-title">Technologies & Skills</h2>
            <div class="grid grid-4">
                <div class="card tech-item">
                    <i class="fab fa-css3-alt"></i>
                    <h3>CSS3</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-js-square"></i>
                    <h3>JavaScript</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-golang"></i>
                    <h3>Golang</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-php"></i>
                    <h3>PHP</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-laravel"></i>
                    <h3>Laravel</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-bootstrap"></i>
                    <h3>Bootstrap</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-python"></i>
                    <h3>Python</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-docker"></i>
                    <h3>Docker</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-figma"></i>
                    <h3>Figma</h3>
                </div>
                <div class="card tech-item">
                    <i class="fab fa-git-alt"></i>
                    <h3>Git</h3>
                </div>
                <div class="card tech-item">
                    <i class="fas fa-database"></i>
                    <h3>MySQL</h3>
                </div>
                <div class="card tech-item">
                    <i class="fas fa-database"></i>
                    <h3>PostgreSQL</h3>
                </div>
            </div>
        </section>
    `,
  experience: `
        <section class="section">
            <h2 class="section-title">Professional Experience</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <h3>Internal Internship Program</h3>
                    <div class="company">SMK Assalaam • June 2025 - July 2025</div>
                    <p>Participated in an internal internship program focused on deepening web development knowledge. I worked on several hands-on projects using Laravel and APIs, and also explored mobile development using Flutter. This experience significantly improved my problem-solving abilities, team collaboration, and technical execution.</p>
                </div>
                <div class="timeline-item">
                    <h3>Industrial Class Trainee</h3>
                    <div class="company">PT Dwi Purwa Tech • April 2025 - May 2025</div>
                    <p>Attended a two-month industrial class organized by PT Dwi Purwa Tech. During the program, I learned full-stack web development using React.js and Express for the frontend and backend. I also gained experience in building RESTful APIs using Laravel, learning to work in a real-world programming environment.</p>
                </div>
                <div class="timeline-item">
                    <h3>Honda Safety Riding Ambassador</h3>
                    <div class="company">SMK Assalaam • October 2023 - March 2025</div>
                    <p>Served as a Honda Safety Riding (HSR) Ambassador, promoting road safety and responsible riding among students. I was actively involved in giving public presentations and educating peers, which improved my communication skills and deepened my understanding of safe transportation practices.</p>
                </div>
                <div class="timeline-item">
                    <h3>Marketing Team Member</h3>
                    <div class="company">SMK Assalaam • August 2023 - March 2025</div>
                    <p>As a student member of the marketing team, I contributed to various school marketing and promotional campaigns. This role taught me key skills in public speaking, confidence building, creative thinking, and teamwork. I actively participated in outreach activities and learned how to effectively engage different audiences.</p>
                </div>
            </div>
        </section>
    `,
  projects: `
        <section class="section">
            <h2 class="section-title">Featured Projects</h2>
            <div class="grid grid-2">
                <div class="project-card">
                    <div class="project-image">
                        <img src="/assets/img/project/invas.png" alt="INVAS Project" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="project-content">
                        <h3>INVAS: Inventaris SMK Assalaam</h3>
                        <p>A school inventory management system to monitor, track, and manage goods using Laravel and MySQL efficiently.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Laravel</span>
                            <span class="tech-tag">Bootstrap</span>
                            <span class="tech-tag">MySQL</span>
                            <span class="tech-tag">SCSS</span>
                            <span class="tech-tag">JS</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/dapCodes/gudangku" class="project-link" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <img src="/assets/img/project/floryne.png" alt="Floryne Project" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="project-content">
                        <h3>Floryne</h3>
                        <p>Floryne is a dynamic web platform to manage and showcase flower-related products and business services online.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">PHP</span>
                            <span class="tech-tag">Bootstrap</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/DapCodes/Floryne-PHP-Native" class="project-link" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <img src="/assets/img/project/kensho.png" alt="Kensho Project" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="project-content">
                        <h3>Kensho</h3>
                        <p>Kensho is a Computer-Based Test platform for schools to manage exams, questions, and student scores efficiently.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Laravel</span>
                            <span class="tech-tag">Bootstrap</span>
                            <span class="tech-tag">JavaScript</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/DapCodes/Kensho-Learning" class="project-link" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <img src="/assets/img/project/e-cmrc.png" alt="E-Commerce Project" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="project-content">
                        <h3>E-Commerce Website</h3>
                        <p>Full-featured online store application for selling products with admin dashboard, cart, and checkout functionalities.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">Laravel</span>
                            <span class="tech-tag">Bootstrap</span>
                            <span class="tech-tag">MySQL</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/DapCodes/Laravel-Fundamental" class="project-link" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <img src="/assets/img/project/matrix.png" alt="Matrix Multiplication Project" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="project-content">
                        <h3>Matrix Multiplication</h3>
                        <p>Interactive tool to perform matrix multiplication directly in the browser using clean HTML, CSS, and JS.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">CSS</span>
                            <span class="tech-tag">JS</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/DapCodes/Matrix-Multiplication" class="project-link" target="_blank">Source Code</a>
                            <a href="https://dc-matrixmultiplication.netlify.app" class="project-link" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-image">
                        <img src="/assets/img/project/artsy.png" alt="Artsy Fartsy" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="project-content">
                        <h3>Artsy Fartsy</h3>
                        <p>Just a simple drawing app using clean HTML, CSS, and JS.</p>
                        <div class="tech-stack">
                            <span class="tech-tag">HTML</span>
                            <span class="tech-tag">CSS</span>
                            <span class="tech-tag">JS</span>
                        </div>
                        <div class="project-links">
                            <a href="https://github.com/DapCodes/Artsy-Fartsy" class="project-link" target="_blank">Source Code</a>
                            <a href="https://artsy-fartsy.vercel.app/" class="project-link" target="_blank">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
  certificates: `
        <section class="section">
            <h2 class="section-title">My Certifications</h2>
            <div class="grid grid-3">
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/1.png" alt="Introduction to Generative AI Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Introduction to Generative AI</h3>
                        <div class="certificate-issuer">Ruang AI x Codepolitan</div>
                        <div class="certificate-date">Issued: June 2025</div>
                        <p>Focused on the fundamentals of Generative AI, this course introduces key concepts, real-world applications, and hands-on AI tool usage.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/7.png" alt="Web Development With AI Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Web Development With AI</h3>
                        <div class="certificate-issuer">Bandung AI Camp x Sanbercode</div>
                        <div class="certificate-date">Issued: December 2024</div>
                        <p>A 90-hour intensive training covering fullstack web development using JavaScript and frameworks, integrated with modern AI tools and APIs.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/6.png" alt="Code Generation and Optimization Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Code Generation and Optimization Using IBM Granite</h3>
                        <div class="certificate-issuer">Hacktive8 x IBM</div>
                        <div class="certificate-date">Issued: July 2025</div>
                        <p>Advanced training on leveraging IBM Granite to automate code generation, enhance performance, and apply AI in modern software development.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/5.png" alt="Fullstack Web Programming Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Fullstack Web Programming from Scratch</h3>
                        <div class="certificate-issuer">Eduwork</div>
                        <div class="certificate-date">Issued: June 2025</div>
                        <p>Comprehensive program starting from zero, covering frontend and backend development using HTML, CSS, JavaScript, Node.js, and React.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/2.jpg" alt="Backend Developer Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Backend Developer (Express, MySQL, Supabase)</h3>
                        <div class="certificate-issuer">Nextskill</div>
                        <div class="certificate-date">Issued: June 2025</div>
                        <p>Backend-focused certification covering API development with Express.js, relational database management with MySQL, and Supabase integration.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/8.png" alt="Using Generative AI for Software Development Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Using Generative AI for Software Development</h3>
                        <div class="certificate-issuer">Hacktive8 x IBM</div>
                        <div class="certificate-date">Issued: July 2025</div>
                        <p>Specialized certification from IBM on applying Generative AI to accelerate software development, including code automation and best practices.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/9.jpg" alt="Linux & Docker Fundamental Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Linux & Docker Fundamental</h3>
                        <div class="certificate-issuer">Nextskill</div>
                        <div class="certificate-date">Issued: June 2025</div>
                        <p>Fundamental certification covering Linux system administration and Docker containerization technologies for modern development workflows.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/10.png" alt="Vue JS Fundamental Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Belajar Vue JS Fundamental</h3>
                        <div class="certificate-issuer">Nextskill</div>
                        <div class="certificate-date">Issued: June 2025</div>
                        <p>Frontend framework certification focusing on Vue.js fundamentals, component architecture, and modern JavaScript development practices.</p>
                    </div>
                </div>
                <div class="certificate-card">
                    <div class="certificate-image">
                        <img src="/assets/img/11.png" alt="UI/UX Certificate" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="certificate-content">
                        <h3>Kenalan Seru dengan UI/UX untuk Website</h3>
                        <div class="certificate-issuer">Nextskill</div>
                        <div class="certificate-date">Issued: June 2025</div>
                        <p>UI/UX design certification covering user interface design principles, user experience research, and modern design tools like Figma.</p>
                    </div>
                </div>
            </div>
        </section>
    `,
  connect: `
        <section class="section">
            <h2 class="section-title">Let's Connect</h2>
            <div class="grid grid-2">
                <a href="https://www.instagram.com/d4pfft/" class="social-card" target="_blank">
                    <i class="fab fa-instagram"></i>
                    <h3>Instagram</h3>
                    <p>Follow my creative journey and behind-the-scenes content</p>
                </a>
                <a href="https://www.linkedin.com/in/daffa-ramadhan-3b2239335/" class="social-card" target="_blank">
                    <i class="fab fa-linkedin"></i>
                    <h3>LinkedIn</h3>
                    <p>Professional networking and career updates</p>
                </a>
                <a href="https://github.com/DapCodes/" class="social-card" target="_blank">
                    <i class="fab fa-github"></i>
                    <h3>GitHub</h3>
                    <p>Explore my open source projects and contributions</p>
                </a>
                <a href="mailto:daffaramadhan929@gmail.com" class="social-card">
                    <i class="fas fa-envelope"></i>
                    <h3>Email</h3>
                    <p>Let's discuss your next project together</p>
                </a>
            </div>
        </section>
    `,
};

// Initialize Three.js Interactive Background
function initInteractiveBackground() {
  const container = document.getElementById("interactive-bg");

  if (!container) return;

  // Clear existing content
  container.innerHTML = "";

  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Create particles
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    colors[i * 3] = 0.2 + Math.random() * 0.3; // R
    colors[i * 3 + 1] = 0.4 + Math.random() * 0.3; // G
    colors[i * 3 + 2] = 0.6 + Math.random() * 0.4; // B
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
  });

  particles = new THREE.Points(geometry, material);
  scene.add(particles);

  camera.position.z = 5;

  // Start animation
  animate();
}

// Mouse movement handler
function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  if (particles) {
    // Rotate particles based on mouse position
    particles.rotation.x += (mouse.y * 0.05 - particles.rotation.x) * 0.05;
    particles.rotation.y += (mouse.x * 0.05 - particles.rotation.y) * 0.05;

    // Add gentle floating animation
    particles.rotation.z += 0.001;

    // Update particle positions for floating effect
    const positions = particles.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(Date.now() * 0.001 + positions[i]) * 0.001;
    }
    particles.geometry.attributes.position.needsUpdate = true;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

// Handle window resize
function onWindowResize() {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

// Page transition and loading logic
function loadPage(pageName) {
  const transition = document.querySelector(".page-transition");
  const pageContent = document.getElementById("page-content");
  const navLinks = document.querySelectorAll(".nav-link");

  // Remove active class from all nav links
  navLinks.forEach((link) => link.classList.remove("active"));

  // Add active class to clicked nav link
  const activeLink = document.querySelector(`[data-page="${pageName}"]`);
  if (activeLink) {
    activeLink.classList.add("active");
  }

  // Close mobile menu if open
  closeMobileMenu();

  // Start transition
  transition.classList.add("active");

  // Hide current content
  pageContent.classList.remove("active");

  setTimeout(() => {
    // Change content
    if (pages[pageName]) {
      pageContent.innerHTML = pages[pageName];
    }

    // Initialize interactive background for home page
    if (pageName === "home") {
      setTimeout(() => {
        initInteractiveBackground();
      }, 100);
    }

    // Show new content
    pageContent.classList.add("active");

    // Scroll to top
    scrollToTop();

    // Hide transition after content loads
    setTimeout(() => {
      transition.classList.remove("active");
    }, 300);
  }, 600);
}

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");

  mobileMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  mobileOverlay.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (navMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.getElementById("nav-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");

  mobileMenu.classList.remove("active");
  navMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");

  if (mobileMenu) {
    mobileMenu.addEventListener("click", toggleMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener("click", closeMobileMenu);
  }

  // Navigation link clicks
  document.addEventListener("click", function (e) {
    // Handle navigation links
    if (e.target.closest("[data-page]")) {
      e.preventDefault();
      const pageName = e.target
        .closest("[data-page]")
        .getAttribute("data-page");
      loadPage(pageName);
    }

    // Close mobile menu when clicking outside
    if (
      !e.target.closest(".navbar") &&
      document.getElementById("nav-menu").classList.contains("active")
    ) {
      closeMobileMenu();
    }
  });

  // Mouse movement for interactive background
  document.addEventListener("mousemove", onMouseMove);

  // Window resize handler
  window.addEventListener("resize", onWindowResize);

  // Navbar scroll effect
  window.addEventListener("scroll", handleNavbarScroll);

  // ESC key to close mobile menu
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      document.getElementById("nav-menu").classList.contains("active")
    ) {
      closeMobileMenu();
    }
  });

  // Initialize interactive background on page load
  setTimeout(() => {
    initInteractiveBackground();
  }, 100);
});
