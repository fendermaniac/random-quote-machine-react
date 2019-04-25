import React from 'react';
import { connect } from 'react-redux';
import { deleteQuote} from '../actions';

const QuoteGrid = ({generatedQuotes}) => {
    return  
        { generatedQuotes.map((item, i) => 
            (
              <div className="column is-half" key={i}>
                <div className="box" key={item.date}>
                  <article className="media">
                    <div className="media-left">
                      <figure className="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Mock" />
                      </figure>
                  </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{item.author}</strong>
              <small>{item.email}</small>
              <br />
              <small><em>{item.date}</em></small>
              <br />
              {item.quote}
            </p>
          </div>
        </div>
      </article>
      <br />
      <div className="buttons">
        <button className="button is-success is-small" onClick={() => window.open(`https://twitter.com/intent/tweet?text="${item.quote}" Quote by: ${item.author}`)}>Tweet Quote</button>
        <button className="button is-danger is-small" onClick={deleteQuote}>Delete Quote</button>
      </div>
    </div>
    </div>
            ) 
        }
     
}

const mapStateToProps = state => {

    return {
      generatedQuotes: state.quotes.generatedQuotes,
  };
  };

const mapDispatchToProps = dispatch => {
    return {
      deleteQuote: () => dispatch(deleteQuote())    
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(QuoteGrid);
