//requires
const express = require('express')
const fileUpload = require('express-fileupload')

//set up
const app = express()
app.use(express.urlencoded({
    extended: false
}))
app.use(fileUpload())
app.use(express.static('../View'))
var router = express.Router()

app.set('view engine', 'ejs');


// //http get - Homepage
// app.get("/", (req, res) => {
//   res.render('index', {title: 'GET /'});
//     // res.render("home.ejs");
// })

router.get('/test', function(req, res, next) {
    res.render('expServer', {title: 'GET test'});
});

app.post("/test", (req, res) => { // /detect
    res.write('Calculation of anomalies according to ' + req.body.algos +':\n')
    let algo = req.body.algos
    if(req.files) {
        let file1 = req.files.normalCsv
        let file2 = req.files.anomalCsv

	        var normalData = file1.data.toString() //anotherMethod
	        var anomalData = file2.data.toString() //anotherMethod


//Requesting the model server for the data output
        //}
	/*$.post("http://localhost/3030",{file1:normalData,file2:anomalData,algo:algo},function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
     });
*/

//Parsing the returning data from the sever

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
  // var data = JSON.parse('[{"timeStep":"87", "columns":"A, B"}, {"timeStep":"19", "columns":"C, D"}]');

  // res.write('\n' + normalData + '\n' + anomalData + '\n' + algo)
 //
 var data = JSON.parse('[{"timeStep":"87", "columns":"A, B"}, {"timeStep":"19", "columns":"C, D"}]');
 // res.write(JSON.stringify(data))
 // res.render('home.ejs');

 //res.render('home', {data:data});
 // res.render("home.ejs", {data: data});
 res.render('expServer', {title: 'POST test'});

    }

    else{
	    res.write('Error in files!\n')
    }
    res.end()
})


//listen port
app.listen(8080)
