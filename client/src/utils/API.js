import axios from "axios";

const API = {
  // Gets all books
    getUsers: function(name) {
        return axios.get("/api/users/search/" + name);
    },
    // Gets the book with the given id
    getSchedule: function(id) {
        return axios.get("/api/schedule/" + id);
    },
    // Deletes the book with the given id
    getPet: function(name) {
        console.log("getpet: ", name)
        return axios.get("/api/pet/" + name);
    },
    addUser: function(body) {
        console.log("ADD USER API: ", body)
        return axios.post("/api/users/register", body);
    },
    addPet: function(body) {
        console.log("ADD USER API: ", body)
    return axios.post("/api/pet", body);
    },
    loginUser: async function(body) {
        console.log("LOGIN USER API: ", body.emailAddress, body.userPassword)
        const result = await axios.get('/api/users/login', {
            params: {
                emailAddress: body.emailAddress,
                userPassword: body.userPassword
            }
        })
        console.log("LOGIN GET RESULT:",result)
    }
}
export default API