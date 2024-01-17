import React, { Component } from 'react';

class ResultComponent extends Component {
   render() {
      let { result } = this.props;
    return (
      <div className='result' >
        <form>
          <input type='text' value={result} />
        </form>
      </div>
    )
   }
}

export default ResultComponent