function toggleContent(id) {
    var tabLinks = document.querySelectorAll('.tab-links');
    var contentSections = document.querySelectorAll('.about-content-section');

    contentSections.forEach(function(section) {
        if (section.id === id) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    tabLinks.forEach(function(link) {
        if (link.dataset.id === id) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered animations
window.addEventListener('scroll', function() {
    var headerText = document.querySelector('.header-text');
    var positionFromTop = headerText.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight < -100) {
        headerText.classList.add('show-text');
    } else {
        headerText.classList.remove('show-text');
    }

    var aboutContent = document.getElementById('about-content');
    var positionFromTopAbout = aboutContent.getBoundingClientRect().top;

    if (positionFromTopAbout - window.innerHeight < -100) {
        aboutContent.classList.add('slide-in');
    } else {
        aboutContent.classList.remove('slide-in');
    }
});
function toggleContent(id) {
    var tabLinks = document.querySelectorAll('.tab-links');
    var contentSections = document.querySelectorAll('.about-content-section');

    contentSections.forEach(function(section) {
        if (section.id === id) {
            if (section.style.display === 'block') {
                section.style.display = 'none';
                section.classList.remove('active'); // Optional: If you want to remove 'active' class
            } else {
                section.style.display = 'block';
                section.classList.add('active'); // Optional: If you want to add 'active' class
            }
        } else {
            section.style.display = 'none';
            section.classList.remove('active'); // Optional: If you want to remove 'active' class from other sections
        }
    });

    tabLinks.forEach(function(link) {
        if (link.dataset.id === id) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}
// Scroll-triggered animations for portfolio items
window.addEventListener('scroll', function() {
    var portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(function(item) {
        var positionFromTop = item.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight < -100) {
            item.classList.add('show-item');
        }
    });
});
// JavaScript
window.addEventListener('scroll', function() {
    var contactSection = document.getElementById('contact');
    var positionFromTop = contactSection.getBoundingClientRect().top;

    // Adjust the threshold as needed for when you want the animation to trigger
    if (positionFromTop - window.innerHeight < -100) {
        var formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(function(group, index) {
            setTimeout(function() {
                group.classList.add('animate');
            }, index * 200); // Delay each form group animation
        });
    } else {
        var formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach(function(group) {
            group.classList.remove('animate');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const projectDetails = document.getElementById('project-details');
    const projectDetailsTitle = document.getElementById('project-details-title');
    const projectDetailsContent = document.getElementById('project-details-content');
    const closeDetailsBtn = document.getElementById('close-details-btn');

    projects.forEach(project => {
        const viewDetailsBtn = project.querySelector('.view-details-btn');
        const projectId = project.getAttribute('data-project-id');

        viewDetailsBtn.addEventListener('click', function() {
            // Populate detailed view with project details based on project ID
            if (projectId === '1') {
                projectDetailsTitle.textContent = "Autonomous Defense System";
                projectDetailsContent.innerHTML = `
                    <p>Developed an autonomous defense system with ESP-NOW for communication, ESP32-CAM for real-time video, YOLOv5 for object detection, and joysticks and servo motors for manual control and targeting. Ensured seamless integration and optimized the system for low latency, conducting extensive testing for reliable threat detection and response using ESP-NOW, ESP32-CAM, YOLOv5, Machine Learning.</p>
                    <div class="image-grid">
                        <img src="/images/abc.png" alt="Image 1" style="width: 200px; height: auto;">
                        <img src="/images/application.png" alt="Image 2" style="width: 200px; height: auto;">
                        <img src="/images/def.png" alt="Image 3" style="width: 200px; height: auto;">
                        <img src="/images/svm.jpg" alt="Image 4" style="width: 200px; height: auto;">
                    </div>
                `;
            } else if (projectId === '2') {
                projectDetailsTitle.textContent = "Intruder Detection System";
                projectDetailsContent.innerHTML = `
                    <p>Developed an intruder detection system using YOLOv8 for object detection and implemented an alert system that sends notifications via Twilio upon detecting intruders.</p>
                    <div class="image-grid">
                        <img src="/images/person.png" alt="Intruder Detection Image 1" style="width: 200px; height: auto;">
                        <img src="/images/intruder.jpg" alt="Intruder Detection Image 2" style="width: 200px; height: auto;">
                        <img src="/images/intrudersystem.png" alt="Intruder Detection Image 3" style="width: 200px; height: auto;">
                        <img src="/images/yolo.png" alt="Intruder Detection Image 4" style="width: 200px; height: auto;">
                    </div>
                `;
            }

            // Show detailed view
            projectDetails.style.display = 'block';
        });
    });

    // Close detailed view
    closeDetailsBtn.addEventListener('click', function() {
        projectDetails.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Close the dropdown menu if the user clicks outside of it
        window.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('show');
            }
        });
    }
});
// JavaScript for dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
    var navMenu = document.querySelector('nav ul');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });

        // Close the dropdown menu if the user clicks outside of it
        window.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && e.target !== navToggle) {
                navMenu.classList.remove('show');
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    const overlay = document.querySelector('.overlay');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    });

    overlay.addEventListener('click', function() {
        navMenu.classList.remove('open');
        overlay.style.display = 'none';
    });

    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('open');
            overlay.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && e.target !== navToggle) {
            navMenu.classList.remove('show');
        }
    });
});


