interface iProps{
    title:string;
    artist:string;
    album:string;
    genre:string;
    pathToAlbum:string|undefined;
    pathToMusic:string|undefined;
   }

export default function Card({title,artist,album,genre,pathToAlbum,pathToMusic}:iProps) {
return( <article>
<h3>{title}</h3>
<img src={pathToAlbum}/>
<p>{artist} {album} {genre} </p>    
</article>
);
    

}