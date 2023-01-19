import React, { Fragment } from 'react'
import ReactStars from "react-rating-stars-component";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "../../css/market.css";
import wheat from '../../img/wheat.jpg';
import corn from '../../img/corn.jpg';
import jowar from '../../img/jowar.jpg';
import rice from '../../img/rice.jpg';
// import grain from '../../img/g1.jpg';
// import coffee from '../../img/coffee.jpg';
// import nuts from '../../img/nuts.jpg';
// import oil from '../../img/oil.jpg';
// import {Link} from 'react-scroll';
import {
    MDBCard,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBBtn,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem
} from 'mdb-react-ui-kit';

const Market = () => {
    const ratingChanged = (newRating) => {
        alert(newRating);
    };

    return (
        
        <Fragment>
            <h1 className='text-danger fw-bold text-center mb-5'>Welcome to Market Page</h1>
            <div className='market'>
                <MDBContainer>
                    {/* <div className='product-types'>
                        <h3 className='text-start ms-10 fw-bold'>Browse the highlights</h3>
                        <MDBRow>
                            <MDBCol size='sm'>
                                <MDBCard>
                                    <MDBCardImage className='type-img' src={grain} alt='...' position='top' />
                                    <MDBCardBody>
                                        <MDBDropdown group>
                                            <MDBBtn size='lg'>Grain</MDBBtn>
                                            <MDBDropdownToggle size='lg' split />
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link><Link activeClass="active" to="wheat" spy={true} smooth={true}>Wheat</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="rice" spy={true} smooth={true}>Rice</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="corn" spy={true} smooth={true}>Corn</Link></MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size='sm'>
                                <MDBCard>
                                    <MDBCardImage src={nuts} alt='...' position='top' />
                                    <MDBCardBody>
                                    <MDBDropdown group>
                                            <MDBBtn size='lg'>Nuts</MDBBtn>
                                            <MDBDropdownToggle size='lg' split />
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link><Link activeClass="active" to="wheat" spy={true} smooth={true}>Almonds</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="rice" spy={true} smooth={true}>Cashew</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="corn" spy={true} smooth={true}>Walnuts</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="corn" spy={true} smooth={true}>Peanuts</Link></MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size='sm'>
                                <MDBCard>
                                    <MDBCardImage src={coffee} alt='...' position='top' />
                                    <MDBCardBody>
                                    <MDBDropdown group>
                                            <MDBBtn size='lg'>Green Coffee</MDBBtn>
                                            <MDBDropdownToggle size='lg' split />
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link><Link activeClass="active" to="wheat" spy={true} smooth={true}>Arabica</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="rice" spy={true} smooth={true}>Robusta</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="corn" spy={true} smooth={true}>Excelsa</Link></MDBDropdownItem>
                                                <MDBDropdownItem link><Link  to="corn" spy={true} smooth={true}>Liberica</Link></MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol size='sm'>
                                <MDBCard>
                                    <MDBCardImage src={oil} alt='...' position='top' />
                                    <MDBCardBody>
                                    <MDBDropdown group>
                                            <MDBBtn size='lg'>Olive Oil</MDBBtn>
                                        </MDBDropdown>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </div> */}

                    <h1>Grain</h1>
                    <section id="wheat" className='wheat-section mb-8'>
                        <div className='m-container'>
                            <div className='section-header'>
                                <div className='thumbnail ms-2'>
                                    <img src="https://i.pinimg.com/736x/52/1a/f9/521af9cd92d33e0cf4afffdd091d591e.jpg" alt="Wheat Image" />
                                </div>
                                <div className='title'>
                                    <h1 cla>Wheat</h1>
                                </div>
                            </div>
                            <div className='row1'>
                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src={wheat} alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat VL-832</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src={wheat} alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat  HS-240</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src={wheat} alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat WH-542</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="corn" className='wheat-section mb-8'>
                        <div className='m-container'>
                            <div className='section-header'>
                                <div className='thumbnail ms-2'>
                                    <img src={corn} alt="Corn Image" />
                                </div>
                                <div className='title'>
                                    <h1 cla>Corn</h1>
                                </div>
                            </div>
                            <div className='row1'>
                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZWF0JTIwZmxvdXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZWF0JTIwZmxvdXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZWF0JTIwZmxvdXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="rice" className='wheat-section mb-8'>
                        <div className='m-container'>
                            <div className='section-header'>
                                <div className='thumbnail ms-2'>
                                    <img src="https://i.pinimg.com/736x/52/1a/f9/521af9cd92d33e0cf4afffdd091d591e.jpg" alt="Wheat Image" />
                                </div>
                                <div className='title'>
                                    <h1 cla>Rice</h1>
                                </div>
                            </div>
                            <div className='row1'>
                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZWF0JTIwZmxvdXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZWF0JTIwZmxvdXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>

                                <div className='card'>
                                    <div className='market-item px-2'>
                                        <div className='item-img'>
                                            <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdoZWF0JTIwZmxvdXJ8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            <div className='rating d-flex ms-1'>
                                                <ReactStars
                                                    count={5}
                                                    onChange={ratingChanged}
                                                    size={24}
                                                    emptyIcon={<i className="far fa-star"></i>}
                                                    fullIcon={<i className="fa fa-star"></i>}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className='item-content'>
                                            <h6 className='title fw-bold'>Wheat</h6>
                                            <div className="bid-area">
                                                <div className="Amt" style={{ color: 'limegreen' }}>
                                                    <div className='current'>Current Amt in Rs</div>
                                                    <div className='amt'>120/Kg</div>
                                                </div>
                                                <div style={{ color: 'red' }}>
                                                    <div className="buy">Hurry Up</div>
                                                    <div className="buy">Buy now</div>
                                                </div>
                                            </div>
                                            <div className="countdown d-flex my-2">
                                                <div className="timer">Timer</div>
                                                <div className="total-bit">Total Bid</div>
                                            </div>
                                            <MDBBtn style={{ margin: '8px 100px' }}>Submit A Bid</MDBBtn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </MDBContainer>
            </div>
        </Fragment>
    )
}

export default Market;