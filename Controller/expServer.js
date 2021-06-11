//requires
const express = require('express')
const fileUpload = require('express-fileupload')
const { each } = require('jquery')
const model = require('../Model/getAnomalies')


//set up
const app = express()
app.use(express.urlencoded({
    extended: false
}))
app.use(fileUpload())
app.use(express.static('../View'))
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
// app.set('views', './views');

app.set('view engine', 'ejs');



// //http get - Homepage
// app.get("/", (req, res) => {
//   res.render('index', {title: 'GET /'});
//     // res.render("home.ejs");
// })

//http get
app.get("/", (req, res) => {
    // res.sendFile("index.html")//there name

    // res.sendFile(path.join(__dirname, '../View', 'index.html'));
    res.sendFile('index.html' , { root : __dirname});

})


app.post("/detect", (req, res) => { // /detect
// res.write('Calculation of anomalies according to ' + req.body.algos +':\n')
let algo = req.body.algos.toString()
if(req.files) {
    let file1 = req.files.normalCsv
    let file2 = req.files.anomalCsv

    var normalData = file1.data.toString() //anotherMethod
    var anomalData = file2.data.toString() //anotherMethod

    var result;
    //this callback is invoked AFTER the response arrives
    model.getAnomalies(normalData,anomalData,algo,
    function () {
        const data = JSON.parse(this.responseText);
        res.render('index', {data:data});
        res.end();
    })

    //var messageWait="Please Wait For Results...\n"
    //res.send(messageWait);

    //console.log(messageWait)
//Parsing the returning data from the sever
    //res.write("Please Wait For Results...\n\n")
  // obj = JSON.parse(modelOutput);

  //count the number of values in the json format
//  var count = Object.keys(obj.anomalies).length;

//  document.getElementById(req.body.iframe).innerHTML = "\nBlablabla";

  // for (var i = 0; i < count; i++) {
  //           res.write('\n' + 'The time step is: ' + obj.anomalies[i].timeStep + '\n'
  //                      + 'At columns: ' + obj.anomalies[i].columns + '\n')
  //                      res.write('\n')
  // }

  //console.log(count)


  // for(var i = 0; i < count; i++)
  // {
  //   res.write('The time step is: + ' + obj.anomalies[i].timeStep + '\n'
  //                 + 'The columns are: ' + obj.anomalies[i].columns + '\n')
  // }
  //var data=JSON.parse(result)           
  //console.log("after parse:\n"+data)
  //&&&&var data = JSON.parse('[{"timeStep":"87", "columns":"A, B"}, {"timeStep":"19", "columns":"C, D"}, {"timeStep":"50", "columns":"C, E"}, {"timeStep":"37", "columns":"B, D"}]');
 //
 // var data = JSON.parse('[{"timeStep":"87", "columns":"A, B"}, {"timeStep":"19", "columns":"C, D"}]');
 // res.write(JSON.stringify(data))
 // res.render('home.ejs');

 //&&&&res.render('index', {data:data});
 // res.render("home.ejs", {data: data});
//
    }
    else{
	    res.write('Error in files!\n')
    }
})


//listen port
app.listen(8080)