import './index.css'


const Contacts = () => {
    return(
        <div className='container'>
            <div className='left'>
                <div className='content-container'>
                    <form>
                        <ul>
                            <li className='half'>
                                < input type='text' name='name' placeholder='Name' required />
                                
                            </li>
                        </ul>


                    </form>
                </div>


            </div>
            <div className='right'>
                <div className='content-container'>
                    <p>a</p>
                </div>

            </div>


        </div>
    )
}
export default Contacts;