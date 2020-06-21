import React from "react"
import Modal from '@material-ui/core/Modal';
import "./components.css";

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(4),
    },
    card: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

const ModalComponent = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    function getModalStyle() {
        return {
          width: '20%',
          marginLeft: '40%',
          marginTop: '10%'
        };
      }

    const body = (
        <div style={modalStyle} className={classes.paper}>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
      );
    
      return (
        <div className="modal-component">
            <Button variant="outlined" color="success" className="button" onClick={handleOpen}>
                Learn more
            </Button>
            <div style={modalStyle}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    >
                {body}
            </Modal>
            </div>
        </div>
      );
}

export default ModalComponent;