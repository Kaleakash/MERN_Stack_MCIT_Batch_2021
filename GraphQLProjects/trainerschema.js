let grapql = require("graphql");

let trainer = [
    {tid:1,tname:"Raj",tech:"Java",city:"Bangalore",state:"Kar"},
    {tid:2,tname:"Ajay",tech:"Pyhton",city:"Mumbai",state:"Mh"},
    {tid:3,tname:"Vijay",tech:"Angular",city:"Delhi",state:"Dl"},
    {tid:4,tname:"Ramesh",tech:"React",city:"Kolkata",state:"WB"}
]

let trainerType = new grapql.GraphQLObjectType({

  name:"TrainerDetails",
  fields:{
        tid:{
            type:grapql.GraphQLInt
        },
        tname:{
            type:grapql.GraphQLString
        },
        tech:{
            type:grapql.GraphQLString
        },
        city:{
            type:grapql.GraphQLString
        },
        state:{
            type:grapql.GraphQLString
        }
  }  

})
// this informaiton 
let queryType = new grapql.GraphQLObjectType({
    name:"Query",
    fields:{
        trainerPost:{
            type:trainerType,
            args:{
                id:{type:grapql.GraphQLInt}
            },
            resolve:(source,{id})=> {
                return trainer[id];
            }
            // resolve:() => {
            //     return trainer[0];
            // },
        }
    }
})

let schema = new grapql.GraphQLSchema({
    query:queryType
})

module.exports = schema;