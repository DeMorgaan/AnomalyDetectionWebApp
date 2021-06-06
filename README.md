# Anomaly Detection Server
      About Our Server
Our server is designed to calculate and display flight data anomalies that the client uploads. How does it happen?\
The client uploads 2 CSV flight files when the first is intended for the server learning (without anomalies)
and the another file is a real flight file that may have anomalies for which the client requests that we check for anomalies.
The server will display for which data an anomaly was discovered and at what time.

In addition, before the client sends his request he selects according to which algorithm he will want the server to consider anomalies.\
The user selects an algorithm for detecting anomalies from a drop-down list that includes an based algorithm regression and hybrid algorithm.

To get the calculation results the customer has to click on "send" button to get the output.

<img src="https://user-images.githubusercontent.com/49268743/120936831-b2eac080-c712-11eb-8b43-0cee511c9a03.png">


    Directory Hierarchy
Model:\
      *getAnomalies.js - a js file which connects to the server of anomalies detectors and return to controller the output.\
      *a folder called DetectorHTTPServer-main which contains:\
	-Server.cpp\
      -a folder which calls detectorFiles which contains:\
		anomaly_detection_util.cpp/.h\
		AnomalyDetector.h\
		CLI.cpp/.h\
		commands.h\
		HybridAnomalyDetector.cpp/.h\
		minCircle.cpp/.h\
		SimpleAnomalyDetector.cpp/.h\
		timeseries.cpp/.h\
      -a library which calls mongoose which contains:\
		mongoose.c/.h
   
View:\
  index.html - a html file that holds all the visibility of our server.\
  index.ejs - a ejs file that holds all the visibility of our server.\
  index.css - a css file that holds all the visibility of our server.\
  iframe.html - a html file that holds all the visibility of our server.

Controller:\
  -expServer.js - a Javascript file which used as a server and get requests from view/client and sends them to model as needed
  and vice versa, sends calculations he receives from the model (the anomalies) to the view.\
  -views\\index.ejs

    Installation and Running Instructions
As a client of our server if you want to run the server you need to browse with http://localhost:8080/  .

As a developer you need an IDE suitable for running Web Application.
In addition, you need some installations:
1. install Node.js with https://nodejs.org/en/download/
2. install npm with https://www.npmjs.com/get-npm
3. install some modules and packages with the following commands in cmd, when the working directory is the ~\webapplication\Controller:\
  $ npm install express --save\
  $ npm i express-fileupload
<br>

    Documentation/UML
There is a link to UML charts of the main classes https://lucid.app/lucidchart/8d5ab3a0-95f6-4fae-9831-047a0e0129cd/view?page=0_0#https://lucid.app/lucidchart/8d5ab3a0-95f6-4fae-9831-047a0e0129cd/view?page=0_0%23

    Video
There is a link to a video where we demonstrate the use of the server ..............
