const modal = document.getElementById('myModal');

if (modal) {
    const span = document.getElementsByClassName('close')[0];
    const images = document.getElementsByClassName('clickable-image');
    const modalImg = document.getElementById('img01');

    span.onclick = function () {
        modal.style.display = 'none';
    }

    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function () {
            modal.style.display = 'block';
            modalImg.src = this.src;
        }
    }

    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

const closePage = document.getElementById('closePage');
const homePanel = document.getElementById('homePanel');
const introPanel = document.getElementById('introPanel');
const panelOverlay = document.getElementById('panelOverlay');
const openTrigger = document.querySelector('[data-open="homePanel"]');

if (openTrigger && homePanel && panelOverlay) {
    openTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        homePanel.classList.add('visible');
        panelOverlay.classList.add('visible');
        document.body.classList.add('panel-open');
    });

    panelOverlay.addEventListener('click', function () {
        homePanel.classList.remove('visible');
        panelOverlay.classList.remove('visible');
        document.body.classList.remove('panel-open');
    });
}

if (closePage) {
    closePage.addEventListener('click', function () {

        if (homePanel && panelOverlay && document.body.classList.contains('panel-open')) {
            homePanel.classList.remove('visible');
            panelOverlay.classList.remove('visible');
            document.body.classList.remove('panel-open');
        } else if (introPanel && document.body.classList.contains('subpage')) {
            introPanel.classList.remove('visible');
            introPanel.classList.remove('visible-page');
            document.body.classList.remove('panel-open');

            setTimeout(function () {
                window.location.href = 'index.html';
            }, 500);
        }
    });
}

/* Process form content */
const reviewForm = document.getElementById('review-form');
const formMessage = document.getElementById('form-message');

if (reviewForm && formMessage) {
    reviewForm.addEventListener('submit', function (e) {
        e.preventDefault();

        formMessage.textContent = 'Your review has been submitted successfully.';
        formMessage.style.marginTop = '1rem';
        formMessage.style.color = '#9fe3be';

        reviewForm.reset();
    });
}


const accessibilityToggle = document.getElementById('accessibilityToggle');

if (localStorage.getItem('accessibleMode') === 'on') {
    document.body.classList.add('accessible-mode');
}

if (accessibilityToggle) {
    accessibilityToggle.addEventListener('click', function () {
        document.body.classList.toggle('accessible-mode');

        if (document.body.classList.contains('accessible-mode')) {
            localStorage.setItem('accessibleMode', 'on');
        } else {
            localStorage.setItem('accessibleMode', 'off');
        }
    });
}

const skipToContent = document.getElementById('skipToContent');

if (skipToContent && homePanel && panelOverlay) {
    skipToContent.addEventListener('click', function (e) {
        e.preventDefault();
        homePanel.classList.add('visible');
        panelOverlay.classList.add('visible');
        document.body.classList.add('panel-open');
        homePanel.setAttribute('tabindex', '-1');
        homePanel.focus();
    });
}