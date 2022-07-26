import axios from "axios"
import { getToken } from "../auth/AuthUtil"

const login = (loginDto) => {
    return axios({
        url: "http://localhost:8090/login",
        method: "POST",
        data: loginDto
    })
}

const addUser = (userDto) => {
    return axios({
        url: "http://localhost:8090/users",
        method: "POST",
        data: userDto
    })
}
const editUser = (userDto) => {
    return axios({
        url: "http://localhost:8090/users",
        method: "PUT",
        data: userDto,
        headers: {
            Authorization: getToken()
        }

    })
}
const getUser = (id) => {
    return axios({
        url: "http://localhost:8090/users/" + id,
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}


const listUser = () => {
    return axios({
        url: "http://localhost:8090/users",
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}
const deleteUser = (id) => {
    return axios({
        url: "http://localhost:8090/users/" + id,
        method: "DELETE",
        headers: {
            Authorization: getToken()
        }

    })
}
const deleteLoan = (id) => {
    return axios({
        url: "http://localhost:8090/loans/" + id,
        method: "DELETE",
        headers: {
            Authorization: getToken()
        }

    })
}
const listLoan = () => {
    return axios({
        url: "http://localhost:8090/loans",
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}
const getLoan = (id) => {
    return axios({
        url: "http://localhost:8090/loans/" + id,
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}
const addLoan = (userDto) => {
    return axios({
        url: "http://localhost:8090/loans",
        method: "POST",
        data: userDto,
        headers: {
            Authorization: getToken()
        }
    })
}
const editLoan = (userDto) => {
    return axios({
        url: "http://localhost:8090/loans",
        method: "PUT",
        data: userDto,
        headers: {
            Authorization: getToken()
        }
    })
}
const addInsurance = (userDto) => {
    return axios({
        url: "http://localhost:8090/insurance",
        method: "POST",
        data: userDto,
        headers: {
            Authorization: getToken()
        }
    })
}
const deleteInsurance = (id) => {
    return axios({
        url: "http://localhost:8090/insurance/" + id,
        method: "DELETE",
        headers: {
            Authorization: getToken()
        }

    })
}
const listInsurance = () => {
    return axios({
        url: "http://localhost:8090/insurance",
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}
const getInsurance = (id) => {
    return axios({
        url: "http://localhost:8090/insurance/" + id,
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}
const editInsurance = (userDto) => {
    return axios({
        url: "http://localhost:8090/insurance",
        method: "PUT",
        data: userDto,
        headers: {
            Authorization: getToken()
        }
    })
}
const addEmployee = (userDto) => {
    return axios({
        url: "http://localhost:8090/employee",
        method: "POST",
        data: userDto,
        headers: {
            Authorization: getToken()
        }
    })
}
const listEmployee = () => {
    return axios({
        url: "http://localhost:8090/employee",
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}
const getEmployee = (id) => {
    return axios({
        url: "http://localhost:8090/employee/" + id,
        method: "GET",
        headers: {
            Authorization: getToken()
        }

    })
}
const deleteEmployee = (id) => {
    return axios({
        url: "http://localhost:8090/employee/" + id,
        method: "DELETE",
        headers: {
            Authorization: getToken()
        }

    })
}

const editEmployee = (userDto) => {
    return axios({
        url: "http://localhost:8090/employee",
        method: "PUT",
        data: userDto,
        headers: {
            Authorization: getToken()
        }
    })
}

export default login;
export {
    addUser, listUser, editUser, getUser, deleteUser,
    deleteLoan, listLoan, getLoan, addLoan, editLoan, addInsurance, deleteInsurance, listInsurance, getInsurance,
    editInsurance, listEmployee, getEmployee, deleteEmployee, addEmployee, editEmployee
}