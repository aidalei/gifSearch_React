import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import GifList from './GifList';
import Pagination from './Pagination';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            gifs: []
        }
        this.onSearchSubmit =  this.onSearchSubmit.bind(this);
    }
    onSearchSubmit(term){
        axios.get('http://api.giphy.com/v1/gifs/search',{
            params: {
                q: term
            },
            headers:{
                api_key: 'mykey'
            }
        }).then(response=>{
            this.setState({gifs: response.data.images.url});
        });

        console.log(term);
    }
    render(){
        return(
            <>
                <h1>GIF SEARCH</h1>
                <div className="ui container">
                    <SearchBar onSearch={this.onSearchSubmit} />
                    <GifList gifs={this.state.gifs} />
                    <Pagination gifs={this.state.gifs} />
                </div>
            </>
        );
    }
}

export default App;