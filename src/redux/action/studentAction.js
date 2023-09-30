
import { STUDENT } from "./../../constants/index"

export const addStudentAction = (data) => {
    return {
        type: STUDENT.STUDENT_ADD,
        payload: data,
    }
}
