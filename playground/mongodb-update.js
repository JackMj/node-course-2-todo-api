const {MongoClient,ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({_id:new ObjectID('59538d99994c1f5ad421d573')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // })

     db.collection('Users').findOneAndUpdate({_id:new ObjectID('595391a4994c1f5ad421d701')
    },{
        $set:{
            name:'Jacky'
        },
        $inc:{age:59}
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    })

})