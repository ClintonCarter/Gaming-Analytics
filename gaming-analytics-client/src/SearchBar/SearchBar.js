import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='Search'>
        <form className='search-form' onSubmit={e => {
          e.preventDefault()
          this.props.setSearchTerm(e.target.value)
        }}>
          <input type='text' name='search-term' id='search-term' />
          <button type='submit'>SEARCH</button>
        </form>
      </div>
    )
  }
}
