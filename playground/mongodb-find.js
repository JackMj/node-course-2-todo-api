const {MongoClient,ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find({
    //     _id:new ObjectID('594d8d08ebaca843955c79c0')
    // }).toArray().then((docs) =>{
    //     console.log('Todo');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('unable to fetch todos',err);
    // })

    //   db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todo count : ${count}`);
    //     console.log(JSON.stringify(count, undefined, 2));
    // },(err)=>{
    //     console.log('unable to fetch todos',err);
    // })
     db.collection('Users').find({
       name:'Andrew'
    }).toArray().then((docs) =>{
        console.log('Todo');
        console.log(JSON.stringify(docs, undefined, 2));
    },(err)=>{
        console.log('unable to fetch todos',err);
    })
    // db.close();
})