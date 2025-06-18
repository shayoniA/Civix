module.exports=(req,res,next,err)=>{
    console.error(err.stack);
    res.status(500).json({error: 'Internal Server Error'});
};