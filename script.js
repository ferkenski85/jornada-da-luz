document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('login-screen');
    const calendarScreen = document.getElementById('calendar-screen');
    const passwordInput = document.getElementById('password-input');
    const loginBtn = document.getElementById('login-btn');
    const errorMessage = document.getElementById('error-message');
    const calendarGrid = document.getElementById('calendar-grid');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('close-modal');

    // Modal Elements
    const modalDayNumber = document.getElementById('modal-day-number');
    const modalTitle = document.getElementById('modal-title');
    const modalStory = document.getElementById('modal-story');
    const modalMission = document.getElementById('modal-mission');

    // Configuration
    // In a real app, this should be hashed or server-side validation.
    const MAGIC_PASSWORD = "NATAL2025";

    // Login Logic
    function attemptLogin() {
        const enteredPassword = passwordInput.value.trim(); // Removed toLowerCase to allow specific casing if needed, but usually safer to keep. Let's keep it case-insensitive matching or exact? User said "NATAL2025". Let's make it case-insensitive for better UX.
        if (enteredPassword.toUpperCase() === MAGIC_PASSWORD) {
            loginScreen.classList.add('hidden');
            calendarScreen.classList.remove('hidden');
            renderCalendar();
        } else {
            errorMessage.classList.remove('hidden');
            passwordInput.classList.add('error');
            setTimeout(() => passwordInput.classList.remove('error'), 500);
        }
    }

    loginBtn.addEventListener('click', attemptLogin);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') attemptLogin();
    });

    // Render Calendar
    function renderCalendar() {
        calendarGrid.innerHTML = '';

        // Ensure calendarData exists (from data.js)
        if (typeof calendarData === 'undefined') {
            console.error("Data not loaded");
            return;
        }

        calendarData.forEach(dayData => {
            const dayCard = document.createElement('div');
            dayCard.className = 'day-card';
            dayCard.setAttribute('role', 'button');
            dayCard.setAttribute('tabindex', '0');

            // Decorative elements
            const ribbonV = document.createElement('div');
            ribbonV.className = 'ribbon-v';
            const ribbonH = document.createElement('div');
            ribbonH.className = 'ribbon-h';

            const dayNumber = document.createElement('div');
            dayNumber.className = 'day-number';
            dayNumber.textContent = dayData.day;

            // Add random Christmas icons as decoration (using emojis for simplicity/compatibility)
            const icons = ['⭐', '🎄', '🎁', '🔔', '🕯️', '🍪', '❄️'];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            const decoration = document.createElement('div');
            decoration.className = 'decoration top-right';
            decoration.textContent = randomIcon;

            dayCard.appendChild(ribbonV);
            dayCard.appendChild(ribbonH);
            dayCard.appendChild(dayNumber);
            dayCard.appendChild(decoration);

            dayCard.addEventListener('click', () => openModal(dayData));

            // Accessibility: Allow Enter key to open
            dayCard.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(dayData);
                }
            });

            calendarGrid.appendChild(dayCard);
        });
    }

    // Modal Logic
    function openModal(data) {
        modalDayNumber.textContent = `Dia ${data.day}`;
        modalTitle.textContent = data.title;
        modalStory.textContent = data.story;
        modalMission.textContent = data.mission;

        modalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModal() {
        modalOverlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }

    closeModalBtn.addEventListener('click', closeModal);

    // Close on click outside
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) {
            closeModal();
        }
    });
});
