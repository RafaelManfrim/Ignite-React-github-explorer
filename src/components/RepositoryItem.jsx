const RepositoryItem = (props) => {
    return (
        <li>
            <strong>{props.repo.name}</strong>
            <p>{props.repo?.description ?? 'Descrição vazia'}</p>
            <a href={props.repo.html_url}>Access repository</a>
        </li>
    )
}

export default RepositoryItem