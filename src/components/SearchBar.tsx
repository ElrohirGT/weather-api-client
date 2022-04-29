
type SearchBarProps = {
    onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SearchBar(props: SearchBarProps) {
    return (
        <input onChange={props.onChanged}/>
    );
}