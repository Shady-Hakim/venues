import { useState } from 'react';
import { useSelector } from 'react-redux';
import Search from '../../components/search';
import DataTable from '../../components/table';
import PartModal from '../../components/modal';

function Home() {
    const venuesData = useSelector(state => state.venues);
    const venuesError = useSelector(state => state.error);
    const [votes, setVotes] = useState([])
    const onSubmit = (values) => {
        setVotes([...votes, values])
    }
  return (
    <div className="App-header">
        <h2 className="title">Lunchplace</h2>
        <Search clearVotes={()=>{setVotes([])}}/>
        <h4 className="venues-error">
            {venuesError}
        </h4>
        {venuesData && venuesData.length ? 
            <>
                <DataTable votes={votes}/>  
                <PartModal venuesData={venuesData} onSubmit={onSubmit}/>
            </>
        : null}

    </div>
  );
}

export default Home;
