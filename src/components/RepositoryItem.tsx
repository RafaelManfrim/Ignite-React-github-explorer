type RepositoryItemProps = {
    key?: number
    repo: {
        name: string
        description?: string
        html_url: string
    }
}

const RepositoryItem = (props: RepositoryItemProps) => {
    return (
        <li>
            <strong>{props.repo.name}</strong>
            <p>{props.repo?.description ?? 'Descrição vazia'}</p>
            <a href={props.repo.html_url}>Access repository</a>
        </li>
    )
}

export default RepositoryItem