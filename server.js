const express = require('express');
const app = express();

//employee = { "success":"true", "id":1, "name":"ilker" };

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


//select * from employe where id=1
 
app.get('/users', function (req, res) {
  let id = req.query.id;
  let customer = employee[id];

  if(customer){
      customer.success = true;
      res.json(customer);
  }else{
    res.status(404).json({success: false, message: "customer bulunamadı."})
  }
})
 
app.listen(8080);

