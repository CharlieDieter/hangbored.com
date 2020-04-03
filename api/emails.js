const url = require("url")

const MongoClient = require("mongodb").MongoClient
// Create cached connection variable
let cachedDb = null

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  const db = await client.db(url.parse(uri).pathname.substr(1))
  cachedDb = db
  return db
}

module.exports = async (req, res) => {
  if (req.method !== "POST") res.status(405).end()
  if (!(req.body && req.body.email)) res.status(422).end()

  try {
    const db = await connectToDatabase(process.env.MONGODB_URI)
    const collection = db.collection("emails")
    collection.insertOne(req.body, (err, data) => {
      if (err) {
        res.status(422).send(err)
      } else {
        res.send("success")
      }
    })
  } catch (error) {
    res.send(400)
  }
}
