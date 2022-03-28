import React from 'react'

function AnimeCard({anime}) {
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
            
            <button>
                <i class="fa-solid fa-thumbs-up fa-2x"></i>
            </button>
            <button>
                <i class="fa-solid fa-thumbs-down fa-2x"></i>
            </button>
            
		</article>
	)
}

export default AnimeCard