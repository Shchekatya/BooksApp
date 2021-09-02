import React, {useState} from 'react';
import PropTypes from 'prop-types';


function AddBook({ onCreate }) {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState('')

    function submitHandler(event) {
        event.preventDefault()          
          onCreate(title, author, year)
          setTitle('') 
          setAuthor('')
          setYear('')         
    }

return (
    <form onSubmit={submitHandler} >
      <input 
      value={title} onChange={event => setTitle(event.target.value)}
      type="text" placeholder="Название" required name='title'/>
      <input 
      value={author} onChange={event => setAuthor(event.target.value)}
      type="text" placeholder="Автор" required name='author'/>
      <input 
      value={year} onChange={event => setYear(event.target.value)}
      type="text" placeholder="Год" required name='year'/>
     <button type="submit">Добавить книгу</button>
    </form>
)
}

AddBook.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddBook