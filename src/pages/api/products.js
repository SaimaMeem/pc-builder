const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ygjfj.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        // console.log("database connection established");

        const productsCollection = await client
            .db("pc-builder")
            .collection("products");
        if (req.method === "GET") {
            const products = await productsCollection.find({}).toArray();
            res.send({ message: "success", status: 200, data: products });
        }
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

export default run;
