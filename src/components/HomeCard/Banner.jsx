export default function Banner({data}) {
    return (
        <div className="banner">
            <img src={data?.cover} alt="Cover" />
            <div className="texts">
                <h1>{data?.name}</h1>
                <h4>{data?.episodes.length} episódios</h4>
            </div>
        </div>
    )
}