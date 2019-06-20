import React from 'react';

class SearchBar extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            term :''
        }
        this.onInput = this.onInput.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }
    onInput(e){
        e.preventDefault();
        this.setState({term: e.target.value});
    }
    onSearch(){
        this.props.onSearch(this.state.term);
    }
    render(){
        return (
            <div className="ui fluid action input">
                <input onChange={this.onInput} type="text" placeholder="Search..." />
                <div onClick={this.onSearch} className="ui button">Search</div>
            </div>
        );
    }
}

export default SearchBar;