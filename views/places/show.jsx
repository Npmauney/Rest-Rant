const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='row'>
              <h1>{ data.place.name }</h1>
              <h2>Rating</h2>
              <h4>Not yet Rated</h4>
              <br/>
              <h2>Description</h2>
              <h4>To be filled</h4>
              <br/>
              <h2>Comments</h2>
              <h4>No comments yet!</h4>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                  Edit
              </a>
              <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                  Delete
                </button>
              </form>
            </div> 
          </main>
        </Def>
    )
}

module.exports = show
