/**
 * Created by Aqitaniya on 24.02.2016.
 */
$(function() {
    getWindowSize();
});

if( $(window).width()<=340) {
    $('table tbody tr').mouseenter(function () {
        $(this).children('td').css({"background-color": "#fff1e6"});
    }).mouseleave(function () {
        $(this).children('td').css({"background-color": "#ffffff"});
    });
}

$(window).on( "resize", getWindowSize);

function getWindowSize(){

    var NameCol="Ставки";

    if( $(window).width()<=340){

        $("table tr td:nth-child(2)").css({"display": "none"});
        $("table tr td:nth-child(3)").css({"display": "none"});
        $("table tr td:nth-child(4)").css({"display": "none"});
        $("table tr td:nth-child(5)").css({"display": "none"});
        $("table tr td:nth-child(7)").css({"display": "none"});

        $('tr', '.table thead').each(function() {
            $(this).children('td:nth-child(9)').detach();
        });

        $('tr', '.table tbody').each(function() {
            var cols;

            cols = $(this).children('td:nth-child(1)').css({"border-right":"none"});
            cols = $(this).children('td:nth-child(1)').css({"border-bottom":"none"});

            cols = $(this).children('td:nth-child(6)').css({"border-right":"none"});
            cols = $(this).children('td:nth-child(6)').css({"border-bottom":"none"});
            cols = $(this).children('td:nth-child(6)').css({"border-left":"none"});

            cols = $(this).children('td:nth-child(8)').css({"border-bottom":"none"});
            cols = $(this).children('td:nth-child(8)').css({"border-left":"none"});

            cols = $(this).children('td:nth-child(9)');
            cols = cols.attr('colspan',3);
            cols = cols.css({"border-top":"none"});
            cols = cols.detach().insertAfter($(this)).wrapAll('<tr class="new-row">');
        });

    }
    if($(window).width()<=800 && $(window).width()>340)
    {
        var NameColTable=$($('table thead tr td:nth-child(8)').get(0)).text();

        if(NameColTable.toString().toUpperCase()==NameCol.toString().toUpperCase())
        {
            moveColumn('.table', 8, 1, "small");
        }

        $("table tr td:nth-child(2)").css({"min-width": "155px"});
        $("table tr td:nth-child(3)").css({"display": "none"});
        $("table tr td:nth-child(5)").css({"display": "none"});
        $("table tr td:nth-child(8)").css({"display": "none"});
    }
    if($(window).width()>800)
    {
        var NameColTable=$($('table thead tr td:nth-child(9)').get(0)).text();

        if(NameColTable.toString().toUpperCase()==NameCol.toString().toUpperCase())
        {
            moveColumn('.table', 1, 8, "big");
        }

        $(".table tr td:last-child").css({"min-width": "155px"});
        $(".table tr td").css({"display": "table-cell"});

    }
}
 function moveColumn(table, from, to, type) {
    var rows = $('tr', table);
    var cols;

    rows.each(function() {
        cols = $(this).children('th, td');
        if(type=="small")
            cols.eq(from).detach().insertBefore(cols.eq(to));
        else if(type=="big")
            cols.eq(from).detach().insertAfter(cols.eq(to));
    });
}