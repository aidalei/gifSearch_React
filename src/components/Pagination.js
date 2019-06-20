import React from 'react';

class Pagination extends React.Component  {
    render(){
        return (
            <div>
                <div className="ui list horizontal">
                    <div className="item"><a href="#">pagination</a></div>
                    <div className="item"><a href="#">pagination</a></div>
                    <div className="item"><a href="#">pagination</a></div>
                </div>
            </div>
        );
    }
}

export default Pagination;