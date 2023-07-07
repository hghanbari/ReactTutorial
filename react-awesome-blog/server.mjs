import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

await mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => {
    console.log("error in connecting to db");
    throw e;
  });

// user

const User = mongoose.model(
  "users",
  new mongoose.Schema({
    id: Number,
    name: String,
    email: String,
    password: String,
    phone: String,
    website: String,
  })
);

app.get("/api/users", async (req, res) => {
  const { email, password } = req.query;
  const users = await User.find(email && password ? { email, password } : {});
  res.send(users);
});

// filtering user
app.get("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({ id });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

app.post("/api/users", async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.send({ message: "Data is required" });
  }
  const user = new User(req.body);
  const createdUser = await user.save();
  res.send(createdUser);
});

// Update profile
app.put("api/usres:id", async (req, res) => {
  const { id } = req.params;
  const { email, password, phone, name, website } = req.body;
  const user = await User.findOne(id);
  if (user) {
    user.email = email;
    user.phone = phone;
    user.website = website;
    user.name = name;
    user.password = password;
    const updatUser = await user.save();
    res.send(updatUser);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});
// POST

const Post = mongoose.model(
  "posts",
  new mongoose.Schema(
    {
      id: Number,
      title: String,
      body: String,
      userId: String,
    },
    {
      timestamps: true,
    }
  )
);

app.get("/api/posts", async (req, res) => {
  const { userId } = req.query;
  const posts = await Post.find(userId ? { userId } : {});
  res.send(posts);
});

// filtering post
app.get("/api/posts/:id", async (req, res) => {
  const { id } = req.params;
  const post = await Post.findOne({ id });
  if (post) {
    res.send(post);
  } else {
    res.status(404).send({ message: "Post not found" });
  }
});

app.post("/api/posts", async (req, res) => {
  if (!req.body.title || !req.body.bod) {
    return res.send({ message: "Data is required" });
  }
  const post = new Post(req.body);
  const createdPost = await post.save();
  res.send(createdPost);
});

// creat user & post  model
app.get("/api/seed", async (req, res) => {
  await User.deleteMany();
  await User.insertMany([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      password: "123",
      phone: "1-770-736-8031 x56442",
      website: "https://mywebsite.com",
    },
  ]);
  await Post.deleteMany();
  await Post.insertMany([
    {
      id: 1,
      title: "Hello world",
      body: "welcome to my awesome blog",
      userId: 1,
    },
  ]);

  res.send({ message: "seeded successfully" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`served at http://localhost:5000`));
