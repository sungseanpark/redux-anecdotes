import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        // if ( state.filter === '') {
        //     return state.anecdotes
        // }
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    })

    const handleVote = (content, id) => {
        dispatch(vote(id))
        const message = `you voted '${content}`
        dispatch(setNotification(message))
        setTimeout(() => {
            dispatch(removeNotification(''))
          }, 5000)
    }

    return (
        <div>
            {anecdotes
                .map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote.content, anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList