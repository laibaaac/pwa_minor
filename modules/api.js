// hier krijg ik mijn data uit mijn api!
// async await gebruik ik hier zodat het ophalen van de api rustig en  laat ik de code wachten totdat de promise is uitgevoerd en kan ik ook beter een error pakken 

export async function getData(id = null) {


    try {

        let url = 'https://opensheet.elk.sh/1W7nmmrM1C2uX6_nRSsXP5x3A7R1A9b5P6Q-fJhtwLQ8/blad1';
        //link van mijn api 

        const response = await fetch(url);
        // hier fetch ik de url 

        //een boolean om te kijken als de response succesvol was
        //bron https://developer.mozilla.org/en-US/docs/Web/API/Response/ok 
        if (response.ok) {
        //  hier krijg ik mijn data, vanuit de spreadsheet terug, ipv andere dingen 
            const result = await response.json();
            return result;
            
        } else {
            console.log('omg error!!');
            return [];
            // ik krijg hier niks (http error)
        }

    // hier fetch ik een error, alles wat er fout gaat in de try, wordt hier gepakt en daarna naar mijn main.js gestuurd 
    } catch (error) {
        console.log(error);
        return error
    }

}