import express from 'express'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())


dotenv.config();

const USER= process.env.userDb;
const HOST=process.env.hostDb;
const DATABASE=process.env.databaseDb;
const PASSWORD=process.env.passwordDb;



const pool = mysql.createPool({
    user: USER ,
    host: HOST,
    database: DATABASE,
    password: PASSWORD
})

//display employee info
const getEmployeeDb = async () => {
    let [data] = await pool.query('SELECT * FROM employee;')
    return data
}

app.get('/employee',async(req,res)=>{
    res.json({employee:await getEmployeeDb()})
})

//query - display a single employees info
const getOneEmployeeDb= async(employee_id)=>{
    let [data]= await pool.query('SELECT * FROM employee  WHERE employee_id = ?;',[employee_id])
    return data 
}

app.get('/employee/:employee_id', async (req, res) => {
    const employee_id = req.params.employee_id;
    res.json({ employee: await getOneEmployeeDb(employee_id) });
});

//add new employee info
const postEmployeeDb = async (employee_id, first_name, last_name, email, phone_number, department, salary) => {
    await pool.query('INSERT INTO `employee` (`employee_id`, `first_name`, `last_name`, `email`, `phone_number`, `department`, `salary`) VALUES (?,?,?,?,?,?,?);', [employee_id, first_name, last_name, email, phone_number, department, salary]);
    return getEmployeeDb();
};

app.post('/employee', async (req, res) => {
    const { employee_id, first_name, last_name, email, phone_number, department, salary } = req.body;
    await postEmployeeDb(employee_id, first_name, last_name, email, phone_number, department, salary);
    const employees = await getEmployeeDb();
    res.json({ employees });
});

// delete employee info
const deleteEmployeeDb= async(employee_id)=>{
    await pool.query('DELETE FROM `employee` WHERE (`employee_id` = ?);', [employee_id] );
    return getEmployeeDb();
}

app.delete('/employee', async(req,res)=>{
    await deleteEmployeeDb(req.body.employee_id);
    const employees = await getEmployeeDb();
    res.json({ employees });
})

//update employee info 
const patchEmployeeDb= async(first_name,last_name,email,phone_number,department,salary,employee_id)=>{
    await pool.query ('UPDATE `employee` SET `first_name` = COALESCE(?, first_name),`last_name` = COALESCE(?, last_name),`email` = COALESCE(?, email),`phone_number` = COALESCE(?, phone_number), `department` = COALESCE(?, department), `salary` = COALESCE(?, salary) WHERE `employee_id` = ?', [first_name,last_name,email,phone_number,department,salary,employee_id]);
    return getEmployeeDb();
}

app.patch('/employee',async(req,res)=>{
    let{first_name,last_name,email,phone_number,department,salary,employee_id}=req.body;
    await patchEmployeeDb(first_name,last_name,email,phone_number,department,salary,employee_id);
    const employees = await getEmployeeDb();
    res.json({ employees });
})

// server host
app.listen(2006, () => {
    console.log('http://localhost:2006');

})