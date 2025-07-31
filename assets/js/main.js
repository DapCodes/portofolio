//js untuk GSAP, dan lain lain
        // Initialize AOS with enhanced settings
        AOS.init({
            duration: 1200,
            once: true,
            offset: 120,
            easing: 'ease-out-cubic'
        });

        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger);

        // Enhanced Hero animations
        const heroTimeline = gsap.timeline();
        heroTimeline
            .from('.hero-title', {
                duration: 1.5,
                y: 120,
                opacity: 0,
                ease: 'power4.out'
            })
            .from('.subtitle', {
                duration: 1.2,
                y: 60,
                opacity: 0,
                ease: 'power3.out'
            }, '-=1')
            .from('.cta-button', {
                duration: 1,
                y: 40,
                scale: 0.8,
                ease: 'back.out(1.7)'
            }, '-=0.5');

        // Enhanced mobile menu functionality
        const mobileMenu = document.getElementById('mobile-menu');
        const navMenu = document.getElementById('nav-menu');

        mobileMenu.addEventListener('click', () => {
            const isActive = navMenu.classList.contains('active');
            
            if (isActive) {
                gsap.to(navMenu, {
                    duration: 0.3,
                    opacity: 0,
                    y: -20,
                    ease: 'power2.in',
                    onComplete: () => {
                        navMenu.classList.remove('active');
                    }
                });
            } else {
                navMenu.classList.add('active');
                gsap.fromTo(navMenu, 
                    { opacity: 0, y: -20 },
                    { duration: 0.3, opacity: 1, y: 0, ease: 'power2.out' }
                );
            }

            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Enhanced smooth scrolling with GSAP
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 90;
                    
                    gsap.to(window, {
                        duration: 1.2,
                        scrollTo: {
                            y: target.offsetTop - offset,
                            autoKill: false
                        },
                        ease: 'power3.inOut'
                    });

                    // Close mobile menu
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        const icon = mobileMenu.querySelector('i');
                        icon.classList.add('fa-bars');
                        icon.classList.remove('fa-times');
                    }
                }
            });
        });

        // Enhanced navbar scroll effects
        let lastScrollY = 0;
        let ticking = false;

        function updateNavbar() {
            const scrollY = window.pageYOffset;
            
            if (scrollY > lastScrollY && scrollY > 100) {
                // Scrolling down
                gsap.to('.navbar', {
                    duration: 0.4,
                    y: -100,
                    ease: 'power2.out'
                });
            } else {
                // Scrolling up
                gsap.to('.navbar', {
                    duration: 0.4,
                    y: 0,
                    ease: 'power2.out'
                });
            }
            
            lastScrollY = scrollY;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateNavbar);
                ticking = true;
            }
        });

        // Enhanced parallax effect for hero
        gsap.to('.hero', {
            yPercent: -50,
            ease: 'none',
            scrollTrigger: {
                trigger: '.hero',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        // Section reveal animations
        gsap.utils.toArray('.section').forEach(section => {
            gsap.fromTo(section, 
                { 
                    opacity: 0.8,
                    y: 50 
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Enhanced tech items stagger animation
        gsap.fromTo('.tech-item', 
            {
                opacity: 0,
                y: 60,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.7)',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.tech-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Timeline items reveal
        gsap.fromTo('.timeline-item', 
            {
                opacity: 0,
                x: -100
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.timeline',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Project cards animation
        gsap.fromTo('.project-card', 
            {
                opacity: 0,
                y: 80,
                rotationY: 15
            },
            {
                opacity: 1,
                y: 0,
                rotationY: 0,
                duration: 1.2,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Certificate cards animation
        gsap.fromTo('.certificate-card', 
            {
                opacity: 0,
                scale: 0.8,
                y: 60
            },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1,
                ease: 'back.out(1.7)',
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '.certificates-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Social cards animation
        gsap.fromTo('.social-card', 
            {
                opacity: 0,
                y: 60,
                rotationX: 15
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.connect-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Enhanced hover effects
        document.querySelectorAll('.tech-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                gsap.to(item, {
                    duration: 0.4,
                    scale: 1.08,
                    rotationY: 5,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(item, {
                    duration: 0.4,
                    scale: 1,
                    rotationY: 0,
                    ease: 'power2.out'
                });
            });
        });

        // Enhanced project card hover
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.4,
                    scale: 1.03,
                    rotationY: 3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.4,
                    scale: 1,
                    rotationY: 0,
                    ease: 'power2.out'
                });
            });
        });

        // Certificate card hover effects
        document.querySelectorAll('.certificate-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.4,
                    scale: 1.05,
                    rotationX: 2,
                    ease: 'power2.out'
                });
                
                gsap.to(card.querySelector('.certificate-icon'), {
                    duration: 0.6,
                    rotation: 360,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.4,
                    scale: 1,
                    rotationX: 0,
                    ease: 'power2.out'
                });
            });
        });

        // Social card enhanced hover
        document.querySelectorAll('.social-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    duration: 0.4,
                    scale: 1.06,
                    rotationZ: 2,
                    ease: 'power2.out'
                });
                
                gsap.to(card.querySelector('i'), {
                    duration: 0.5,
                    rotation: 15,
                    scale: 1.2,
                    ease: 'elastic.out(1, 0.3)'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.4,
                    scale: 1,
                    rotationZ: 0,
                    ease: 'power2.out'
                });
                
                gsap.to(card.querySelector('i'), {
                    duration: 0.4,
                    rotation: 0,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        });

        // CTA button enhanced effects
        const ctaButton = document.querySelector('.cta-button');
        ctaButton.addEventListener('mouseenter', () => {
            gsap.to(ctaButton, {
                duration: 0.4,
                scale: 1.08,
                rotationX: 5,
                ease: 'power2.out'
            });
        });

        ctaButton.addEventListener('mouseleave', () => {
            gsap.to(ctaButton, {
                duration: 0.4,
                scale: 1,
                rotationX: 0,
                ease: 'power2.out'
            });
        });

        // Enhanced typing effect for subtitle
        const subtitle = document.querySelector('.subtitle');
        const text = subtitle.textContent;
        subtitle.textContent = '';

        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 60);
                }
            };
            typeWriter();
        }, 2000);

        // Add cursor blink effect
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.animation = 'blink 1s infinite';
        cursor.style.marginLeft = '3px';
        subtitle.appendChild(cursor);

        // Add blink animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // Performance optimization
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        });

        // Preload critical animations
        gsap.set(['.tech-item', '.timeline-item', '.project-card', '.certificate-card', '.social-card'], {
            opacity: 0
        });