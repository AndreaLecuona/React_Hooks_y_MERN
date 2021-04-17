require('dotenv').config();

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async () => {

    try {

        const apiKey = 'bZa4rDguCXt077Z57JEth4i2gH749PMe';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}&tag=&rating=g`);
        const { data } = await resp.json();

        const { url } = data.images.original;

        return url;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'no existe'
    }



}

getImagen();



