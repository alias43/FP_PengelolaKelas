import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI || '');
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error(`Error: ${err}`);
      process.exit(1); // Keluar jika koneksi gagal
    }
  };
  
  export default connectDB;
  