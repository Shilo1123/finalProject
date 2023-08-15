//add airline_companies by query
// const addairline_companies = (newairline_companies) => {
//   connection.query("insert into airline_companies (Name) values (?) ", [airline_companies.Name], (err,result)=> {
//       if (err) {
//            console.log(err);
//       } else {
//           console.log(result);
//       }
//   })
// }
// app.post("/api/addairline_companies", (req,res) => {
//   const newairline_companies = req.body //get the new json airline_companies
//   addairline_companies(newairline_companies)
//   res.send("finished")
// })



 // const getIdairline_companiesById = ()=> {
  // var Id = 1;
  // connection.query(`SELECT * FROM airline_companies WHERE Id = ${id}`, (err, rows) => {
  //   if (err) {
  //     console.log(err);
  //     process.exit(1);
  //   }
  //   // Print all records
  //   for (const row of rows) {
  //     console.log(row);
  //   }
  // });
  // }


  
//   const getAllairline_companies= ()=>{
//   connection.query("SELECT * FROM airline_companies", (err, rows) => {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//  // Print all records
//     for (const row of rows) {
//       console.log(row);
//     }
//   });
//   }




// const removeairline_companies = ()=> {
//  Delete all records from the `users` table
//  connection.query("DELETE FROM airline_companies", (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("All records deleted successfully");
// });
// }



// const updateairline_companies = ()=> {
//   connection.query("UPDATE airline_companies SET NAME New York WHERE ID = 2", (err, result) =>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("the update success")
//     }
//   } )
// }