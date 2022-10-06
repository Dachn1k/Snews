import './News.css';

type INews = {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: [
        {
        id: string,
        provider: string
        }
    ],
    events: [
        {
        id: string,
        provider: string
        }
    ]
}

type NewsProps = {
    peaceOfNews: INews
}

const News = ({ peaceOfNews }: NewsProps) => {
    return(
        <a className='peace_of_news' href={peaceOfNews.url} target="_blank">
            <div className='blackout'></div>
            <div>
                <div className='img' style={{backgroundImage: `url('${peaceOfNews.imageUrl}')`}}></div>
                <h2 className='title'>{peaceOfNews.title}</h2>
                <p className='description'>{peaceOfNews.summary}</p>                
            </div>
            <p className='time'>{peaceOfNews.publishedAt}</p>           
        </a>
    );
}

export default News;