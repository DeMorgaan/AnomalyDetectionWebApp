# Anomaly Detection Server
      About Our Server
Our server is designed to calculate and display flight data anomalies that the client uploads. How does it happen?\
The client uploads 2 CSV flight files when the first is intended for the server learning (without anomalies)
and the another file is a real flight file that may have anomalies for which the client requests that we check for anomalies.
The server will display for which data an anomaly was discovered and at what time.

In addition, before the client sends his request he selects according to which algorithm he will want the server to consider anomalies.\
The user selects an algorithm for detecting anomalies from a drop-down list that includes an based algorithm regression and hybrid algorithm.

To get the calculation results the customer has to click on a dedicated button to get the output.

    Directory Hierarchy
Model:

View:
  index.html - a html file that holds all the visibility of our server.

Controller:
  expServer.js - a Javascript file which used as a server and get requests from view/client and sends them to model as needed
  and vice versa, sends calculations he receives from the model (the anomalies) to the view.

    Installation and Running Instructions
As a client of our server if you want to run the server you need to browse with http://localhost:8080/  .

As a developer you need an IDE suitable for running Web Application.
In addition, you need some installations:
1. install Node.js with https://nodejs.org/en/download/
2. install npm with https://www.npmjs.com/get-npm
3. install some modules and packages with the following commands in cmd, when the working directory is the ~\webapplication\Controller:
  $ npm install express --save\
  $ npm i express-fileupload
<br>

    Documentation/UML
There is a link to UML charts of the main classes .......

    Video
There is a link to a video where we demonstrate the use of the server ..............

