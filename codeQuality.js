// level 2
// ## Level 2

// Re-write the below code to better code quality standards.
// Hint: use modern ES6 syntax and reduce lines of code.

// ```
// async function getUsers() {
//   let doc = await Promise.all(getUser(), getProfile(), getPosts());

//   let user = doc[0];
//   let Profile = doc[1];
//   let p = doc[2];

//   const userProfile = {
//     user: user,
//     profile: Profile,
//     posts: p
//   };

//   return userProfile;
// }
// ```




async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    let user = doc[0];
    let profile = doc[1];
    let posts = doc[2];
  
    const userProfile = {
      user,
      profile,
      posts,
    };
  
    return userProfile;
  }