import React from 'react';

import './home.css'; // Import the CSS file

function Home() {
  return (
    <div className="card">
      <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#internships">Internships</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    
    <section id="home" class="hero-section">
        <div className="hero-content">
            <h1>Hi, I'm Vidhya Aruljothi</h1>
            <p>A Web Developer & Problem Solver</p>
            <a href="#projects" className="cta-button">View My Work</a>
        </div>
    </section>

   
    <section id="about" className="about-preview">
        <h2>About Me</h2>
        <p>I’m a software engineer with a focus on web development and web design. I love building innovative solutions and learning new technologies.</p>
        <h3>Skills</h3>
        <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Django</li>
            <li>React</li>
        </ul>
    </section>

   
    <section id="projects" className="projects-section">
        <h2>Recent Projects</h2>
        <div class="projects-grid">
            <div class="project-item">
                <h3>Project One</h3>
                <p>A website build using HTML, CSS, Javascript, PHP, and MySQL for <b>"An AI Image Generator."</b></p>
                <a href="#">View Project</a>
            </div>
            <div className="project-item">
                <h3>Project Two</h3>
                <p>An e-commerce website built with HTML, CSS, PHP, and MySQL for <b>"Online Train Ticket Reservation System."</b></p>
                <a href="#">View Project</a>
            </div>
            <div className="project-item">
                <h3>Project Three</h3>
                <p>A web app using Django, HTML, CSS, and JavaScript for <b>"E-com App for Agri Products."</b></p>
                <a href="#">View Project</a>
            </div>
            <div className="project-item">
                <h3>Project Four</h3>
                <p>A portfolio website built using HTML, CSS, and JavaScript for <b>"Personal Portfolio Website."</b></p>
                <a href="#">View Project</a>
            </div>
        </div>
    </section>

    
    <section id="internships" className="internship-section">
        <h2>My Internships</h2>
        <div className="internship-item">
            <h3>Web Development Intern - Codebind Technologies at Trichy</h3>
            <p><strong>Duration:</strong> 1st July 2023 - 5th July 2023</p>
            <p>Developed web applications using HTML, CSS, PHP, and MySQL.</p>
        </div>
        <div className="internship-item">
            <h3>Web Designing Intern - Odugaatech at Salem</h3>
            <p><strong>Duration:</strong> 23 May 2024 - 25 May 2024</p>
            <p>Focused on front-end development using HTML, CSS, and JavaScript.</p>
        </div>
        <div className="internship-item">
            <h3>Web Development Intern - Codebind Technologies at Chennai</h3>
            <p><strong>Duration:</strong> 09th July 2024 - 08th August 2024</p>
            <p>Developed web applications using HTML, CSS, JavaScript, PHP, and MySQL.</p>
        </div>
    </section>

    
    <section id="education" className="education-section">
        <h2>My Education</h2>
        <div class="education-item">
            <h3>Bachelor of Computer Science and Engineering</h3>
            <p><strong>University:</strong> Bharathiyar Institute of Engineering for Women [Anna University]</p>
            <p><strong>Duration:</strong> August 2021 - May 2025</p>
            <p>Specialized in software development and data structures. GPA: 8.08.</p>
        </div>
        <div className="education-item">
            <h3>Higher Secondary Schooling</h3>
            <p><strong>School:</strong> Sri Venkateswara A1 Matriculation and Higher Secondary School</p>
            <p><strong>Duration:</strong> June 2020 - May 2021</p>
            <p>Graduated with 90.8% in mathematics and biology.</p>
        </div>
    </section>

    
    <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>If you’d like to reach out for projects, collaboration, or general inquiries, feel free to use the form below!</p>
        <form action="submit_form.php" method="POST" class="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <input type="submit" value="Send Message" />
        </form>
    </section>

     <footer>
        <p>&copy; 2024 Vidhya. All rights reserved. | <a href="mailto:vidhyaap53@gmail.com">vidhyaap53@gmail.com</a></p>
    </footer>
    </div>
  );
}

export default Home;