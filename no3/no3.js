const profile = {
    name : 'John Doe',
    age : 30,
    profession : 'Web Developer',
    hobby : ["Reading","Hiking","Photograpy"]
}

const card = document.createElement('div')
card.className = "profile-card"

const namaelement= document.createElement('h2')
namaelement.textContent = profile.name
card.appendChild(namaelement)

const info = document.createElement('p')
info.textContent = `Umur: ${profile.age}, Profesi: ${profile.profession}`
card.appendChild(info)

const hobbylist = document.createElement('ul')
profile.hobby.forEach(hobbies => {
    const listitem = document.createElement('li')
    listitem.textContent = hobbies
    hobbylist.appendChild(listitem)
})
card.appendChild(hobbylist)

document.body.appendChild(card)