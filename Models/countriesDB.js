//add country by query
// const addCountry = (newCountry) => {
//   connection.query("insert into countries (Name) values (?) ", [newCountry.Name], (err,result)=> {
//       if (err) {
//            console.log(err);
//       } else {
//           console.log(result);
//       }
//   })
// }
// app.post("/api/addCountry", (req,res) => {
//   const newCountry = req.body //get the new json country
//   addCountry(newCountry)
//   res.send("finished")
// })



 // const getIdCountriesById = ()=> {
  // var Id = 1;
  // connection.query(`SELECT * FROM countries WHERE Id = ${id}`, (err, rows) => {
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


  
//   const getAllCountries = ()=>{
//   connection.query("SELECT * FROM Countries", (err, rows) => {
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




// const removeCountries = ()=> {
//  Delete all records from the `users` table
//  connection.query("DELETE FROM Countries", (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("All records deleted successfully");
// });
// }



// const updateCountry = ()=> {
//   connection.query("UPDATE Country SET NAME New York WHERE ID = 2", (err, result) =>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("the update success")
//     }
//   } )
// }