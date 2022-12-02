//this is a config file
import { Client, Account, Databases } from "appwrite";

const client = new Client();


//have env var for this
client
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('6389cf4cc4308d72e141') // Your project ID
;

export const account = new Account(client)

//have env var for this
export const databases =new Databases(client, '6389e30aead8daca1ad0')