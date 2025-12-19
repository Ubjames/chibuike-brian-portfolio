//SniperJS Code

onPageLoad('/*', function (page) {
    $('footer').load('/component.html #site-footer');
    $('header').load('/component.html #site-header', function () {
        // After loading the header, set the active navigation link
        $(`header a[href*='${page.pathname.split('/').pop()}']`)?.replaceClass('text-gray-300', 'text-primary');

    });

});