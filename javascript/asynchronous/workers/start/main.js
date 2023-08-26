/* In some cases the workers will not run. This is due to "cross-origin" issue. 
Browsers enforce a "same-origin policy" for security reasons, which means that
web pages loaded from one origin (like file://) cannot directly access resources 
(like web workers) from a different origin (like file:///C:/Users/user/Desktop/Workers/).

To resolve this issue, you should serve your files using a local server rather than directly
opening the HTML file from the file system. This will make the origin consistent and allow your
web worker to access the necessary files.


Here's how you can set up a local server using Node.js:

1. Install Node.js: If you don't have Node.js installed, download and install it from the official website: https://nodejs.org/

Create a Server:

2. Open your command prompt or terminal.
Navigate to the directory containing your HTML, JavaScript, and CSS files.

3. Install a simple HTTP server by running the command: npm install -g http-server
(you might need to prefix this command with sudo on macOS or Linux).
Once installed, start the server with the command: http-server.

4. Access the Server: After starting the server, you'll see output that
indicates which local address and port your server is using. For example, 
it might say: Available on http://127.0.0.1:8080 or similar.

5. Access Your Files: Open your web browser and visit the address shown in the terminal,
such as http://127.0.0.1:8080. This should load your HTML file, and your code should work 
without the cross-origin issue.

6. Remember to replace any references to local files in your code with the appropriate URLs based on the server's address and port.

By serving your files through a local server, you ensure that all resources are accessed from the
same origin, eliminating the cross-origin restriction and allowing your web worker to function correctly.
*/
