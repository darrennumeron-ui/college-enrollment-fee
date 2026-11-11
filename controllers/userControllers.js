exports.createUser=(req,res)=>{
    const {id,name,course,units,tuition}=req.body;
    connection.query('INSERT INTO enrollment_bills (student_id,student_name,course_program,units_enrolled,tuition_total) VALUES (?,?,?,?,?)',[id,name,course,units,tuition],(err,result)=>{
        if(err) throw err;
        res.json({message:'User created successfully',id:result.insertId});
    });
  }

//delete
exports.deleteUser=(req,res)=>{
    connection.query('DELETE FROM enrollment_bills',(err,result)=>{
        if(err)throw err;
        if(result.affectedRows>0)
            res.json({message:"User deleted successfully"});
        else res.status(404).json({message:"User not found"});
    });}

