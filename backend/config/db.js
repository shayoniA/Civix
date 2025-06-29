const {Pool} =require('pg');
const pool= new Pool({
    connectionString:"postgresql://civix_01_9k2m_user:53nGi9j8nkGXZVNfDvwJLKdmK0WfhEk9@dpg-d19f0f2dbo4c73d8bt6g-a.oregon-postgres.render.com/civix_01_9k2m",
    ssl:{
        rejectUnauthorized:false
    },
});

module.exports=pool;