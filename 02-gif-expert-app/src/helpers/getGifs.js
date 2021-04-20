import env from "react-dotenv";
export const getGifs = async( categoria ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( categoria ) }&limit=10&api_key=${ env.API_KEY }`;
    //el encodeURI formatea el string de manera que quede correcto para el url (si tiene espacios o mayusculas los traduce a url)

    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //el signo ? pregunta si está disponible
        }
    })

    // console.log(gifs);
    return gifs;
};

//la funcion queda reutilizable