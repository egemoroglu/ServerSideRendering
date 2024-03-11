
//Add onClick
$('button[type="submit"]').on('click', function(event) {
    event.preventDefault();
    const title = $('input[name="title"]').val();
    const assignee = $('input[name="assignee"]').val();

    $.ajax({
        url: '/add',
        method: 'POST',
        data: {
            title: title,
            assignee: assignee,
            done: false
        }
    })
});
