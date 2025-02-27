import {Pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DATABASE_URL);

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function testDBConnection() {
    try {
        await pool.query('SELECT 1');
        console.log('Database connected successfuly!');
    } catch (error) {
        console.error('Error connecting Database: ', error);
    }
}

testDBConnection();

export default pool;