// Course Data
const courses = [
    {
        id: 1,
        title: "Complete Web Development Bootcamp",
        description: "Master HTML, CSS, JavaScript, and modern frameworks",
        instructor: "John Smith",
        duration: "40 hours",
        students: "2.5k",
        rating: 4.8,
        reviews: "1.2k",
        category: "web",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        lessons: [
            { id: 1, title: "Introduction to Web Development", duration: "15 min", videoId: "dQw4w9WgXcQ", completed: true },
            { id: 2, title: "HTML Fundamentals", duration: "45 min", videoId: "UB1O30fR-EE", completed: true },
            { id: 3, title: "CSS Styling Basics", duration: "60 min", videoId: "1PnVor36_40", completed: false },
            { id: 4, title: "JavaScript Essentials", duration: "90 min", videoId: "W6NZfCO5SIk", completed: false },
            { id: 5, title: "Responsive Design", duration: "75 min", videoId: "srvUrASNj0s", completed: false }
        ],
        progress: 40
    },
    {
        id: 2,
        title: "Data Science Fundamentals",
        description: "Learn Python, statistics, and machine learning basics",
        instructor: "Sarah Johnson",
        duration: "35 hours",
        students: "1.8k",
        rating: 4.6,
        reviews: "890",
        category: "data",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        lessons: [
            { id: 1, title: "Introduction to Data Science", duration: "20 min", videoId: "ua-CiDNNj30", completed: true },
            { id: 2, title: "Python Basics", duration: "60 min", videoId: "YYXdXT2l-Gg", completed: true },
            { id: 3, title: "Data Analysis with Pandas", duration: "90 min", videoId: "dcqPhpY7tWk", completed: false },
            { id: 4, title: "Statistical Concepts", duration: "75 min", videoId: "oI3hZJqXJuc", completed: false }
        ],
        progress: 50
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        description: "SEO, social media, and content marketing strategies",
        instructor: "Mike Chen",
        duration: "28 hours",
        students: "3.2k",
        rating: 4.9,
        reviews: "1.5k",
        category: "marketing",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
        lessons: [
            { id: 1, title: "Marketing Fundamentals", duration: "30 min", videoId: "F8UTtD3J0Cg", completed: true },
            { id: 2, title: "SEO Best Practices", duration: "60 min", videoId: "hFZFjoX2cGg", completed: true },
            { id: 3, title: "Social Media Strategy", duration: "45 min", videoId: "ZxKM3DCV2kE", completed: true },
            { id: 4, title: "Content Marketing", duration: "75 min", videoId: "9qRxNYuR2c4", completed: false }
        ],
        progress: 75
    },
    {
        id: 4,
        title: "UI/UX Design Principles",
        description: "Create beautiful and functional user interfaces",
        instructor: "Emily Davis",
        duration: "32 hours",
        students: "1.2k",
        rating: 4.7,
        reviews: "650",
        category: "design",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
        lessons: [
            { id: 1, title: "Design Thinking", duration: "25 min", videoId: "a7sEoEvT8l8", completed: true },
            { id: 2, title: "User Research Methods", duration: "50 min", videoId: "QckxK5tmQDk", completed: false },
            { id: 3, title: "Wireframing & Prototyping", duration: "80 min", videoId: "gQLQ0t9B5yk", completed: false }
        ],
        progress: 25
    },
    {
        id: 5,
        title: "React.js Complete Course",
        description: "Build modern web applications with React",
        instructor: "Alex Thompson",
        duration: "45 hours",
        students: "2.1k",
        rating: 4.8,
        reviews: "980",
        category: "web",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        lessons: [
            { id: 1, title: "React Basics", duration: "40 min", videoId: "w7ejDZ8SWv8", completed: false },
            { id: 2, title: "Components & Props", duration: "55 min", videoId: "DLX62G4lc44", completed: false },
            { id: 3, title: "State Management", duration: "70 min", videoId: "O6P86uwfdR0", completed: false }
        ],
        progress: 0
    }
];

// User Progress Data
let userProgress = {
    totalCourses: 5,
    totalHours: 127,
    certificates: 3,
    avgProgress: 78,
    enrolledCourses: [1, 2, 3, 4, 5]
};

// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const coursesGrid = document.getElementById('coursesGrid');
const searchBox = document.getElementById('searchBox');
const filterBtns = document.querySelectorAll('.filter-btn');
const progressCards = document.getElementById('progressCards');
const videoPlayer = document.getElementById('videoPlayer');
const lessonsList = document.getElementById('lessonsList');

// Mobile Navigation Toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Course Filtering and Search
function filterCourses(category = 'all', searchTerm = '') {
    let filteredCourses = courses;
    
    if (category !== 'all') {
        filteredCourses = courses.filter(course => course.category === category);
    }
    
    if (searchTerm) {
        filteredCourses = filteredCourses.filter(course => 
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    return filteredCourses;
}

function renderCourses(coursesToRender) {
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = '';
    
    coursesToRender.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.onclick = () => window.location.href = `course-detail.html?id=${course.id}`;
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <div class="course-overlay">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-user-graduate"></i> ${course.students} students</span>
                </div>
                <div class="course-rating">
                    <div class="stars">
                        ${generateStars(course.rating)}
                    </div>
                    <span>${course.rating} (${course.reviews} reviews)</span>
                </div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Filter Button Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        const searchTerm = searchBox ? searchBox.value : '';
        const filteredCourses = filterCourses(category, searchTerm);
        renderCourses(filteredCourses);
    });
});

// Search Box Event Listener
if (searchBox) {
    searchBox.addEventListener('input', () => {
        const searchTerm = searchBox.value;
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        const filteredCourses = filterCourses(activeCategory, searchTerm);
        renderCourses(filteredCourses);
    });
}

// Progress Tracking
function renderProgressCards() {
    if (!progressCards) return;
    
    progressCards.innerHTML = '';
    
    userProgress.enrolledCourses.forEach(courseId => {
        const course = courses.find(c => c.id === courseId);
        if (!course) return;
        
        const progressCard = document.createElement('div');
        progressCard.className = 'progress-card';
        
        progressCard.innerHTML = `
            <h3>${course.title}</h3>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${course.progress}%"></div>
            </div>
            <div class="progress-info">
                <span>${course.progress}% Complete</span>
                <span>${course.lessons.filter(l => l.completed).length}/${course.lessons.length} Lessons</span>
            </div>
            <div style="margin-top: 1rem;">
                <a href="course-detail.html?id=${course.id}" class="btn btn-primary">Continue Learning</a>
            </div>
        `;
        
        progressCards.appendChild(progressCard);
    });
}

// Course Detail Page
function loadCourseDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = parseInt(urlParams.get('id'));
    
    if (!courseId) return;
    
    const course = courses.find(c => c.id === courseId);
    if (!course) return;
    
    // Update course header
    const courseTitle = document.getElementById('courseTitle');
    const courseInstructor = document.getElementById('courseInstructor');
    const courseDuration = document.getElementById('courseDuration');
    const courseStudents = document.getElementById('courseStudents');
    const courseRating = document.getElementById('courseRating');
    
    if (courseTitle) courseTitle.textContent = course.title;
    if (courseInstructor) courseInstructor.textContent = course.instructor;
    if (courseDuration) courseDuration.textContent = course.duration;
    if (courseStudents) courseStudents.textContent = course.students + ' students';
    if (courseRating) courseRating.textContent = `${course.rating} (${course.reviews} reviews)`;
    
    // Render lessons
    renderLessons(course.lessons);
    
    // Load first lesson video
    if (course.lessons.length > 0) {
        loadVideo(course.lessons[0].videoId);
    }
}

function renderLessons(lessons) {
    if (!lessonsList) return;
    
    lessonsList.innerHTML = '';
    
    lessons.forEach((lesson, index) => {
        const lessonItem = document.createElement('div');
        lessonItem.className = `lesson-item ${lesson.completed ? 'completed' : ''} ${index === 0 ? 'active' : ''}`;
        lessonItem.onclick = () => {
            // Remove active class from all lessons
            document.querySelectorAll('.lesson-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked lesson
            lessonItem.classList.add('active');
            
            // Load video
            loadVideo(lesson.videoId);
            
            // Mark as completed (in a real app, this would be saved to backend)
            if (!lesson.completed) {
                lesson.completed = true;
                lessonItem.classList.add('completed');
                updateProgress();
            }
        };
        
        lessonItem.innerHTML = `
            <i class="fas ${lesson.completed ? 'fa-check-circle' : 'fa-play-circle'}"></i>
            <div>
                <div>${lesson.title}</div>
                <div class="lesson-duration">${lesson.duration}</div>
            </div>
        `;
        
        lessonsList.appendChild(lessonItem);
    });
}

function loadVideo(videoId) {
    if (!videoPlayer) return;
    
    videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
}

function updateProgress() {
    // Update progress statistics
    const totalCourses = document.getElementById('totalCourses');
    const totalHours = document.getElementById('totalHours');
    const certificates = document.getElementById('certificates');
    const avgProgress = document.getElementById('avgProgress');
    
    if (totalCourses) totalCourses.textContent = userProgress.totalCourses;
    if (totalHours) totalHours.textContent = userProgress.totalHours;
    if (certificates) certificates.textContent = userProgress.certificates;
    if (avgProgress) avgProgress.textContent = userProgress.avgProgress + '%';
}

// Initialize page based on current URL
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch (currentPage) {
        case 'index.html':
        case '':
            // Home page - no additional initialization needed
            break;
        case 'courses.html':
            renderCourses(courses);
            break;
        case 'progress.html':
            updateProgress();
            renderProgressCards();
            break;
        case 'course-detail.html':
            loadCourseDetail();
            break;
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function showLoading(element) {
    if (!element) return;
    
    element.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Add fade-in animation to elements
function addFadeInAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.course-card, .feature-card, .progress-card').forEach(el => {
        observer.observe(el);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    addFadeInAnimation();
});

// Handle window resize for responsive design
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
}); 