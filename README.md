# EduLearn - E-Learning Platform

A modern, responsive e-learning platform built with HTML, CSS, and JavaScript featuring course listing, progress tracking, and video embedding capabilities.

## 🚀 Features

### 📚 Course Management
- **Course Listing**: Browse through a curated collection of courses
- **Course Categories**: Filter courses by Web Development, Data Science, Digital Marketing, and Design
- **Search Functionality**: Search courses by title, description, or instructor
- **Course Details**: Comprehensive course information with ratings, duration, and student count

### 🎥 Video Learning
- **Embedded Video Player**: YouTube video integration for seamless learning
- **Lesson Navigation**: Interactive lesson list with progress tracking
- **Video Controls**: Full video player controls with responsive design

### 📊 Progress Tracking
- **Learning Analytics**: Track completion percentage and lesson progress
- **Visual Progress Bars**: Clear visual representation of course completion
- **Statistics Dashboard**: Overview of total courses, hours, and certificates earned
- **Real-time Updates**: Progress updates as lessons are completed

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Styling**: Beautiful gradients, animations, and hover effects
- **Interactive Elements**: Smooth transitions and engaging user interactions
- **Accessibility**: Clean, readable design with proper contrast ratios

## 📁 Project Structure

```
task 4/
├── index.html          # Home page with featured courses
├── courses.html        # Course listing page with filters
├── course-detail.html  # Individual course page with video player
├── progress.html       # Progress tracking dashboard
├── styles.css          # Comprehensive styling
├── script.js           # Interactive functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and data management
- **Font Awesome**: Icons and visual elements
- **YouTube API**: Video embedding and playback

## 🚀 Getting Started

1. **Clone or Download** the project files
2. **Open** `index.html` in your web browser
3. **Navigate** through the different pages:
   - Home page: Overview and featured courses
   - Courses page: Browse all available courses
   - Course Detail: Watch videos and track lesson progress
   - Progress page: View your learning statistics

## 📱 Pages Overview

### 🏠 Home Page (`index.html`)
- Hero section with call-to-action
- Featured courses showcase
- Platform features and benefits
- Responsive navigation

### 📚 Courses Page (`courses.html`)
- Complete course catalog
- Category filtering (Web Dev, Data Science, Marketing, Design)
- Search functionality
- Course cards with ratings and details

### 🎥 Course Detail Page (`course-detail.html`)
- Embedded YouTube video player
- Interactive lesson list
- Course information and statistics
- Progress tracking for individual lessons

### 📊 Progress Page (`progress.html`)
- Learning statistics dashboard
- Course progress visualization
- Completion tracking
- Achievement overview

## 🎯 Key Features Explained

### Course Filtering & Search
```javascript
// Filter courses by category and search term
function filterCourses(category = 'all', searchTerm = '') {
    let filteredCourses = courses;
    
    if (category !== 'all') {
        filteredCourses = courses.filter(course => course.category === category);
    }
    
    if (searchTerm) {
        filteredCourses = filteredCourses.filter(course => 
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    return filteredCourses;
}
```

### Video Embedding
```html
<!-- Responsive video container -->
<div class="video-container">
    <iframe id="videoPlayer" src="https://www.youtube.com/embed/VIDEO_ID" 
            frameborder="0" allowfullscreen>
    </iframe>
</div>
```

### Progress Tracking
```javascript
// Update progress when lesson is completed
function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = `${courseProgress}%`;
}
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Secondary**: Green gradient (#4caf50 to #45a049)
- **Accent**: Coral (#ff6b6b)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Responsive**: Scales appropriately across devices
- **Hierarchy**: Clear heading structure for readability

### Animations
- **Hover Effects**: Smooth transitions on interactive elements
- **Scroll Animations**: Fade-in effects for better UX
- **Loading States**: Spinner animations for better feedback

## 📱 Responsive Design

The platform is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

### Mobile Features
- Collapsible navigation menu
- Touch-friendly buttons and interactions
- Optimized layouts for small screens
- Swipe-friendly course cards

## 🔧 Customization

### Adding New Courses
```javascript
// Add to the courses array in script.js
{
    id: 6,
    title: "Your Course Title",
    description: "Course description",
    instructor: "Instructor Name",
    duration: "30 hours",
    students: "1.5k",
    rating: 4.7,
    reviews: "750",
    category: "web", // web, data, marketing, design
    image: "course-image-url",
    lessons: [
        {
            id: 1,
            title: "Lesson Title",
            duration: "45 min",
            videoId: "youtube-video-id",
            completed: false
        }
    ],
    progress: 0
}
```

### Styling Customization
- Modify colors in CSS custom properties
- Adjust spacing and typography in `styles.css`
- Add new animations and transitions
- Customize responsive breakpoints

## 🌟 Future Enhancements

- **User Authentication**: Login/signup functionality
- **Backend Integration**: Real data persistence
- **Payment Integration**: Course purchasing
- **Discussion Forums**: Student interaction
- **Certificate Generation**: Automated certificates
- **Offline Support**: Downloadable content
- **Multi-language Support**: Internationalization

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please refer to the code comments or create an issue in the repository.

---

**Built with ❤️ for modern e-learning experiences** 