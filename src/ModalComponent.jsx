import React from 'react';
import { makeStyles } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
  
function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles ((theme)=>({
    modal: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '40vw',
        minWidth: '300px',
        height: '15vh',
        minHeight:'125px',
        boxShadow:'4px 4px 18px #585a5a',
        borderRadius: '2.5px'
    },
    paper: {
        position: 'absolute',
        width:'300px',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    itemContainer: {
        display:'flex', flexWrap: 'wrap', fontSize: '1rem', justifyContent:'center', marginBottom:'15px'
    },
    itemName: {
        width: '250px',fontSize: '0.8rem', textAlign:'left', margin:'3px auto', fontWeight:'bold'
    },
    item: {
        margin: theme.spacing(1),
        top:5,
      },
}))

const ModalComponent = () => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <h2 style={{textAlign:'center'}}>CREATE YOUR ACCOUNT</h2>
          <form style={{textAlign:'center'}}>
              <div className={classes.itemContainer}>
                <TextField
                        className={classes.item}
                        label="First Name"
                        required
                        variant="outlined"
                    />
                    <TextField
                        className={classes.item}
                        label="Last Name"
                        required
                        variant="outlined"
                    />
                </div>
                <div className={classes.itemContainer}>
                    <TextField
                        className={classes.item}
                        label="Email"
                        required
                        variant="outlined"
                    />
                    <TextField
                        className={classes.item}
                        label="Confirm Email"
                        required
                        variant="outlined"
                    />
                </div>
                <div className={classes.itemContainer}>
                    <TextField
                        className={classes.item}
                        label="Password"
                        required
                        variant="outlined"

                    />
                    <TextField
                        className={classes.item}
                        label="Confirm Password"
                        required
                        variant="outlined"
                    />
                </div>
              <button className="btn" style={{margin:'20px auto', width: '80px', minWidth:'80px', height:'30px'}}>Submit!</button>
          </form>
        </div>
      );

    return (
        <div className={classes.modal}>
            <p style={{margin:'10px 15px', textAlign:'left', fontFamily:'cursive', fontWeight:'bold'}}>Do you like to know<br/> why most of customers get satisfied with our products?</p>
            <button className="btn" onClick={handleOpen}>CREATE FREE ACOUNT</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

export default ModalComponent
