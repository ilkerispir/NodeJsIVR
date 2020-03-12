const express = require('express');
const os = require('os');
const app = express();

var employee = {
  1 : {
    name : "ilker",
    lastname : "ispir"
  },
  2 : {
    name : "fatih can",
    lastname : "keser"
  }
}
 
app.get('/users', function (req, res) {
  let id = req.query.id;
  console.log(id);
  console.log(typeof id);
  let customer = employee[id];
  if(customer){
      customer.success = true;
      res.status(200).json(customer);
  }else{
    res.status(404).json({success: false, message: "customer bulunamadı."})
  }
})

app.get('/computername', function (req, res) {  
    
    const computerName = os.hostname();
    
    res.json({name:computerName, success:true});
})
 
app.listen(8080);

