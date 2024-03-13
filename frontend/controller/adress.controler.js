import { searchButton } from "../view/index.js"




const getDados = async () => {
    let city = document.getElementById('city').value
    const url = `http://localhost:3333/city/by-city?city=${city}`
    const method = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json'
        },
    }

    if (!city) {
        const url2 = 'http://localhost:3333/city/all-location'
        try {
            const response = await fetch(url2, method)
            const data = await response.json()
            return data.locations
        } catch (error) {
            return null
        }
    }
    try {
        const response = await fetch(url, method)
        const data = await response.json()
        return data.local
    } catch (error) {
        return null
    }
}

searchButton.addEventListener('click', async () => {
    const table = document.getElementById('locals')
    const message = document.getElementById('messageNotFound')
    table.innerHTML = ''
    table.innerHTML = convertTableColumInHtml()


    const dados = await getDados()
    if (dados.length) {
        message.style.display = 'none'
        table.style.display = 'block'
        dados.forEach(element => {
            table.innerHTML += convertDataInHtml(element)
        })
    } else {
        message.style.display = 'block'
        table.style.display = 'none'

    }
})

function convertDataInHtml(data) {
    return `
        <tr class="add">
            <td>${data.name}</td>
            <td>${data.public_place}</td>
            <td>${data.number}</td>
            <td>${data.complement}</td>
            <td>${data.neighborhood}</td>
            <td>${data.city}</td>
            <td>${data.state}</td>
            <td>${data.zip_code}</td>
        </tr>`

}


function convertTableColumInHtml() {
    return `
    <tr>
    <th id="name">Ponto/Nome</th>
    <th id="public_place">Logradouro/Nome</th>
    <th id="number">Numero</th>
    <th id="complement">Complemento</th>
    <th id="neighborhood">Bairro/Distrito</th>
    <th id="city">Cidade</th>
    <th id="state">Localidade/UF</th>
    <th id="zip_code">CEP</th>  
    </tr> `

}

