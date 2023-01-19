import Products from "../models/products.js"
export const getActiveSellerProducts = async (req,res,next) => {
    const owner = req.user._id;
    try{
        const allProducts = await Products.find({owner,bidEnded:false}).populate("currentBidder");
        // const activeProducts = allProducts.filter((product) => !product.bidEnded);
        res.status(201).json(allProducts);
        
    }catch{
        res.status(400).json({message:"Something Went Wrong"});
    } 
}
export const getInactiveSellerProducts = async (req,res,next) => {
    const owner = req.user._id;
    try{
        const allProducts = await Products.find({owner,bidEnded:true}).populate("currentBidder");
        // const inactiveProducts = allProducts.filter((product) => product.bidEnded);

        res.status(201).json(allProducts);
        
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Something Went Wrong"});
    } 
}

export const addProduct = async (req,res,next) => {
    let owner = req.user._id;
    // const categoryInfo = {
    //     name : req.body.name,
    //     slug : slugify(req.body.name),
    //     parentID : req.body.parentID,
    //     categoryImage : req.file ? process.env.API + "/public" + "/" + req.file.filename : ""
    // }
    const {name , quantity , basePrice ,description, numberOfDaysToAdd} = req.body;
    if(!name || !quantity  || !basePrice || !description ) return res.status(400).json({message:"Something Went Wrong"});
    const AuctionStartTime = new Date();
    console.log(AuctionStartTime);
    const AuctionEndTime = new Date(AuctionStartTime.setDate(parseInt(AuctionStartTime.getDate()) + numberOfDaysToAdd ? parseInt(numberOfDaysToAdd) : 1));
    console.log(AuctionEndTime);
    const image =  req.file ? process.env.API + "/public" + "/" + req.file.filename : "";
    try{
        const newProduct = new Products({name , quantity ,owner , basePrice ,description, AuctionStartTime , AuctionEndTime ,image })
        newProduct.save((err , data) => {
            if(err){
                res.status(400).json({err});
            }
            else res.status(201).json({newProduct});
        });
    }
    catch(err){
        res.status(400).json({message:"Something Went Wrong Please Try Again Later"});
    }

}

export const getActiveBuyerProducts = async (req,res,next) => {
    try{
        const allProducts = await Products.find({bidEnded : false}).populate("currentBidder");
        // const activeProducts = allProducts.filter((product) => product.bidEnded);
        res.status(201).json(allProducts);
        
    }catch{
        res.status(400).json({message:"Something Went Wrong"});
    } 
}
export const getInactiveBuyerProducts = async (req,res,next) => {
    try{
        const allProducts = await Products.find({bidEnded:true}).populate("currentBidder");
        // const inactiveProducts = allProducts.filter((product) => !product.bidEnded);
        res.status(201).json(allProducts);
        
    }catch{
        res.status(400).json({message:"Something Went Wrong"});
    } 
}

export const boughtProducts = async (req,res,next) => {
    try{
        const allProducts = await Products.find({bidEnded : false}).populate("currentBidder");
        const bought = allProducts.filter((product) => product._id === req.user._id);
        res.status(201).json({bought});
    }catch(err){
        console.log(err)
        res.status(400).json({message:"Something Went Wrong Please Try Again"})
    }
}