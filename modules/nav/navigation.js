// Create Section_Boilerplate objects for each section and put them all in a list
const SECTIONS = [
    new SectionBoilerplate('home-content-section'),
    new SectionBoilerplate('decks-content-section'),
    new SectionBoilerplate('flashcards-content-section'),
    new SectionBoilerplate('terminal-content-section'),
    new SectionBoilerplate('test-content-section'),
    new SectionBoilerplate('info-content-section')
];

function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const targetSection = SECTIONS.find(section => section.div.id === sectionId);

    if (targetSection.div.classList.contains('active')) {
        // If the target section is already active, do nothing
        return;
    }

    sections.forEach(section => {
        if (section.classList.contains('active')) {
            const sectionBoilerplate = SECTIONS.find(sec => sec.div.id === section.id);
            sectionBoilerplate.close();
        }
    });

    targetSection.open();
}


function initializeSections() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    SECTIONS.forEach(section => {
        // Create button
        const button = document.createElement('button');
        button.className = 'nav-button';
        button.textContent = section.divId.replace('-content-section', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        button.onclick = () => showContent(section.divId);
        sidebar.appendChild(button);

        // Create div
        const div = document.createElement('div');
        div.id = section.divId;
        div.className = 'content-section';
        mainContent.appendChild(div);

        // Call initialize method (to be implemented later)
        if (typeof section.initialize === 'function') {
            section.initialize();
        }
    });

    // Open the first section
    if (SECTIONS.length > 0) {
        showContent(SECTIONS[0].divId);
    }
}

// Call the initializeSections function to set up the sections
initializeSections();



function toggleActiveNavButton(sectionId) {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
}
