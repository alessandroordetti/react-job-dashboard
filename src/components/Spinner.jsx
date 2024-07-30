import DotLoader from 'react-spinners/DotLoader';

const Spinner = ({ loading }) => {

    const override = {
        display: 'block',
        margin: '100px auto'
    }

    return (
        <DotLoader
            color='#4338ca'
            loading={loading}
            cssOverride={override}
            size={150}
        />
    )
}

export default Spinner