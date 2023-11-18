import '../app/App.css';

function FooterLayout() {
    return (
        <div className='w-auto flex flex-row justify-center p-2 absolute bottom-0 left-0 right-0 bg-slate-900'>
            <p className="read-the-docs">
                Created in <code><a target='__blank' href='https://reactjs.org/'>React</a></code> and <code><a target='__blank' href='https://vitejs.dev/'>Vite</a></code> by <code><a target='__blank' href='https://github.com/dmunoz05'>Daniel Muñoz</a></code> from <code><a target='__blank' href='https://github.com/dmunoz05?tab=repositories'>dmunoz05</a></code>
            </p>
        </div>
    )
}

export default FooterLayout