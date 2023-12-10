document.getElementById('button').addEventListener('click', getQuotes);


function getQuotes() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://api.quotable.io/random', true)

    xhr.onload = function (e) {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText)

            document.getElementById('quotes').innerHTML = `${response.content}`

            document.querySelector('.author').innerHTML = `${response.author}`


            console.log(response)
           
        }
        e.preventDefault()
    }

    xhr.send()
}