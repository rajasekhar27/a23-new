export const addAndRemoveCssClassOnElement = (type, elementId, cssClass) => {
    const element = document.getElementById(elementId);
    if(type === "add") {
        element.classList.add(cssClass);
    }
    else if(type === "remove") {
        element.classList.remove(cssClass);
    }
    else {
        element.classList.toggle(cssClass);
    }
}

export const closeMobileMenu = () => {
    addAndRemoveCssClassOnElement('add', 'leftMenu', 'hidden');
    addAndRemoveCssClassOnElement('add', 'menuOverlay', 'hidden');
    addAndRemoveCssClassOnElement('remove', 'wrapper', 'overflow-hidden');
    startAndStopBodyScroll('start');
}

export const openMobileMenu = () => {
    addAndRemoveCssClassOnElement('remove', 'leftMenu', 'hidden');
    addAndRemoveCssClassOnElement('remove', 'menuOverlay', 'hidden');
    addAndRemoveCssClassOnElement('add', 'wrapper', 'overflow-hidden');
    startAndStopBodyScroll('stop');
}

const closeOtherDropdownMenu = (currEl) => {
    const allOtherDropdowns = document.getElementsByClassName('dropdown-menu');
    Array.from(allOtherDropdowns).forEach(function (eachOtherDropdown) {
        if(eachOtherDropdown != currEl) {
            eachOtherDropdown.classList.add('dropdown-menu-closed');
        }
    });
}

export const openCloseDropdownMenu = () => {
    setTimeout(() => {
        const allDropdowns = document.getElementsByClassName('btn-trigger');
        Array.from(allDropdowns).forEach(function (eachDropdown) {
            eachDropdown.addEventListener('click', (e) => {
                closeOtherDropdownMenu(e.target.closest(".dropdown-menu"));
                eachDropdown.parentNode.classList.toggle('dropdown-menu-closed');
            })
        });
    }, 200);
}

const startAndStopBodyScroll = (status) => {
    const body = document.getElementsByTagName('body')[0];
    if(status === 'stop') {
        body.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    }
    else {
        body.style.overflow = 'auto';
        document.body.style.overflow = 'auto';
    }
}