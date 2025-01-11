from flask import Flask, render_template, request, flash
from werkzeug.security import generate_password_hash

app = Flask(__name__)

# Secret key for session management and flashing messages
app.secret_key = 'your_secret_key'

# Dummy user store, in a real app, use a database
users = []

@app.route('/')
def home():
    return render_template('home.html')  # Assuming you have a home page template

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        password = request.form['password']
        
        # Check if the username already exists (a real app would use a database)
        if any(user['username'] == username for user in users):
            flash('Username already taken, please choose another one.', 'error')
        else:
            # Hash the password before storing (important for security)
            hashed_password = generate_password_hash(password)
            users.append({'username': username, 'password': hashed_password})
            flash('Sign up successful! You can now log in.', 'success')
    
    # Render the sign-up page again after POST
    return render_template('signup.html')

if __name__ == '__main__':
    app.run(debug=True)
