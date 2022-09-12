const {ApolloServer,gql} = require('apollo-server')



// Scalar Type =>  String , Int, Float, Boolean, ID 
const typeDefs = gql`
type Query{
    hello:String
    numberOfCar:Int
    price: Float
    engineRunning:Boolean
}
`

const resolvers = {
    Query: {
        hello: () => {
            return "World...!!!"
        },
        numberOfCar: () => {
            return 30
        },
        price:()=>{
            return 550000.50
        },
        engineRunning:()=> true
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url})=>{
    console.log("Server is Started "+ url)
})