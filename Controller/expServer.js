//requires
const express = require('express')
const fileUpload = require('express-fileupload')
//const model = require('../model/SearchInFile')
//set up

//var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })

const app = express()
app.use(express.urlencoded({
    extended: false
}))
app.use(fileUpload())
app.use(express.static('../View'))

//http get
app.get("/", (req, res) => {
    res.sendFile("index.html")//there name
})

//http post
app.post("/detect", (req, res) => { // /detect
    res.write('Calculation of anomalies according to ' + req.body.algos +':\n')
    var algo = req.body.algos
    if(req.files) {

     let file1 = req.files.normal_CSV;
  //    let file2 = req.files.anomal_CSV;

        console.log(req.files.length)


    //    let file2 = req.files.ano;

       var secData = file1.data.toString();

    //    var firstFileData = file2.data.toString();

        if (algo.localeCompare("regression")) {
	        //detection phase
        //  console.log(file1.data.toString());
        }
        else if (algo.localeCompare("hybrid")){
	        //detection phase
        }
        else{
    	    res.write('Invalid Algorithm!\n')
        }

        res.write('The algorithm is: ' + algo + '\n The first file is: \n' + secData + 'The second file is: ')

    }
    else{
	    res.write('Error in files!\n')
    }
    res.end()
})

//listen port
app.listen(8080)
