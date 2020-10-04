let btn = document.getElementById('btn')

const handleClick = () => {
    document.body.classList.toggle('dark')
}

btn.addEventListener('click', handleClick);