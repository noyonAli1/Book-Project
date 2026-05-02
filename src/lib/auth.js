// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// import dns from "dns";
// dns.setDefaultResultOrder("ipv4first");

// const client = new MongoClient(process.env.AUTH_DB_URI);
// const db = client.db("bookdbsur");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
    
//     client
//   }),
//   emailAndPassword:{
//     enabled:true
//   }
// });

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

const client = new MongoClient(process.env.AUTH_DB_URI);


await client.connect();

const db = client.db("bookdbsur");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});