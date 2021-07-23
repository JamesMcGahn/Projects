const up = () => {

}

const down = (size) => {
    const sizes = {
        xs: '575.98px',
        sm: '767.98px',
        md: '991.98px',
        lg: '1199.px'
    }
    return `@media (max-width: ${sizes[size]})`
}

export { up, down }
