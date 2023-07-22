import User from '../../modals/users/user.js'
export const register = async(req,res)=>{
    const{MovieName,Description,Year,Rating}=req.body;
    if(!MovieName || !Description|| !Year || !Rating )
    return res.status(400).json({message:"all fields are mandatory"});
    const existinguser = await User.findOne({ MovieName });
    if (existinguser)
    return res.status(400).json({message: 'user already exists'   });
    try{
       
        const result= await User.create({
            MovieName,
            Description,
            Year,
            Rating,
           
        });
        console.log(result);
        res.status(201).json({ 'success':`${MovieName} successfully registered`});
    }catch (error){
        res.status(500).json
        ({message:error.message});
    }
} 