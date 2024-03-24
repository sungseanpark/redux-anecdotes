import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        // if ( state.filter === '') {
        //     return state.anecdotes
        // }
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    })

    const handleVote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        const message = `you voted '${anecdote.content}'`
        dispatch(setNotification(message, 5))
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
                        <button onClick={() => handleVote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList