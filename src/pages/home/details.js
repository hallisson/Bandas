import styled from "styled-components/macro";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  Grid,
  DialogContent,
  Button as MuiButton,
  DialogActions as MuiDialogActions,
  TextField,
} from "@mui/material";

const DefaultButton = styled(MuiButton)`
	border-radius: 15px;
  	padding: 3px 21px;
  	font-weight: 300;
	box-shadow: 0px 3px 6px #69696929;
`;

const DialogActions = styled(MuiDialogActions)`
	justify-content : center;
	margin: 20px 0px;
`;

const ModalDetails = ({ id, open, setOpen }) => {
    const [bands, setBands] = useState({})
    const getData = async () => {
        await axios.get('https://xqwsf2o3ei.execute-api.us-east-1.amazonaws.com/v1/api/bands/details/' + id).then(
            function (response) {
                setBands(response.data);
        })
    };

    const handleClose = () => { setOpen(false)}

    useEffect(() => { getData() }, [])

    return (
        <Dialog
            open={open}
            onClose={setOpen}
            maxWidth={'md'}
            fullWidth
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} p={1}>
                        <TextField
                            name="name"
                            label="Nome"
                            size="small"
                            fullWidth
                            value={bands?.name ? bands.name : ''}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} p={1}>
                        <TextField
                            name="name"
                            label="Genero"
                            size="small"
                            fullWidth
                            value={bands?.genre ? bands.genre : ''}
                            disabled
                        />
                    </Grid>
                    <Grid item xs={12} p={1}>
                        <TextField
                            name="name"
                            label="Biografia"
                            multiline
                            maxRows={8}
                            size="small"
                            fullWidth
                            value={bands?.biography ? bands.biography : ''}
                            disabled
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <DefaultButton onClick={handleClose} variant="outlined" >
                    Voltar
                </DefaultButton>
            </DialogActions>
        </Dialog>
    );
}

export default ModalDetails
