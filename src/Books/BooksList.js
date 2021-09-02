import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem'


function BooksList(props){
    return (
        <table >
             <tr className='trtable'> 
                <th> </th>
                <th>№</th>
                 <th>Название книги</th>
                 <th>Автор</th>
                 <th>Год написания</th>
                 <th> </th>
                 
             </tr>             
             { props.books.map((book, index) => {
                 return <BookItem book={book} key={book.id} 
                 index={index} onChange={props.onToggle} />
             })}
        </table>
    )
}

BooksList.propTypes = {
    boos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default BooksList