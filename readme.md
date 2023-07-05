# Code Snippet

## TS Configuration

```json
{
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "outDir": "dist",
      "rootDir": "src",
      "esModuleInterop": true
    },
    "exclude": ["node_modules"]
  }
  
```

## Mongodb Connection

### Mongoose Installation

```
npm install mongoose typescript ts-node
```

### Connection
```typescript
import mongoose from 'mongoose';

const uri = 'mongodb://127.0.0.1:27017/todolist';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
  }
};
export default connectDB;

```

## Express Basic Starter Code

### Express Installation

```
npm install express
npm install --save-dev @types/express
```

### Express Basic Code
```typescript
import connectDB from "./db";
import express from 'express';

const port = 3000;
const app = express();
app.use(express.json());


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
      });
  });
```

## Mongoose Model Starter

```typescript
import mongoose, { Schema } from 'mongoose';

//define the data model and export it. Change the attributes as you need.
export interface IUser {
  email: string;
  displayName: string;
  password: string;
  profile?: object;
}

//define data schema to define attributes in the MongoDB document. Change the attributes as you need.
const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  displayName: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: Object },
});

//Execute the data schema. This code will generate a collection in MongoDB. In this case, the collection generated is the 'users' collection.
const UserModel = mongoose.model<IUser>('User', UserSchema);

//export model to be used in another file
export default UserModel;
```


