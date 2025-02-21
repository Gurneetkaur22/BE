const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));


app.set("view engine", "ejs");

const postsFilePath = path.join(__dirname, "posts.json");


const readPosts = () => {
    if (!fs.existsSync(postsFilePath)) return [];
    return JSON.parse(fs.readFileSync(postsFilePath, "utf8"));
};


const writePosts = (posts) => {
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
};


app.get("/post", (req, res) => {
    const posts = readPosts();
    res.render("home", { posts });
});


app.get("/post", (req, res) => {
    const postId = parseInt(req.query.id);
    const posts = readPosts();
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).send("Post not found!");
    }
    
    res.render("post", { post });
});


app.get("/addPost", (req, res) => {
    res.render("addPost");
});

// Route: Add a new post (POST request)
app.post("/addPost", (req, res) => {
    const posts = readPosts();
    
    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        date: new Date().toISOString().split("T")[0]
    };

    posts.push(newPost);
    writePosts(posts);

    res.redirect("/post");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

