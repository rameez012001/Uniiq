$(document).ready(function() {
    $("#contactForm").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Serialize the form data into a format that can be sent via AJAX
        var formData = $(this).serialize();

        $.ajax({
            type: "POST", // Change this to your preferred method (POST or GET)
            url: "process_contact_form.php", // Replace this with the URL to your server-side script
            data: formData,
            success: function(response) {
                // On success, display the response message
                $("#responseMessage").html(response);
            },
            error: function(xhr, status, error) {
                // On error, display an error message
                $("#responseMessage").html("Error: " + error);
            }
        });
    });
});