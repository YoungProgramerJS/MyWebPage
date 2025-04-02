function handleIntersect(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}


const observer = new IntersectionObserver(handleIntersect, { root: null, rootMargin: '0px', threshold: 0.5 });

const targets = document.querySelectorAll('.LoginPagePiece, .MusicianPiece, .weatherPiece, .DarkModePiece');
targets.forEach(target => observer.observe(target));

observer.observe(targets);
