const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5959605cfb174f40d69cb5a2';

// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos)
// })

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// })

// if(!ObjectID.isValid(id))
// {
//     console.log('Is not valid');
// }

// Todo.findById(id).then((todo)=>{
//     if(!todo)
//     {
//         return console.log('ID not found');    
//     }
//     console.log('Todo',todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user)=>{
    if(!user)
    {
        return console.log('user Id not found');    
    }
    console.log('user',user);
}).catch((e) => console.log(e));