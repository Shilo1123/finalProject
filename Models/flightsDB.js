

//   const getFlights = ()=> {
//   connection.query("SELECT * FROM flights", (err, rows) => {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//  // Print all records
//     for (const row of rows) {
//       console.log(row);
//     }
//   });
//     }


 
  // const getIdFlightsById = ()=> {
  // var Id = 1;
  // connection.query(`SELECT * FROM flights WHERE Id = ${id}`, (err, rows) => {
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


// const AddReccordfliflights = ()=> {
// Insert a new record into the `users` table
// const data = {
//   Id: "3",
//   Airline_Company_Id: "3",
//   Origin_Country_Id: "3",
//   Destination_Country_Id: "4",
//   Remaining_Tickets: '15',
// };
// connection.query("INSERT INTO flights (Id, Airline_Company_Id, Origin_Country_Id, Destination_Country_Id, Remaining_Tickets) VALUES (?, ?, ?, ?, ?)", [data.Id, data.First_Name, data.Last_Name, data.User_Name, data.password], (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("Record inserted successfully");
// });
// }


// const removeflights = ()=> {
//  Delete all records from the `users` table
//  connection.query("DELETE FROM flights", (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("All records deleted successfully");
// });
// }



// const updateflights = ()=> {
//   connection.query("UPDATE flights SET NAME Shira WHERE Last_Nmae = Musay", (err, result) =>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("the update success")
//     }
//   } )
// } 