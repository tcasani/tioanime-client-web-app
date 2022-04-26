var mal_id='48590';
try {
    console.log('Iniciada petición MAL');

    axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`)
        .then(function (response) {
            const data = response.data;
            console.log(data.score);

            if (data.score != null) {
                document.getElementById('score').innerHTML = data.score;
            } else {
                document.getElementById('score').innerHTML = 'N/A';
            }

            if (data.scored_by != null) {
                document.getElementById('scored_by').innerHTML = data.scored_by;
            } else {
                document.getElementById('scored_by').innerHTML = 'N/A';
            }
        })
        .catch(function (err) {
            console.log('Ha fallado algo...', err);
        });
} catch (err) {
    console.log('Ha fallado algo...', err);
}