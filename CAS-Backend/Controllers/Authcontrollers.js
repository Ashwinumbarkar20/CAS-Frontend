const home=async (req,res)=>{
    try
    {
        res.status(200).send("in home mehthod")
    }
    catch(error)
    {res.status(400).send("Error occured")}

}

const register=async (req,res)=>{
    try
    {
        res.status(200).send("in register mehthod")
    }
    catch(error)
    {res.status(400).send("Error occured")}
    }
    module.exports={home,register}