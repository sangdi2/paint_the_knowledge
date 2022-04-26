import db from '../db/index.js'

export async  function getuser(req,res){
    const [rows]=await db.query('select id,username from user')
    res.send({
        status:200,
        message:'请求成功',
        data:rows
    })
}