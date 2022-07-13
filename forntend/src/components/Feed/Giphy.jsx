import React from 'react';
import GifIcon from '@material-ui/icons/Gif';
const giphy_API = "https://api.giphy.com/v1/gifs/search?api_key=IuDRgKk3VhF2FjeUX1JAyzFSj0HKniPf&limit20&offset=0&q=";

let GifSearch = () => {

    let [search, setSearch] = React.useState("");
    let [gifs, setGifs] = React.useState([])


    let searchGif = () => {
        if (search.length > 0) {

            fetch(giphy_API + search)
                .then((res) => {

                    return res.json();
                })
                .then((result) => {
                    setGifs(result.data.map((gif) => {
                        return gif.images.fixed_height.url;
                    }))
                })
                .catch(() => {

                    alert("Something went wrong");
                })
        }
    }

    return (
        <>
        <div className='cont'>
            <div className='gif_search'>
                <GifIcon fontSize='large' margin-top='100px' />
                <input type="text"
                    placeholder="Search Gifs"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                />
                <button onClick={searchGif}>GO</button>

            </div>


            <div className="list">
                {
                    gifs.map((gif) => {
                        return (
                            <div className="item">
                                < img src={gif} />
                            </div>
                        )
                    })
                }
            </div>
            </div>

        </>
    );
}

export default GifSearch;