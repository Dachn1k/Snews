import { useState } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import GridSection from './Components/Grid/GridSection';
import PaginationBar from './Components/PaginationBar/PaginationBar';
import Tab from './Components/PaginationBar/Tab';
import ArrowLeft from './Components/PaginationBar/ArrowLeft';
import ArrowRight from './Components/PaginationBar/ArrowRight';
import NextPage from './Components/PaginationBar/NextPage';
import PreviousPage from './Components/PaginationBar/PreviousPage';
import Header from './Components/Header/Header';
import Search from './Components/Header/Search';
import Footer from './Components/Footer/Footer';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  
  const currentPage_ = useTypedSelector(state => state.page);
  const addToPage_ = useTypedSelector(state => state.addToPage);

  const [newsPerPage] = useState<number>(12);

  return (
    <>
      <Header>
        <Search></Search>
      </Header>
      <Body>
        <GridSection newsPerPage={newsPerPage} skipNews={currentPage_ * newsPerPage}></GridSection>
        <PaginationBar>
          <ArrowLeft></ArrowLeft>
          <PreviousPage></PreviousPage>
          <Tab pageNumber={1 + addToPage_}></Tab>
          <Tab pageNumber={2 + addToPage_}></Tab>
          <Tab pageNumber={3 + addToPage_}></Tab>
          <Tab pageNumber={4 + addToPage_}></Tab>
          <Tab pageNumber={5 + addToPage_}></Tab>
          <NextPage></NextPage>
          <ArrowRight></ArrowRight>
        </PaginationBar>
      </Body>
      <Footer></Footer>  
    </>
    );
}

export default App;
