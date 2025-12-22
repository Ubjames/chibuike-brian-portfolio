//SniperJS Code

onPageLoad('/*', function (page) {
    $('footer').load('/component.html #site-footer');
    $('header').load('/component.html #site-header', function () {
        // After loading the header, set the active navigation link
        $(`header a[href*='${page.pathname.split('/').pop()}']`)?.replaceClass('text-gray-300', 'text-primary');

    });

});


onPageLoad('/', function (page) {
    const track = $('#testimonialsTrack');
    const cards = track.children;

    const prevBtn = $('#prevBtn');
    const nextBtn = $('#nextBtn');

    const currentIndexEl = $('#currentIndex');
    const totalCountEl = $('#totalCount');
    const progressBar = $('#progressBar');

    const total = cards.length;
    let index = 0;
    let autoplayTimer;

    // Init total
    totalCountEl.text(String(total).padStart(2, '0'));

    function updateUI() {
        currentIndexEl.text(String(index + 1).padStart(2, '0'));
        progressBar.style.width = `${((index + 1) / total) * 100}%`;
    }

    function scrollToIndex(i) {
        if (!cards[i]) return;

        const cardWidth = cards[i].offsetWidth + 24;
        track.scrollLeft = cardWidth * i;
        console.log('cardWidth: ',cardWidth);
        console.log('X i:',cardWidth * i, i);
        
        updateUI();
    }


    function next() {
        index = (index + 1) % total;
        scrollToIndex(index);
    }

    function prev() {
        index = (index - 1 + total) % total;
        scrollToIndex(index);
    }

    // Controls
    nextBtn.on('click', next);
    prevBtn.on('click', prev);

    // Autoplay
    function startAutoplay() {
        autoplayTimer = setInterval(next, 4500);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
    }

    startAutoplay();

    // Pause on hover
    track.on('mouseenter', stopAutoplay);
    track.on('mouseleave', startAutoplay);

    // Sync when user scrolls manually
    track.on('scroll', () => {
        const cardWidth = cards[0].offsetWidth + 24;
        index = Math.round(track.scrollLeft / cardWidth);
        updateUI();
    });

    // Initial state
    updateUI();


});