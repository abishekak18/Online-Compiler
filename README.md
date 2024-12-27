![image](https://github.com/user-attachments/assets/e0f14dbc-3de9-4c48-b8d3-69973fc0faf5)

# Online Compiler

An online compiler that supports multiple programming languages like C++, Java, Python, and JavaScript. Users can write code, provide input, and execute it to get the output, all within a browser-based interface.

## Features
- **Code Editor**: A rich text editor using CodeMirror with syntax highlighting, auto-brackets, and a dark theme.
- **Language Support**: Supports C++, Java, Python, and JavaScript.
- **Input/Output Handling**: Users can provide custom inputs and view the output.
- **Bootstrap Integration**: A responsive UI designed with Bootstrap.

---

## Tech Stack
### Frontend:
- **HTML, CSS**: For the UI layout and design.
- **Bootstrap**: For responsive styling.
- **CodeMirror**: For syntax highlighting and code editing.

### Backend:
- **Node.js**: For the server-side runtime.
- **Express.js**: For handling API requests.
- **Compilex**: For code compilation and execution.

---

## Setup Instructions

### Prerequisites:
1. Install [Node.js](https://nodejs.org/) (version 14 or higher).
2. Install a C++ compiler (e.g., `g++`) and ensure it’s added to your system PATH for C++ compilation.

---

### Steps to Run Locally:
1. Clone this repository:

   git clone https://github.com/abishekak18/online-compiler.git
   cd online-compiler


2. Install dependencies:

   npm install
  

3. Serve static files for CodeMirror (adjust the path if necessary):
   Place the `codemirror-5.65.18` folder in the root directory.

4. Start the server:

   node Api.js
  

5. Open the application:
   Navigate to `http://localhost:8000` in your browser.

---

## Deployment Instructions
### On Render (or any hosting service):
1. **Set Build Command**: 
   npm install
 

2. **Set Start Command**:
   node server.js

3. Ensure the `codemirror-5.65.18` folder is included in the deployment.

---

## Project Structure
```plaintext
.
├── codemirror-5.65.18/     # CodeMirror library for syntax highlighting
├── index.html              # Frontend code (HTML + Bootstrap + JS)
├── App.js                  # Node.js server and API
├── package.json            # Node.js dependencies and scripts
```

---

## How to Use
1. Select a programming language from the dropdown (C++, Java, Python, JavaScript).
2. Write your code in the editor.
3. Provide any necessary inputs in the input section.
4. Click the **Run** button to execute the code and see the output.

---

## Future Enhancements
- Add support for more programming languages.
- Integrate a user authentication system for saving code snippets.
- Implement live collaboration between users in the code editor.
- Optimize for deployment in cloud environments.

---

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.

