const {MongoClient,ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // //deleteMany
    // db.collection('Todos').deleteMany({text:'something to do'}).then((result)=>{
    //     console.log(result);
    // })

    // //deleteOne
    // db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
    //     console.log(result)
    // })

    // //findOneDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // })

     //DeleteMany
    // db.collection('Users').deleteMany({name:'Andrew'}).then((result)=>{
    //     console.log(result);
    // })

    //deleteOne
    db.collection('Users').findOneAndDelete({_id: new ObjectID("59539181994c1f5ad421d6ee")}).then((result)=>{
            console.log(result);
    })

})