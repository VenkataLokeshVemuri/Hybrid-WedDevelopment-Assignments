document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get form values
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const feedback = document.getElementById('feedback').value;

    // Create feedback list item
    const feedbackItem = document.createElement('li');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Course:</strong> ${course} <br>
        <strong>Feedback:</strong> ${feedback}
        <button class="remove-btn">Remove</button>
    `;

    // Add remove functionality to the button
    feedbackItem.querySelector('.remove-btn').addEventListener('click', function() {
        feedbackItem.remove();
    });

    // Append the feedback item to the feedback list
    document.getElementById('feedbackList').appendChild(feedbackItem);

    // Clear the form
    document.getElementById('feedbackForm').reset();
});
