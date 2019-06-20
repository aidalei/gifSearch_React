import React from 'react';

class GifList extends React.Component  {
    constructor(props){
        super(props);
    }
    render(){
        const gifs = this.props.gifs.map((ele)=>{
            return <div className="item"><img src={ele}/></div>;
        });
        return (
            <div className="ui list">
                list of gif
                {gifs}
            </div>
        );
    }
}

export default GifList;