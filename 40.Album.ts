// Album: Write a function called make_album() that builds a Object describing a music album. The function should take 
// in an artist name and an album title, and it should return a Object containing these two pieces of information. Use 
// the function to make three dictionaries representing different albums. Print each return value to show that Objects 
// are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the 
// number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the 
// album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(
    artist: string, 
    title: string,
    tracks?: number
): { artist: string; title: string; tracks?: number } {
    if (tracks !== undefined) {
        return { artist, title, tracks };
    } else {
        return { artist, title };
    } 
}

// Create three albums
console.log(make_album("Arijit Singh", "T-series"));
console.log(make_album("Jubin", "T-series"));
console.log(make_album("Atif Aslam", "Atif's Album", 16));

OUTPUT:

{ artist: 'Arijit Singh', title: 'T-series' }
{ artist: 'Jubin', title: 'T-series' }
{ artist: 'Atif Aslam', title: "Atif's Album", tracks: 16 }
