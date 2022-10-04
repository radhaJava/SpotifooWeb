interface iProps{
    title:string;
    imageURL:string|undefined;
    artist:string;
    album:string;
    genre:string;
    pathToAlbum:string;
    pathToMusic:string;
   }

export default function Card({title,imageURL,artist,album,genre,pathToAlbum,pathToMusic}:iProps) {
    return <article>
<nav > </nav>
<p>Details</p>
<h3>{album}{genre}{ artist}</h3>

<img src ={imageURL} />
    </article>

    

}