const asyncHandler = (requestHandler) => {
     return (request, response, next) => {
          Promise.resolve(requestHandler(request, response, next))
          .catch((error) => next(error))
     }
}


/*
Expain:
 const asyncHandler = () => {}
 const asyncHandler = (func) => () => {}
const asyncHandler = (func) => async (req, res, next) => {}
*/
// const asyncHandler = (fn) => async (req, res, next) => {
//      try {
//           await fn(req, res, next)
//      } catch (error) {
//           res.status(error.code || 500).json({
//                success: false,
//                message: error.message
//           })
//      }
// }