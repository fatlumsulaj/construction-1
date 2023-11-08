const toggleButtom = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButtom.addEventListener("click", () => {
navbarLinks.classList.toggle("active")
})



const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    // threshold: 0 so the function can happen without the section
    // scrolled completely
    threshold: 0,

    // when we scroll 250px into the section
    rootMargin: '0px 0px -145px 0px'
}

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        // if the section isn't viewed, we will stop the function 
        if (!entry.isIntersecting) {
            return;
        };

        // else we will add the appear class, and unobserve it
        // so that the animation won't happen anytime we scroll up and down
        entry.target.classList.toggle('appear');
        appearOnScroll.unobserve(entry.target)
    })
}, appearOptions);


// observe each fader and slider, so that when the are intersected
// we will add the appear class to each one of them individually
sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})