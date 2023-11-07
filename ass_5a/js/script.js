// Sample course data (you can replace this with your actual data)
const courses = [
    { title: "Computer Science", description: "Learn programming and software development." },
    { title: "Business Administration", description: "Get insights into the world of business." },
    { title: "Engineering", description: "Study various engineering disciplines." },
];

// Sample news data (you can replace this with your actual data)
const news = [
    { title: "New Scholarship Opportunities", content: "Apply for our latest scholarships." },
    { title: "Faculty Achievements", content: "Our faculty members receive awards." },
];

// Sample event data (you can replace this with your actual data)
const events = [
    { title: "Open House", date: "April 15, 2023", location: "Campus Auditorium" },
    { title: "Career Fair", date: "May 20, 2023", location: "Student Center" },
];

// Populate course listings
const courseList = document.getElementById("course-list");
courses.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course");
    courseItem.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
    courseList.appendChild(courseItem);
}); //Basically links the info of courses to HTML element.

// Populate news articles
const newsArticles = document.getElementById("news-articles");
news.forEach(article => {
    const articleItem = document.createElement("div");
    articleItem.classList.add("news-article");
    articleItem.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
    newsArticles.appendChild(articleItem);
}); //Links to News section.

// Populate upcoming events
const eventList = document.getElementById("event-list");
events.forEach(event => {
    const eventItem = document.createElement("div");
    eventItem.classList.add("event");
    eventItem.innerHTML = `<h3>${event.title}</h3><p>Date: ${event.date}<br>Location: ${event.location}</p>`;
    eventList.appendChild(eventItem);
}); // Links to Events section. 
