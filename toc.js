// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="start.html">0. Introduction</a></li><li class="chapter-item expanded "><a href="chapters/week7_intro.html">7. Week 7</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week7/theory.html">7.1 Theory</a></li><li class="chapter-item expanded "><a href="chapters/week7/lab_k.html">7.2 Lab K</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week7/lab_k_stage_1.html">7.2.1 Lab K stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week7/lab_k_stage_2.html">7.2.2 Lab K stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week7/assignment_k.html">7.2.3 Assignment K</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week7/lab_l.html">7.3 Lab L</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week7/lab_l_stage_1.html">7.3.1 Lab L stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week7/lab_l_stage_2.html">7.3.2 Lab L stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week7/assignment_l.html">7.3.3 Assignment L</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week7/formative_quiz.html">7.4 Formative quiz 7</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week8_intro.html">8. Week 8</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week8/theory.html">8.1 Theory</a></li><li class="chapter-item expanded "><a href="chapters/week8/lab_m.html">8.2 Lab M</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week8/lab_m_stage_1.html">8.2.1 Lab M stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week8/lab_m_stage_2.html">8.2.2 Lab M stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week8/assignment_m.html">8.2.3 Assignment M</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week8/lab_n.html">8.3 Lab N</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week8/lab_n_stage_1.html">8.3.1 Lab N stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week8/lab_n_stage_2.html">8.3.2 Lab N stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week8/assignment_n.html">8.3.3 Assignment N</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week8/formative_quiz.html">8.4 Formative quiz 8</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week9_intro.html">9. Week 9</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week9/theory.html">9.1 Theory</a></li><li class="chapter-item expanded "><a href="chapters/week9/lab_o.html">9.2 Lab O</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week9/lab_o_stage_1.html">9.2.1 Lab O stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week9/lab_o_stage_2.html">9.2.2 Lab O stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week9/assignment_o.html">9.2.3 Assignment O</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week9/lab_p.html">9.3 Lab P</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week9/lab_p_stage_1.html">9.3.1 Lab P stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week9/lab_p_stage_2.html">9.3.2 Lab P stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week9/assignment_p.html">9.3.3 Assignment P</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week9/formative_quiz.html">9.4 Formative quiz 9</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week10_intro.html">10. Week 10</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week10/theory.html">10.1 Theory</a></li><li class="chapter-item expanded "><a href="chapters/week10/lab_q.html">10.2 Lab Q</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week10/lab_q_stage_1.html">10.2.1 Lab Q stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week10/lab_q_stage_2.html">10.2.2 Lab Q stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week10/assignment_q.html">10.2.3 Assignment Q</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week10/lab_r.html">10.3 Lab R</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week10/lab_r_stage_1.html">10.3.1 Lab R stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week10/lab_r_stage_2.html">10.3.2 Lab R stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week10/assignment_r.html">10.3.3 Assignment R</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week10/formative_quiz.html">10.4 Formative quiz 10</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week11_intro.html">11. Week 11</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week11/theory.html">11.1 Theory</a></li><li class="chapter-item expanded "><a href="chapters/week11/lab_s.html">11.2 Lab S</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week11/lab_s_stage_1.html">11.2.1 Lab S stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week11/lab_s_stage_2.html">11.2.2 Lab S stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week11/assignment_s.html">11.2.3 Assignment S</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week11/lab_t.html">11.3 Lab T</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week11/lab_t_stage_1.html">11.3.1 Lab T stage 1</a></li><li class="chapter-item expanded "><a href="chapters/week11/lab_t_stage_2.html">11.3.2 Lab T stage 2</a></li><li class="chapter-item expanded "><a href="chapters/week11/assignment_t.html">11.3.3 Assignment T</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week11/formative_quiz.html">11.4 Formative quiz 11</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/week12_intro.html">12. Week 12</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/week12/formative_quiz.html">12.1 Formative quiz 12</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="copyright.html">Copyright information</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
