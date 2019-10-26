(() => {
    $('#buttonRandomize').on('click', function (e) {
        e.preventDefault();
        $('.surveyForm select[name="select1"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select2"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select3"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select4"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select5"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select6"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select7"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select8"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select9"]').val(Math.ceil(Math.random() * 5));
        $('.surveyForm select[name="select10"]').val(Math.ceil(Math.random() * 5));
    });

    $('#buttonSubmit').on('click', function () {
        $('.surveyForm').submit();
    });

    $('.surveyForm').on('submit', function (e) {
        e.preventDefault();
        if ($(this).find('#name').val().trim().length !== 0) {
            var formDataArr = $(this).serializeArray();
            var formData = {};
            for (let i = 0; i < formDataArr.length; i++) {
                formData[formDataArr[i].name] = formDataArr[i].value;
            }

            $.post("/api/friends", formData, function (data, status) {
                $('#recommendationModal').on('show.bs.modal', function (e) {
                    $('#modalPrint').html(`
                        <h5 class="m-0 mt-3 text-center">${data.name}</h5>
                        <p class="small text-muted">ID: ${data.id}</p>
                    `);
                    $('#modalImage').attr('src', data.photo);
                });
                $('#recommendationModal').on('hidden.bs.modal', function (e) {
                    $(this).find('#modalPrint').html(``);
                    $('#modalImage').attr('src', '');
                });

                $('#recommendationModal').modal({
                    backdrop: 'static'
                });
            });
        }
    });
})();