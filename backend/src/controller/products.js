import Products from "../models/products.js"
export const getActiveSellerProducts = async (req,res,next) => {
    const owner = req.user._id;
    try{
        const allProducts = await Products.find({owner,bidEnded:false});
        // const activeProducts = allProducts.filter((product) => !product.bidEnded);
        res.status(201).json(allProducts);
        
    }catch{
        res.status(400).json({message:"Something Went Wrong"});
    } 
}
export const getInactiveSellerProducts = async (req,res,next) => {
    const owner = req.user._id;
    try{
        const allProducts = await Products.find({owner,bidEnded:true});
        // const inactiveProducts = allProducts.filter((product) => product.bidEnded);

        res.status(201).json(allProducts);
        
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Something Went Wrong"});
    } 
}

export const addProduct = async (req,res,next) => {
    let owner = req.user._id;
    const {name , quantity , basePrice , numberOfDaysToAdd} = req.body;
    const AuctionStartTime = new Date();
    console.log(AuctionStartTime);
    const AuctionEndTime = new Date(AuctionStartTime.setDate(parseInt(AuctionStartTime.getDate()) + numberOfDaysToAdd ? parseInt(numberOfDaysToAdd) : 1));
    console.log(AuctionEndTime);

    try{
        const newProduct = new Products({name , quantity ,owner , basePrice , AuctionStartTime , AuctionEndTime })
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
        const allProducts = await Products.find({bidEnded : false});
        // const activeProducts = allProducts.filter((product) => product.bidEnded);
        res.status(201).json(allProducts);
        
    }catch{
        res.status(400).json({message:"Something Went Wrong"});
    } 
}
export const getInactiveBuyerProducts = async (req,res,next) => {
    try{
        const allProducts = await Products.find({bidEnded:true});
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