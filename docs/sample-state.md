``` javascript
{
 currentUser: {
   id: 88,
   username: "jamievers"
 },
 errors: {
   signUp: ["username can't be blank", "password is too short"],
   signIn: [],
   createProject: ['body cant be blank!'],
   editProject: [],
   createComment: [],
   fundProject: [],
   editComment: []
 },
 projects: {
   1: {
     id: 1,
     name: "After-school coding",
     creator_id: 10,
     creator_username: "Sean Scanlan",
     city: "Brooklyn",
     state: "NY",
     zip: 11221
     comments: {
       1: {
         id: 1,
         author_id: 11,
         content: "Great idea, would love to get involved!"
       }
     },
   }
 },
 projectDetail: {
   id: 1,
   name: "After-school Coding",
   organization: "Ridgwood-Bushwick Youth Center",
   org_link: "https://sites.google.com/a/bklawtech.com/home/",
   address: "1747 Gates Ave",
   city: "Brooklyn",
   state: "NY",
   description: "A volunteer-run introduction to web development in partnership with the Brooklyn \
                High School for Law and Technology",
   currentFunding: 2353,
   funding_goal: 5000,
   currentBackers: {
     1: {
       id: 1,
       user_id: 88,
       contribution: 50
     }
   },
   funding_goal_achieved: false
 }
}
```
