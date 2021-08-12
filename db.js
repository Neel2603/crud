const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:27017/employeeDB', { useNewUrlParser : true }, (err) => {
    if(!err){
        console.log('mongodb connect successfully')
    } 
     else{
         console.log('server is not succeed' + err)
     }   
});

require('./employee.models')