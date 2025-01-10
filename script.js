document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button[type="button"]');
    const submitButton = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');
    const form = document.getElementById('checkin-form');

    let responses = {};

    // Event listener for each button click
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const questionGroup = button.closest('.button-group');
            const question = questionGroup.getAttribute('data-question');
            const value = button.getAttribute('data-value');

            // Store the response in the responses object
            responses[question] = value;

            // Optionally, style the button to indicate selection
            button.classList.add('selected');

            // Reset other buttons in the same group
            const otherButtons = questionGroup.querySelectorAll('button');
            otherButtons.forEach(btn => {
                if (btn !== button) {
                    btn.classList.remove('selected');
                }
            });
        });
    });

    // Function to submit the form and display analysis
    window.submitForm = function() {
        const formData = responses;
        let analysis = "";

        // Feelings and Emotions
        if (formData.feeling === "bad" || formData.mood === "sad") {
            analysis += "It seems like you're struggling today. You may be experiencing symptoms of depression. It's important to reach out to someone or take time for self-care. 💙\n";
        }

        if (formData.anxiety === "high" || formData.stress === "high") {
            analysis += "You're feeling quite stressed or anxious right now. Consider finding ways to manage these feelings, like mindfulness or relaxation exercises. 🧘‍♀️\n";
        }

        // Low energy and poor sleep can indicate burnout or depression
        if (formData.energy === "low" && formData.sleep === "poorly") {
            analysis += "You're feeling drained with little rest. Lack of sleep and low energy could be signs of burnout or depression. Try to prioritize sleep and rest. 😴\n";
        }

        // Social isolation and lack of support
        if (formData.social === "isolated" || formData.support === "unsupported") {
            analysis += "You might be feeling isolated or unsupported. Loneliness can contribute to mental health struggles, so try reaching out to friends, family, or a support group. 🤝\n";
        }

        // Concentration and productivity struggles can indicate anxiety or depression
        if (formData.concentration === "distracted" || formData.productivity === "unproductive") {
            analysis += "Struggling with concentration and feeling unproductive may suggest anxiety, depression, or simply stress. It's okay to take breaks and reassess your workload. 🧠\n";
        }

        // Appetite and self-esteem issues
        if (formData.appetite === "poor" || formData.selfEsteem === "low") {
            analysis += "Low appetite and self-esteem could indicate emotional distress or depression. It’s important to nourish your body and practice self-compassion. 💔\n";
        }

        // Hopefulness and emotions
        if (formData.hopefulness === "hopeless") {
            analysis += "Feeling hopeless can be a strong indicator of depression. Please seek support from a mental health professional or talk to someone you trust. 🌧️\n";
        }

        // Lack of happiness and emotions
        if (formData.happiness === "sad" || formData.emotions === "overwhelmed") {
            analysis += "It seems like you're experiencing sadness or emotional overwhelm. This could be related to anxiety, depression, or stress. Consider talking to a professional to explore these feelings. 😔\n";
        }

        // Physical health and well-being
        if (formData.physicalHealth === "poor" && formData.mood === "sad") {
            analysis += "Your physical health and mood might be affecting each other. Poor physical health can sometimes contribute to mental health struggles, and vice versa. It’s important to take care of both. 🏥\n";
        }

        // General uplifting response if everything is fine
        if (formData.feeling === "good" && formData.mood === "happy") {
            analysis += "You're feeling great today! It's wonderful to see you in high spirits. Keep up the positivity and continue doing what brings you joy! 😄\n";
        }

        // Display the result
        resultContainer.textContent = analysis;
        resultContainer.style.display = 'block';
    };

    // Optional: Submit button event listener if you want to trigger the submitForm on click
    submitButton.addEventListener('click', submitForm);
});
