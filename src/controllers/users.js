import { ApiError } from "../utils/ApiError.js"
import ApiResponse from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password, profile } = req.body

    if (
        [name, email, password, profile].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }


    res.status(222).json("userDetails")
})

const loginUser = async (req, res) => {

}
// const registerUser = async(req, res)=>{

// }

// const registerUser = async(req, res)=>{

// }

export { registerUser, loginUser }