const apiKey = '225d6ea5a8e3b72f3a9a23afdce660d3';
const apiUrl = `https://themoviedb.org{apiKey}&language=en-US&page=1`;

async function getMovies() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    showMovies(data.results);
}

function showMovies(movies) {
    const movieGrid = document.querySelector('.movie-grid');
    movieGrid.innerHTML = ''; // আগের ডেমো কার্ডগুলো মুছে ফেলার জন্য

    movies.forEach(movie => {
        const posterPath = `https://tmdb.org{movie.poster_path}`;
        
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        
        movieCard.innerHTML = `
            <img src="${posterPath}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <span class="rating">⭐ ${movie.vote_average.toFixed(1)}</span>
            </div>
        `;
        
        movieGrid.appendChild(movieCard);
    });
}

getMovies();