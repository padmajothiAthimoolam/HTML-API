const worker = new Worker('./script/worker.js')
const sumButton = document.querySelector('#sumButton');
const bgButton = document.querySelector('#bgButton');

sumButton.addEventListener('click', (event) => {
    worker.postMessage('hello, worker');
})

worker.onmessage = function(message){
    alert(`The final sum is ${message.data}`);
}

bgButton.addEventListener('click', (event) => {
    if(document.body.style.backgroundColor !== 'green')
        document.body.style.backgroundColor = 'green'
    else 
        document.body.style.backgroundColor = "blue"
})