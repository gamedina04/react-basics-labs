import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';


const Task = (props) => {

    return (
        <Grid
            key={props.id}
            size={{ xs: 12, sm: 6, md: 4 }}
        >
            <Card
                sx={{
                    backgroundColor: props.done ? 'lightgrey' : 'lightblue',
                    padding: '20px',
                    fontFamily: 'monospace'
                }}
            >
                <CardHeader
                    title={props.title}
                    slotProps={{
                        title: {
                            sx: { fontFamily: 'monospace' }
                        }
                    }}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        padding: '20px',
                        textAlign: 'center'
                    }}
                />

                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                            padding: '20px'
                        }}
                    >
                        <Typography
                            component="p"
                            variant="subtitle2"
                            color="text.primary"
                            sx={{
                                fontFamily: 'monospace',
                                fontSize: '1.25rem'
                            }}
                        >
                            Due: {props.deadline}
                        </Typography>
                    </Box>

                    <Typography
                        component="p"
                        variant="subtitle1"
                        align="center"
                        sx={{
                            fontStyle: 'italic',
                            fontFamily: 'monospace',
                            fontSize: '0.85rem'
                        }}
                    >
                        {props.description}
                    </Typography>
                </CardContent>

                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                        padding: '20px'
                    }}
                >
                    <Tooltip title="Mark as Done">
                        <Button
                            variant="contained"
                            size="small"
                            color="success"
                            onClick={props.markDone}
                            aria-label="Mark as Done"
                        >
                            <DoneIcon />
                        </Button>
                    </Tooltip>

                    <Tooltip title="Delete Task">
                        <Button
                            variant="contained"
                            size="small"
                            color="error"
                            onClick={props.deleteTask}
                            aria-label="Delete Task"
                        >
                            <DeleteIcon />
                        </Button>
                    </Tooltip>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Task;
