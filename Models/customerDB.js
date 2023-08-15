//   const getAllCustomer= ()=> {
//   onnection.query("SELECT * FROM Customer", (err, rows) => {
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


// const AddReccordCustomer = ()=> {
// Insert a new record into the `users` table
// const data = {
//   Id: "3",
//   First_Name: "John",
//   Last_Name: "gfgf",
//   User_Name: "Shilat",
//   password: 'sdsd',
// };
// connection.query("INSERT INTO Customer (Id, First_Name, Last_Name, User_Name, password ) VALUES (?, ?, ?, ?, ?)", [data.Id, data.First_Name, data.Last_Name, data.User_Name, data.password], (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("Record inserted successfully");
// });
// }



// const removeAdminstrators = ()=> {
//  Delete all records from the `users` table
//  connection.query("DELETE FROM adminstrators", (err, result) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   console.log("All records deleted successfully");
// });
// }



// const getIdadminstratorsById = ()=> {
  // var Id = 1;
  // connection.query(`SELECT * FROM adminstrators WHERE Id = ${id}`, (err, rows) => {
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


 
// const updateadminstrators= ()=> {
//   connection.query("UPDATE adminstrators SET NAME Shira WHERE Last_Nmae = Musay", (err, result) =>{
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("the update success")
//     }
//   } )
// } 