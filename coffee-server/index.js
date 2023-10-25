const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()
// middleware
app.use(cors());
app.use(express.json())

const {
    MongoClient,
    ServerApiVersion,
    ObjectId
} = require('mongodb');

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9nwpjka.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();

        const coffeeCollection = client.db("coffeeDB").collection("coffee");

        app.get('/coffee', async (req, res) => {
            const cursor = coffeeCollection.find();
            const result = await cursor.toArray();
            res.send(result)
        })

        app.get('/coffee/:id',async(req, res)=>{
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await coffeeCollection.findOne(query);
            res.send(result);
        })

        app.post('/coffee', async (req, res) => {
            const newCoffee = req.body;
            console.log(newCoffee);
            const result = await coffeeCollection.insertOne(newCoffee);
            res.send(result);
        })

        app.delete('/coffee/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)};
            const result = await coffeeCollection.deleteOne(query);
            res.send(result);
        })

      

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// route start

app.get('/', (req, res)=>{
    res.send('coffee server is running');
})

app.listen(port, ()=>{
    console.log(`coffee server is running on port: ${port}`);
})