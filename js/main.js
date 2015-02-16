$(document).ready(function () {
    var loadWidget = {},
        loadWidgetInterval;

    $.ajax({
        url: 'http://api.parldata.eu/',
        dataType: 'json',
        success: function (data) {
            $.each(data._links.child, function (key, item) {
                loadWidget[item.href] = false;

                $('body').append(
                    $('<div></div>').attr('id', item.href).append(
                        $('<h1></h1>').text(item.title)
                    )
                );

                $.ajax({
                    url: 'http://api.parldata.eu/' + item.href + '/',
                    dataType: 'json',
                    success: function (data) {
                        var parlList = $('<div></div>').addClass('list');

                        $.each(data._links.child, function (key, list) {
                            parlList.append(
                                $('<h2></h2>').text(list.title)
                            ).append(
                                $('<div></div>').addClass('parldata-widget').attr({
                                    'data-country': item.href,
                                    'data-parliament': list.href,
                                    'data-context': "organization_members",
                                    'data-link': "1"
                                })
                            )
                        });
                        $('#' + item.href).append(parlList);
                        loadWidget[item.href] = true;
                    }
                });
            });

            loadWidgetInterval = setInterval(function () {
                var stop = true;

                for (var key in loadWidget) {
                    if (loadWidget[key] == false)
                        stop = false;
                }

                if (stop) {
                    clearInterval(loadWidgetInterval);
                    visegrad.reload();
                }
            }, 500);
        }
    });
});
