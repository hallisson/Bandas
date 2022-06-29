import React , { useState }from "react";
import styled from "styled-components/macro";
import rock2 from '../../images/rock2.png';
import './App.css';
import TablePandas from "./tablePandas";
import { Grid as MuiGrid, Grid } from '@mui/material';
import ModalDetails from './details';
import { BandsRequestContext } from "./bandsContext";

const SubGridRight = styled(MuiGrid)`
    min-height: 100vh;
    padding: 20px 12px 20px 12px;
    overflow: scroll;
    height: 100vh;
`;

const SubGridLeft = styled(MuiGrid)`
    height: 100vh;
    background-color: #6783ba;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 90%;
`

function Home() {
    const [ open, setOpen] = useState(false)
    const [ id, setId] = useState(false)
    const handleId = (id) => { setId(id); setOpen(true);}
    
    return (
        <div className="App">
            <BandsRequestContext.Provider value={{ handleId }}>
                <header className="App-header">
                    <Grid container>
                        <SubGridLeft item xs={5}>
                            <Image src={rock2} className="logo-bands" alt="bands" />
                        </SubGridLeft>
                        <SubGridRight item xs={7}>
                            <TablePandas />
                        </SubGridRight>
                    </Grid>
                </header>
                { (open) && 
                    <ModalDetails open={open}  setOpen ={setOpen} id={id}/>
                }
            </BandsRequestContext.Provider>
        </div>
    )

}
export default Home;
