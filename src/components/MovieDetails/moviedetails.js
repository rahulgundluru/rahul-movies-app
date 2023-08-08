import './moviedetails.css'

const MovieDetails = (props) => {
    const {details} = props 
    const {poster_path, title, release_date, vote_average, overview} = details
    return (
        <div  className="movie"> 
            <div >
                <img className='image-input' src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="Movie poster not found" />
            </div> 
            <div className='movie-details'>
                <h2 className='heading-movie'>{title}</h2>
                <p className='release-date'>Release Date: {release_date}</p>
                <p className='release-date '>Rating: {vote_average}</p>
                <p className='overview'>{overview}</p>
            </div>      
        </div>
    )
}

export default MovieDetails