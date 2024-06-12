import Button from '@mui/material/Button';

function CreateSlides( props ) {
    return (
        <Button>
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