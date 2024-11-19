async function quantidadeUsuarios(){
   
    const url ='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const numeroDeUsuarios = Object.values(dados)



const data = [
    {
        x: nomeDasRedes,
        y: numeroDeUsuarios,
        type: 'bar'
    
    }
]
const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico,data)



}
quantidadeUsuarios()
