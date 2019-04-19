$(document).ready(function () {
    'use strict';
    console.log('main.js loaded');

    $.ajax({
        dataType: "json",
        url: 'http://localhost:8081/opi/youtube/videos/UCsU-I-vHLiaMfV_ceaYz5rQ',
        data: {},
        success: function (data) {
            $.each( data, function( index, val ) {
                let $rowDiv = $('#rowDiv');
                let $gridColDiv = $('<div class="col-xs-12 col-md-6 col-lg-4"></div>');
                let $cardDiv = $('<div>');

                $cardDiv.addClass('card');

                let $thumb = $('<img>');
                $thumb.attr('src', val.thumbnail);
                $thumb.attr('width', 200);
                $thumb.attr('height', 150);

                let $title = $('<div>');
                $title.html(val.title);
                $title.addClass('title');

                let $channelTitle = $('<div>');
                $channelTitle.html(val.channel + ' <i class="fas fa-check-circle"></i>');
                $channelTitle.addClass('channelTitle');

                $cardDiv.append($thumb);
                $cardDiv.append($title);
                $cardDiv.append($channelTitle);

                $gridColDiv.append($cardDiv);

                $rowDiv.append($gridColDiv);
            });
        }
    });
});

