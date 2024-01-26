document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.querySelector('#formulario')

    form.addEventListener('submit', (evento)=>{
        evento.preventDefault();

        const dados = document.querySelector('#dadosDePesquisa').value

        const avatar = document.querySelector('#avatar')
        const name = document.querySelector('#name')
        const userName = document.querySelector('#userName')

        const repositories = document.querySelector('#repos')
        const followers = document.querySelector('#followers')
        const following = document.querySelector('#following')

        const userLink = document.querySelector('#userLink')

        const http = `https://api.github.com/users/${dados}`

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

                    document.querySelector('.resultado').style.display = 'block'
            })
            .catch(function(error){
                alert(`Página não encontrada ${error}`)
                document.querySelector('body').classList.add('Error')
                document.querySelector('header').classList.add('Error')
            })
    })
})