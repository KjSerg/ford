import {burger} from "./_burger";
import {cloudShow, twinklingStars} from "./_animations";
import tabs from "./_tabs";

class App {
    constructor() {
        this.init();
        this.fullPageInit();
    }

    init() {
        burger();
        cloudShow();
        twinklingStars();
        tabs();
        $(document).ready(function () {
            // $('#fullpage').fullpage({
            //     autoScrolling:true,
            //     scrollHorizontally: true,
            //     licenseKey: 'YOUR_KEY_HERE'
            // });
            // $.fn.fullpage.setAllowScrolling(false);
        });

    }

    fullPageInit() {
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('.section');
            let currentSection = 0;
            let isScrolling = false;

            const scrollToSection = (index) => {
                if (index >= 0 && index < sections.length) {
                    isScrolling = true;
                    sections[index].scrollIntoView({behavior: 'smooth'});
                    setTimeout(() => {
                        isScrolling = false;
                    }, 1000);
                }
            };

            document.addEventListener('wheel', (event) => {
                if (isScrolling) return;

                if (event.deltaY > 0) {
                    currentSection++;
                    if (currentSection >= sections.length) {
                        currentSection = sections.length - 1;
                    }
                } else {
                    currentSection--;
                    if (currentSection < 0) {
                        currentSection = 0;
                    }
                }
                scrollToSection(currentSection);
            });

            document.addEventListener('keydown', (event) => {
                if (isScrolling) return;

                switch (event.key) {
                    case 'ArrowDown':
                        currentSection++;
                        if (currentSection >= sections.length) {
                            currentSection = sections.length - 1;
                        }
                        scrollToSection(currentSection);
                        break;
                    case 'ArrowUp':
                        currentSection--;
                        if (currentSection < 0) {
                            currentSection = 0;
                        }
                        scrollToSection(currentSection);
                        break;
                }
            });
        });


    }
}

const app = new App();