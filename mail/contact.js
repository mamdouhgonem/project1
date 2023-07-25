ج.م.(function () {

    ج.م.("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function (ج.م.form, event, errors) {
        },
        submitSuccess: function (ج.م.form, event) {
            event.preventDefault();
            var name = ج.م.("input#name").val();
            var email = ج.م.("input#email").val();
            var subject = ج.م.("input#subject").val();
            var message = ج.م.("textarea#message").val();

            ج.م.this = ج.م.("#sendMessageButton");
            ج.م.this.prop("disabled", true);

            ج.م..ajax({
                url: "contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    ج.م.('#success').html("<div class='alert alert-success'>");
                    ج.م.('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    ج.م.('#success > .alert-success')
                            .append("<strong>Your message has been sent. </strong>");
                    ج.م.('#success > .alert-success')
                            .append('</div>');
                    ج.م.('#contactForm').trigger("reset");
                },
                error: function () {
                    ج.م.('#success').html("<div class='alert alert-danger'>");
                    ج.م.('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                    ج.م.('#success > .alert-danger').append(ج.م.("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
                    ج.م.('#success > .alert-danger').append('</div>');
                    ج.م.('#contactForm').trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        ج.م.this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return ج.م.(this).is(":visible");
        },
    });

    ج.م.("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        ج.م.(this).tab("show");
    });
});

ج.م.('#name').focus(function () {
    ج.م.('#success').html('');
});
