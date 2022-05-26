const AUTH_API = 'https://web1-api.herokuapp.com/users';

function loadData(request, targetId, sourceId) {
    $.ajax({
        url: 'https://web1-api.herokuapp.com/api/' + request,
        cache: false,
        success: function (data) {
            let jsonData = {
                data: data
            };
            let target = $(targetId);
            let template = Handlebars.templates[sourceId];
            //let source = $(sourceId).html();
            //let template = Handlebars.compile(source);
            $(target).html(template(jsonData));
            console.log(data);
        }
    });
}