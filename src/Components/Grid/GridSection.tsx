import './GridSection.css';
import News from '../News/News';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface INews {
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

type GridSectionProps = {
    skipNews: number,
    newsPerPage: number
}

const GridSection = ({ skipNews, newsPerPage}: GridSectionProps) => {
    const [data, setData] = useState<INews[] | null>(null);
    const inputValue = useTypedSelector(state => state.input);

    useEffect(() => {
        let link: string = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${newsPerPage}&title_contains=${inputValue}&_start=${skipNews}`;
        fetch(link) 
        .then(resp => resp.json()) 
        .then(data => setData(data)) 
    }, [skipNews, inputValue]);

    return (
        <section className='grid_section animation-1'>
            <Grid container spacing={2}>
                {data && data.map((peace: INews, index: number) => 
                <Grid key={`grid_item_${index}`} item xs={12} sm={12} md={6} lg={4}>
                    <News key={`news_${peace.id}`} peaceOfNews={peace}></News> 
                </Grid>
                )}
            </Grid>
        </section>
    )
}

export default GridSection;