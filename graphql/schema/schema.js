// import required data from graphql 

import { GraphQLObjectType, GraphQLSchema } from "graphql";


// import query from graphql query
// import { query } from "../queries/query.js";

// define query types from graphql query
import { userType, postType } from "../types/types.js";

const queryType=new GraphQLObjectType({
    name:"queryType",
    description:" all the query types",
    fields:{

    }
})
// import mutations from graphql query
// import { mutation } from "../mutations/mutation.js";
const mutationType =new  GraphQLObjectType({
    name: "mutationType",
    description: " all the query types",
    fields: {

    }
})
const schema =new GraphQLSchema({
query:queryType,
mutation:mutationType
}) 
export default schema

