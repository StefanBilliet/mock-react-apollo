export const typeDefinitions = `
type Query {
  users: [User!]!
}

type User {
  familyName: String!
  givenName: String!
  age: Float!
  quotation: Float!
  tasks: [Task!]!
}

type Task {
  title: String!
  description: String!
}
`;