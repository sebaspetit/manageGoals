import Meta from "./Meta";

const listaMock = [{
    "id": "0",
    "detalles": "correr por 30 minutos",
    "periodo": "dia",
    "eventos": 1,
    "icono": "🏃",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 300
},
{
    "id": "1",
    "detalles": "Aprender algo nuevo",
    "periodo": "dia",
    "eventos": 1,
    "icono": "🧑‍🎓",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 0
},
{
    "id": "2",
    "detalles": "crear una aplicacion en react",
    "periodo": "mes",
    "eventos": 1,
    "icono": "👨‍💻",
    "meta": 12,
    "plazo": "2030-01-01",
    "completado": 3
}];
function Lista() {
    return ( 
        listaMock.map(meta => <Meta {...meta}> </Meta>)
    );
}

export default Lista 