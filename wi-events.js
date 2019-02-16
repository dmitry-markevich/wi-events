function wie(userParams) {

    var el = this,
        params = {
            debug: false,
            ga: false,
            gtm: false,
            ym: null
        }

    if (userParams) {
        for (key in userParams) {
            params[key] = userParams[key];
        }
    }

    // Send Event
    el.send = function (eventName) {

        if (eventName) {

            // Google Analytics Event
            if (params.ga) {
                if (typeof (ga) != 'undefined') {

                    ga('send', 'event', '', eventName);

                    if (params.debug) {
                        console.log('Google Analytics: ' + eventName);
                    }

                } else {
                    console.log('ga is undefined');
                }
            }

            // Google Analytics Event through GTM
            if (params.gtm) {
                if (typeof (dataLayer) != 'undefined') {

                    dataLayer.push({
                        event: 'jsEvent',
                        eventAction: eventName,
                    });

                    if (params.debug) {
                        console.log('Google Analytics through GTM: ' + eventName);
                    }

                } else {
                    console.log('dataLayer is undefined');
                }
            }

            // Yandex Metrika Event
            if (params.ym) {
                if (typeof (ym) != 'undefined') {

                    ym(params.ym, 'reachGoal', eventName);

                    if (params.debug) {
                        console.log('Yandex Metrika (' + params.ym + '): ' + eventName);
                    }

                } else {
                    console.log('ym is undefined');
                }
            }

        } else {
            console.log('Event name should not be empty')
        }
    }

}
