// Step 1: Include Mongoose
const mongoose = require('mongoose');

// Step 2: MongoDB Atlas Connection URI (replace <username>, <password>)
const MONGODB_URI = 'mongodb://v0idheaven:Varun321@ac-f3jlmyx-shard-00-00.8sn1nyg.mongodb.net:27017,ac-f3jlmyx-shard-00-01.8sn1nyg.mongodb.net:27017,ac-f3jlmyx-shard-00-02.8sn1nyg.mongodb.net:27017/?ssl=true&replicaSet=atlas-1362he-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(MONGODB_URI, {
  // complete the code to connect to the DB correctly
    

}).then(() => {
  console.log('✅ Connected to MongoDB Atlas!');
}).catch(err => {
  console.error('❌ MongoDB Atlas connection error:', err);
});

// Step 3: Define the Student Schema
const studentSchema = new mongoose.Schema({
  fullName: String,
  studentId: String,
  major: String,
  enrollmentDate: Date
});

// Step 4: Create the Student Model
const Student = mongoose.model('Student', studentSchema);

// Step 5: Verify the schema and model
console.log('✅ Student Model Created Successfully!');
console.log('📛 Model Name:', Student.modelName);
console.log('📌 Schema Keys:', Object.keys(studentSchema.paths));
