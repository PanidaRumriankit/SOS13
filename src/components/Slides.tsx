import Button from '@mui/material/Button';

function CreateSlides(props: any) {
    return (
        <Button sx={{
            '&.MuiButton-outlined': {
                borderWidth: '2px'
              },
              '&:hover': {
                color: '#4287f5'
              },
              fontWeight: 'bold'
            }}>
            <a
                href={ props.link }
                target="_blank"
            >
                <span>{ props.name }</span>
            </a>
        </Button>
    )
}

export default CreateSlides;