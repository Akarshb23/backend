// so we use try catch block in many places , so instead of hardcoding it everywhere , we can make a utility function 
// in this repo i will use this function in many places (hopefully) , but i have done it manually at one place i.e. the connectDB function
// just to know how to hardcode it as well
// wrapper function
const asyncHandler = (fn) => async (req , res , next) => {
    try {
        await fn(req , res , next)
    } catch (error) {
        res.status(error.code || 500).json({
            success : false ,
            message : error.message
        })
    }

}

export {asyncHandler}