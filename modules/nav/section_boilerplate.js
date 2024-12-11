class SectionBoilerplate {
    constructor(divId) {
        this.divId = divId;
        this.div = document.getElementById(divId);
        
        this.header = null;
        this.headerText = '';
        this.headerCreated = false;
    }

    open() {
        if (!this.div) return;

        if (this.header) {
            this.header.style.display = 'none';
            this.header.style.transform = 'translateX(-100%)';
            this.headerText.style.opacity = '0';
        }

        this.div.classList.add('slide-down');
        setTimeout(() => {
            this.div.classList.remove('slide-down');
            this.div.classList.add('active');
        }, 10); // Small delay to ensure the slide-down class is applied before active

        setTimeout(() => {
            if (this.header) {
                this.header.style.display = 'block';
                setTimeout(() => {
                    this.header.style.transition = 'transform 0.5s ease-in-out';
                    this.header.style.transform = 'translateX(0)';
                    setTimeout(() => {
                        this.headerText.style.transition = 'opacity 0.5s ease-in-out';
                        this.headerText.style.opacity = '1';
                    }, 500); // Delay to match the header slide-in duration
                }, 10); // Small delay to ensure the display change is applied
            }
        }, 500); // Match the transition duration in CSS
    }

    close() {
        if (!this.div) return;


        this.div.classList.remove('active');
        this.div.classList.add('slide-up');
        setTimeout(() => {
            this.div.classList.remove('slide-up');

            if (this.header) {
                this.header.style.display = 'none';
            }
        }, 500); // Match the transition duration in CSS
    }

    initialize() {
        this.div = document.getElementById(this.divId);
        this.create_title();
    }

    create_title() {
        if (this.div && !this.headerCreated) {
            const header_text = document.createElement('h2');
            header_text.className = 'content-section-header-text';


            header_text.textContent = this.divId.replace('-content-section', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
            this.headerText = header_text;

            // Create ribbon effect
            const header = document.createElement('div');
            header.className = 'ribbon';
            header.appendChild(header_text);

            this.div.insertBefore(header, this.div.firstChild);
            this.header = header;
            this.headerCreated = true;
        }
    }
}