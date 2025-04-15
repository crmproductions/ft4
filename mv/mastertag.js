if(!window.sdkInitialized) {
    window.sdkInitialized = true;
    (function (i, s, o, g, r, a, m) {
        i['SocialMinerObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = !!1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://plugins.soclminer.com.br/mastertag/allminer.js', 'SM');

    SM('create', '48919754-d6ca-4ada-b083-4eebb671f1a6', 'TRAY');
    SM('send', 'pageview', 'TRAY');
}