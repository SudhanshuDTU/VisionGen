import mongoose from 'mongoose';

const connectDB = async(url)=>{
  mongoose.set('strictQuery',true);
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
}
export default connectDB;