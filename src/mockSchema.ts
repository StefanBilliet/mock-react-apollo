import { makeExecutableSchema, addMockFunctionsToSchema, MockList } from 'graphql-tools';
import * as casual from 'casual-browserify';
import { typeDefinitions } from './typeDefinitions';

const schema = makeExecutableSchema({ typeDefs: typeDefinitions });

const mocks = {
  Query: () => ({
    users: () => new MockList([1, 10])
  }),
  User: () => ({
    givenName: casual.first_name,
    familyName: casual.last_name,
    age: () => casual.double(0, 100),
    quotation: () => casual.double(0, 5),
    tasks: () => new MockList([1, 5])
  }),
  Task: () => ({
    title: casual.title,
    description: casual.description
  })
};

// Add mocks, modifies schema in place
addMockFunctionsToSchema({ schema, mocks });

export { schema };