const users = []
const regex = /^[^a-zA-Z0-9]+$/;
const addUser = (id, name, room) => {
    const existingUser = users.find(user => user.name.trim().toLowerCase() === name.trim().toLowerCase())
    if (existingUser) return { error: "Username has already been taken" }
    if (!name && !room) return { error: "Username and room are required" }
    if (name.length < 3) return { error: "Username must be at least three characters" }
    if (room.length < 3) return { error: "Room name must be at least three characters" }
    if (!name && !regex.test(name)) return { error: "Username must be alphanumeric" }
    if (!room && !regex.test(room)) return { error: "Room name must be alphanumeric" }
    const user = { id, name, room }
    users.push(user)
    return { user }
}
const getUser = (id) => {
    let user = users.find(user => user.id == id)
    return user
}
const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) return users.splice(index, 1)[0];
}
const getUsers = (room) => users.filter(user => user.room === room)

module.exports = { addUser, getUser, deleteUser, getUsers }
