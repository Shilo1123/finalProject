

//   const gettickets = ()=> {
//   connection.query("SELECT * FROM tickets", (err, rows) => {
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


 
  // const getIdticketsById = ()=> {
  // var Id = 1;
  // connection.query(`SELECT * FROM tickets WHERE Id = ${id}`, (err, rows) => {
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


// const AddReccordflitickets = ()=> {
// Insert a new record into the `users` table
// const data = {
//   Id: "3",
//   Flight_Id: "3",
//   Customer_Id: "3",
// };
// connection.query("INSERT INTO tickets (Id, Airline_Company_Id, Origin_Country_Id) VALUES (?, ?, ?)", [data.Id, data.Flight_Id, data.Customer_Id], (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("Record inserted successfully");
// });
// }


// const removetickets = ()=> {
//  Delete all records from the `users` table
//  connection.query("DELETE FROM tickets", (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("All records deleted successfully");
// });
// }



// const updatetickets = ()=> {
//   connection.query("UPDATE tickets SET Customer_Id Shira WHERE Flight_Id = 5", (err, result) =>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("the update success")
//     }
//   } )
// } 