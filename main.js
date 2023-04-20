$('.add-skill').on('click', (e) => {
    let template = `
        <tr>
            <td><button class="btn btn-xs btn-danger">X</button>${$('.new-skill').val()}</td>
        </tr>
        `;
        $('#skills tbody').append(template);
        $('.new-skill').val('');
});

$('#skills tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000, function() {
        $(this).remove();
    });
});