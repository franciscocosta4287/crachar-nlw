
const linkSocialMidia = {
  github: "github",
  youtube: "battous",
  facebook: "battous",
  twitter: "battous"
}

//   function chagesSocialMediaLinks() {
//     document.getElementById("userName").textContent = "Davi"
//   }
//   chagesSocialMediaLinks();

// function adasd(){
//     userName.textContent = "Bilanda"
// }
// adasd()

function chagesSocialMediaLinks() {
  for (let li of socialLinks.children) {
    //   alert(li.getAttribute('class'));
    const social = li.getAttribute("class")
    // alert(social)
    // li.children[0].href = "https://www.youtube.com/watch?v=Lr4rhPywc3k&t=2s"
    li.children[0].href = `https://${social}.com/${linkSocialMidia[social]}`

    // alert(li.children[0].href);
  }
}

chagesSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMidia.github}`
  //   alert(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent =  data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login

        } )
}

getGitHubProfileInfos()
