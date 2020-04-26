import React from 'react';
const MyButton = React.forwardRef(({ onClick, href }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}>
            Click Me
        </a>
    )
})


export default MyButton;