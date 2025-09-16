// const asyncHandler =  () => {}

export { asyncHandler };
// const asyncHandler = (fn) => async () => {}
// const asyncHandler = (fn) =>{async () => {}}

const asyncHandler = (fn) => async () => {
  try {
    await fn(next,req,res);{
        return res.status(200).json({

        })
    }
  } catch (error) {
    error.status(error.code || 500).json({
        success:false,
        message:error.message
    });
  }
};
