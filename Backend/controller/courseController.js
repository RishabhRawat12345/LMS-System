
import  cloudinary from "../middleware/Cloudinary.js";
import Course from "../models/courseModel.js";

export const createCourse = async (req, res) => {
  try {
    const { title, categorie,price } = req.body;

    if (!title || !categorie) {
      return res.status(400).json({
        message: "title or Category is missing"
      });
    }

    const creator = req.userId;

    const course = await Course.create({
      title,
      categorie,
      creator,
      price
    });

    res.status(200).json({
      message: "Course is created successfully",
      course
    });

  } catch (error) {
    res.status(500).json({
      message: `course Creation error ${error}`
    });
  }
};


export const getCourse=async()=>{

    try {
        const course=await Course.find({isPublised:true});
        if(!course){
            return res.status(400).json({message:"empty courses"})
        }
        return res.status(200).json({message:'the course',course});
    } catch (error) {
        return res.status(500).json({message:`Course getting error ${error}`})
    }
}

export const getCreatorCourse=async(req,res)=>{
    try {
        const userId= req.userId;
        console.log("the user id ",userId)
        const creatorCourse=await Course.find({creator:userId})
        if(!creatorCourse){
          return res.status(400).json({message:"creator Course is not found"});
        }

        return res.status(200).json({message:"Course Found Successfully",creatorCourse})
    } catch (error) {
        return res.status(500).json({message:`Creator Course finding error ${error}`})
    }
}

export const EditCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    console.log("Course ID:", courseId);

    const {
      title,
      subtitle,
      description,
      categorie,
      level,
      price,
      isPublised,
    } = req.body;

    console.log("Edit body:", req.body);

    const course = await Course.findById(courseId);

    if (!course) {
      return res
        .status(404)
        .json({ message: "Course not found" });
    }

    let thumbnailUrl = course.thumnail;

    if (req.file) {
      const uploaded =
        await cloudinary.uploader.upload(
          req.file.path,
          { folder: "courses" }
        );

      thumbnailUrl = uploaded.secure_url;
    }

    const updatedData = {
      title,
      subtitle,
      description,
      categorie,
      level,
      price,
      isPublised,
      thumnail: thumbnailUrl,
    };

    const courseData =
      await Course.findByIdAndUpdate(
        courseId,
        updatedData,
        { new: true }
      );

    return res.status(200).json({
      message: "Course updated successfully",
      courseData,
    });
  } catch (error) {
    console.log("Update Error:", error);

    return res.status(500).json({
      message: "Course update error",
      error: error.message,
    });
  }
};


export const getCourseById=async(req,res)=>{
    try {
        const {courseId}=req.params;
        const course=await Course.findById(courseId);
         if(!course){
            return res.status(400).json({message:"course is not found"})
        }

        return res.status(200).json({message:'Course is found',course});
    } catch (error) {
        return res.status(500).json({message:`Error in Course Find By Id ${error}`})
    }
}


export const deleteCourse=async(req,res)=>{
    try {
        const {courseId}=req.params;
        console.log("the delete id",req.params);
        const course=await Course.findByIdAndDelete(courseId,{new:true});

        if(!course){
            return res.status(400).json({message:"course is not present already"});
        }
        return res.status(200).json({course,message:'course is deleted successfully'})
    } catch (error) {
        return res.status(500).json({message:`Error is come to delete a course ${error}`})
    }
}