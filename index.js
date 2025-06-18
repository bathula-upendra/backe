
require('dotenv').config()

const express=require("express")
const app=express()
const githubdata={
  "login": "bathula-upendra",
  "id": 101506827,
  "node_id": "U_kgDOBgzfCw",
  "avatar_url": "https://avatars.githubusercontent.com/u/101506827?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/bathula-upendra",
  "html_url": "https://github.com/bathula-upendra",
  "followers_url": "https://api.github.com/users/bathula-upendra/followers",
  "following_url": "https://api.github.com/users/bathula-upendra/following{/other_user}",
  "gists_url": "https://api.github.com/users/bathula-upendra/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/bathula-upendra/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/bathula-upendra/subscriptions",
  "organizations_url": "https://api.github.com/users/bathula-upendra/orgs",
  "repos_url": "https://api.github.com/users/bathula-upendra/repos",
  "events_url": "https://api.github.com/users/bathula-upendra/events{/privacy}",
  "received_events_url": "https://api.github.com/users/bathula-upendra/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 2,
  "following": 3,
  "created_at": "2022-03-13T12:06:05Z",
  "updated_at": "2025-06-10T07:57:29Z"
}








const port=5000
app.get("/",(req,res)=>{
    res.send("hell u")
})

app.get("/b",(req,res)=>{
    res.send("he")
})

app.get("/f",(req,res)=>{
    res.send("<h1>dsj</h1>")
})

app.get("/e",(req,res)=>{
    res.json(githubdata)
})



app.listen(process.env.PORT,()=>{
    console.log(`hi upendra ${port}`)
})