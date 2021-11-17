import { gql } from "@apollo/client";

export const GET_TEACHERS = gql`
query ExampleQuery {
    getEmployees {
        id
        firstName
        lastName
        middleName
        department
        academicDegree
        }
    }
`;