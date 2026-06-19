import mongoose from "mongoose";

type MongooseCache = {
  connection: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalForMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache = (globalForMongoose.mongooseCache ??= {
  connection: null,
  promise: null,
});

// Reuse the connection across hot reloads and warm serverless invocations.
const connectDB = async (): Promise<typeof mongoose> => {
  if (cache.connection && mongoose.connection.readyState === 1) {
    return cache.connection;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not configured");
  }

  if (!cache.promise || mongoose.connection.readyState === 0) {
    cache.promise = mongoose.connect(uri, {
      bufferCommands: false,
    });
  }

  try {
    cache.connection = await cache.promise;
    return cache.connection;
  } catch (error) {
    cache.promise = null;
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default connectDB;
