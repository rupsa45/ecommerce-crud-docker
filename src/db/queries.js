import {pool} from './index.js'
export const find=async()=>{
    const QUERY="SELECT * FROM products"
    try {
        const client =await pool.getConnection()
        const result =client.query(QUERY);
        return result;
    } catch (error) {
        console.log(error);
        console.log("error occured while find the prducts");
    }
}

export const findById=async(id)=>{
    const QUERY="SELECT * FROM products WHERE id=?"
    try {
        const client =await pool.getConnection()
        const result =await client.query(QUERY,[id]);
        return result[0];
    } catch (error) {
        console.log(error);
        console.log("error occured while find a prduct");
    }
}

export const create=async(title,description,price)=>{
    const QUERY=`INSERT INTO products(title,description,price) values(?,?,?)`
    try {
        const client =await pool.getConnection()
        const result =client.query(QUERY,[title,description,price]);
        return result;
    } catch (error) {
        console.log(error);
        console.log("error occured while creating the prduct");
    }
}
export const deleteById =async(id)=>{
    const QUERY=`DELETE FROM products where id=?`
    try {
        const client =await pool.getConnection()
        const result =client.query(QUERY,[id]);
        return result;
    } catch (error) {
        console.log(error);
        console.log("error occured while deleting the prduct");
    }
}

export const updateById =async(title,description,price,id)=>{
    const QUERY=`UPDATE  products SET title=?,description=?,price=? WHERE id=?`
    try {
        const client =await pool.getConnection()
        const result =await client.query(QUERY,[title,description,price,id]);
        return result[0];
    } catch (error) {
        console.log(error);
        console.log("error occured while updating the prduct");
    }
}