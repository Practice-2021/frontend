import { gql } from "@apollo/client";

export const GET_TEACHER = gql`
query ExampleQuery($getEmployeeByIdId: ID) {
    getEmployeeById(id: $getEmployeeByIdId) {
        id
        firstName
        lastName
        middleName
        photo
        positions
        academicDegree
        department
        email
        pureLink
        timetable
        subjects
        educationLevel
        qualification
        speciality
        retraining
        experience
        professionalExperience
        projects
        publications
        grants
        }
    }

`;