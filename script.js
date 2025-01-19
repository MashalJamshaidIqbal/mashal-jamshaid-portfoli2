// Sample project data
const projects = [
    {
        title: "Project 1",
        description: "A web application built using HTML, CSS, and JavaScript",
        image: "https://source.unsplash.com/500x300/?coding",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#"
    },
    {
        title: "Project 2",
        description: "Database management system using MySQL",
        image: "https://source.unsplash.com/500x300/?database",
        technologies: ["MySQL", "PHP"],
        link: "#"
    },
    {
        title: "Project 3",
        description: "Mobile application development project",
        image: "https://source.unsplash.com/500x300/?mobile",
        technologies: ["Java", "Android Studio"],
        link: "#"
    }
];

// Display projects
function displayProjects() {
    const projectsList = document.getElementById('projectsList');
    
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'col-md-4';
        projectElement.innerHTML = `
            <div class="card project-card">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="technologies mb-3">
                        ${project.technologies.map(tech => `<span class="badge bg-primary me-1">${tech}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="btn btn-primary">View Project</a>
                </div>
            </div>
        `;
        projectsList.appendChild(projectElement);
    });
}

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scroll down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scroll up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Typing effect for hero section
const typeWriter = (text, element, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        typeWriter(text, heroTitle);
    }
    displayProjects();
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});
