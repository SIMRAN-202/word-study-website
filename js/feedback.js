$(document).ready(function () {
    $("#feedbackForm").on("submit", function (e) {
        e.preventDefault(); // Prevent form submission

        // Get input values
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const feedback = $("#feedback").val().trim();

        // Reset previous error messages
        $(".error-message").text("");

        // Validation for Name
        if (!name) {
            $("#nameError").text("Name is required!");
            return;
        }

        // Validation for Email
        if (!email) {
            $("#emailError").text("Email is required!");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            $("#emailError").text("Please enter a valid email address!");
            return;
        }

        // Validation for Feedback
        if (!feedback) {
            $("#feedbackError").text("Feedback is required!");
            return;
        }

        // Simulate successful form submission
        $("#successMessage").show();
        $("#errorMessage").hide();
    });
});
