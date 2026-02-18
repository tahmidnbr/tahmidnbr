// ===== ANIMATION SETTINGS: Intersection Observer =====
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== PROJECT DATA LOADING =====
document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const grid = document.getElementById('projects-grid');
            data.projects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `
                    <h3>${project.title}</h3>
                    <p style="color: #666; margin: 10px 0;">${project.description}</p>
                    <small><strong>Tech:</strong> ${project.techStack}</small>
                    <div style="margin-top: 20px;">
                        <a href="${project.github}" style="color: black; font-weight: bold; text-decoration: none;">GITHUB</a>
                    </div>
                `;
                grid.appendChild(card);
            });
        })
        .catch(err => console.error("Error loading projects:", err));
});