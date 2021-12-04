import { useState, useEffect } from 'react'
import RepositoryItem from './RepositoryItem'
import '../styles/repositories.scss'
const url = 'https://api.github.com/users/RafaelManfrim/repos'

const RepositoryList = () => {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>List of repositories</h1>
            <ul>
                {repositories.map(repo => <RepositoryItem key={repo.id} repo={repo} /> )}
            </ul>
        </section>
    )
}

export default RepositoryList