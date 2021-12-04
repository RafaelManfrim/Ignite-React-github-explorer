const RepositoryItem = (props) => {
    return (
        <li>
            <strong>{props.repo?.name ?? 'Default'}</strong>
            <p>{props.repo?.description ?? 'Descrição vazia'}</p>
            <a href={props.repo?.html_url ?? 'https://github.com/'}>Access repository</a>
        </li>
    )
}

export default RepositoryItem