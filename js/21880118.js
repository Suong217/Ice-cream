function loadData(request, targetId, sourcrId) {
    $.ajax({
        url: 'https://web1-api.herokuapp.com/api/' + request,
        cache: false,
        success: function (data) {
            let jsonData = {
                data: data
            };
            let target = $(targetId);
            let source = $(sourcrId).html();
            let template = Handlebars.compile(source);``
            $(target).html(template(jsonData));
            console.log(data);
        }
    });
}