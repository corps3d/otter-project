import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { SkipNext } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight: '100%', // Set a maximum height for the modal content
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
    overflowY: 'auto',
    overflowX: 'hidden',
    '@media (max-width: 600px)': {
        width: '100%', 
    },
};

export default function KeyboardModal({ open, handleClose }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            right: '10px',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                        fontSize: '22px',
                        color: '#05294b',
                        fontWeight: '700'
                    }}>
                        Keyboard Shortcuts
                    </Typography>
                    <div className="my-3 pb-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '16px',
                            color: '#05294b',
                            fontWeight: '700'
                        }}>
                            AUDIO PLAYBACK
                        </h3>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '18px',
                            color: '#05294b',
                        }}>
                            Highlight current sentence
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Ctrl
                            </div>
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Shift
                            </div>
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                H
                            </div>
                        </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '18px',
                            color: '#05294b',
                        }}>
                            Play or Pause
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Esc
                            </div>
                           <p className='m-0' style={{ 
                            fontSize:'20px',
                            fontWeight:600
                            }}>
                           or media key
                           </p>
                           <SkipNext />
                        </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '18px',
                            color: '#05294b',
                        }}>
                            Rewind five seconds
                        </h3>
                        <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                
Left arrow
                            </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '18px',
                            color: '#05294b',
                        }}>
                            Forward five seconds
                        </h3>
                        <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                
                                Right  arrow
                            </div>
                       
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '18px',
                            color: '#05294b',
                        }}>
                            Slow down
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Ctrl
                            </div>
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                3
                            </div>  
                          
                        </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '18px',
                            color: '#05294b',
                        }}>
                            Speed up
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Ctrl
                            </div>
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                4
                            </div>  
                          
                        </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '18px',
                            color: '#05294b',
                            fontWeight: '700'

                        }}>
                            TRANSCRIPT EDITING
                        </h3>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '16px',
                            color: '#05294b',

                        }}>
                            Insert paragraph break
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Enter
                            </div>
                     
                          
                        </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '16px',
                            color: '#05294b',

                        }}>
                            Delete paragraph break and merge with the previous paragraph
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Backspace
                            </div>
                     
                          
                        </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '16px',
                            color: '#05294b',

                        }}>
                        Undo an action
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Ctrl
                            </div>
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Z
                            </div>
                     
                          
                        </div>
                    </div>
                    <div className="my-3 py-2 d-flex justify-content-between align-items-center" style={{
                        borderBottom: '1px solid #e6e9ef'
                    }}>
                        <h3 className='m-0' style={{
                            fontSize: '16px',
                            color: '#05294b',

                        }}>
                        Redo an action
                        </h3>
                        <div className="d-flex gap-3 align-items-center">
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                Ctrl
                            </div>
                            <div style={{
                                padding: '8px',
                                background: '#dddddd',
                                boxShadow: '0 1.5px 1px #4f4f4f',
                                borderRadius: '8px',
                                fontSize: '16px',
                                color: '#05294b',
                                fontWeight:'600'
                            }}>
                                y
                            </div>
                     
                          
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
