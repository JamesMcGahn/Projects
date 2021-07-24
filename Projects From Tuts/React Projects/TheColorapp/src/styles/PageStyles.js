const styles = {
    "@global": {
        ".Page": {
            height: '100vh',
            position: 'fixed',
            width: '100%',
            top: 0,
            transition: 'opacity 0.5s ease-in-out'
        },
        ".Page-exit": {
            opacity: 0
        },
        ".Page-enter-active": {
            opacity: 1
        },
        ".Page-exit-active": {
            opacity: 0
        },
    },
}

export default styles