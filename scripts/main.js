document.addEventListener('DOMContentLoaded', ()=>{
    const avatar = document.querySelector('#avatar')
    const name = document.querySelector('#name')
    const userName = document.querySelector('#userName')

    const repositories = document.querySelector('#repos')
    const followers = document.querySelector('#followers')
    const following = document.querySelector('#following')

    const userLink = document.querySelector('#userLink')

    const http = 'https://api.github.com/users/DanielMart1ns'

    fetch(http)
        .then(function(resposta){
            return resposta.json()
        })
        .then(function(json){
            avatar.src = json.avatar_url
            name.innerHTML = json.name
            userName.innerHTML = json.login
            repositories.innerText = json.public_repos
            followers.innerText = json.followers
            following.innerText = json.following
            userLink.href = json.html_url
        })
})