import React from 'react';
import { Link } from 'react-router-dom';
import OrderItemDetails from './order_item_details';
import CountryList from './order_country';

class OrderContactForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            purchaser_id: null,
            total: null, 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.currentUser ? this.setState({'purchaser_id': this.props.currentUser[0]}) : null;
        this.total(); 
    }

    cartItems() {

        let cart = JSON.parse(localStorage.getItem('cart'));
        

        if(cart) {
            let items = Object.keys(cart)
            items = items.map( (key) => {
                return cart[key]
            })
            return items
        } else {
            return []
        }
 
    }

    total() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        this.setState({total: parseFloat(total)})
    }

    orderedProducts() {
        return this.cartItems().map((item) => {return {'product_id': parseInt(item.product.id), 'quantity': parseInt(item.quantity)}})
        
    }

    handleSubmit(e) {
        e.preventDefault;
        this.props.createOrder(this.state, this.orderedProducts())
        window.localStorage.clear(); // clears the cart after checkout 
    }


    calcTotal() {
        let total = this.cartItems().map((item) => {return (parseInt(item.quantity) * parseFloat(item.product.price)).toFixed(2)})
        total = total.reduce( (a, b) => parseFloat(a)+parseFloat(b), 0);
        return total
    }

    inputText(e, id) {
        let label = document.getElementById(id)
        if(e.target.value === "") {
            label.classList.remove("filled_label")
        } else {
            label.classList.add("filled_label")
        }
    }

    selectCountry(e, country) {

    }

    selectState(e, country) {

    }

    render() {
        return(
            <div className="order-form-container">  

                <div className="order-form">

                    <div className="form-logo-container">
                        <Link to="/" className="order-form-logo">SpaceGear</Link>
                    </div>

                    
                    {this.state.total ? 
                    
                    <div className="order-contact-container"> 
            
                            {/* <form action=""> */}

                                <div className="order-name">
                               
                                        <div className='field-first-name'>
                                            <label id="first-name" htmlFor="">First Name</label>
                                            <input type="text" onChange={(e) => this.inputText(e, 'first-name')} required/>
                                        </div>


                                        <div className="field-last-name">
                                            <div className="last-name-container">
                                                <div className="last-name-align">
                                                    <label id="last-name">Last Name</label>
                                                    <input type="text" onChange={(e) => this.inputText(e, 'last-name')} required/>
                                                </div>
                                            </div>
                                        </div>
        
                                </div>

                                <div className="order-address-one">
                                    <div className="field">
                                        <label id="address-one">Address</label>
                                        <input type="text" onChange={(e) => this.inputText(e, 'address-one')} required/>
                                    </div>
                                </div> 

                                <div className="order-address-two">
                                    <div className="field">
                                        <label id="address-two">Apartment, suite, etc. (optional)</label>
                                        <input type="text" onChange={(e) => this.inputText(e, 'address-two')} required/>
                                    </div>
                                </div>

                                <div className="order-city">
                                    <div className="field">
                                        <label id="city">City</label>
                                        <input type="text" onChange={(e) => this.inputText(e, 'city')} required/>
                                    </div>
                                </div>

                                <div className="order-country-state-zipcode">
                                    <div className="order-country">
                                        <label>Country/Region</label>
                                        <select name="" id="" onChange={(e) => this.selectCountry(e, e.target.value) }>
                                            <option value="United States" defaultValue>United States</option>
                                            <option value="Canada">Canada</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="Germany">Germany</option>
                                            <option disabled="disabled" value="---">---</option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Aland Islands">Åland Islands</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antigua And Barbuda">Antigua &amp; Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bosnia And Herzegovina">Bosnia &amp; Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Bouvet Island">Bouvet Island</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                            <option value="Virgin Islands, British">British Virgin Islands</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Republic of Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Caribbean Netherlands">Caribbean Netherlands</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo - Brazzaville</option>
                                            <option value="Congo, The Democratic Republic Of The">Congo - Kinshasa</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Curaçao">Curaçao</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czechia</option>
                                            <option value="Côte d&#39;Ivoire">Côte d’Ivoire</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Eswatini">Eswatini</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands (Malvinas)">Falkland Islands</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Territories">French Southern Territories</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guernsey">Guernsey</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guinea Bissau">Guinea-Bissau</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Heard Island And Mcdonald Islands">Heard &amp; McDonald Islands</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong SAR</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Isle Of Man">Isle of Man</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jersey">Jersey</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kosovo">Kosovo</option>
                                            <option value="Lao People&#39;s Democratic Republic">Laos</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Libyan Arab Jamahiriya">Libya</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Macao">Macao SAR</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Moldova, Republic of">Moldova</option>
                                            <option value="Montenegro">Montenegro</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Myanmar">Myanmar (Burma)</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Namibia">Namibia</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="North Macedonia">North Macedonia</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Palestinian Territory, Occupied">Palestinian Territories</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Pitcairn">Pitcairn Islands</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Reunion">Réunion</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Sao Tome And Principe">São Tomé &amp; Príncipe</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Serbia">Serbia</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Sint Maarten">Sint Maarten</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Korea">South Korea</option>
                                            <option value="South Georgia And The South Sandwich Islands">South Georgia &amp; South Sandwich Islands</option>
                                            <option value="Spain">Spain</option>
                                            <option value="South Sudan">South Sudan</option>
                                            <option value="Saint Barthélemy">St. Barthélemy</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Saint Kitts And Nevis">St. Kitts &amp; Nevis</option>
                                            <option value="Saint Helena">St. Helena</option>
                                            <option value="Saint Martin">St. Martin</option>
                                            <option value="Saint Lucia">St. Lucia</option>
                                            <option value="St. Vincent">St. Vincent &amp; Grenadines</option>
                                            <option value="Saint Pierre And Miquelon">St. Pierre &amp; Miquelon</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Svalbard And Jan Mayen">Svalbard &amp; Jan Mayen</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Tanzania, United Republic Of">Tanzania</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Timor Leste">Timor-Leste</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Trinidad and Tobago">Trinidad &amp; Tobago</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turks and Caicos Islands">Turks &amp; Caicos Islands</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="United States Minor Outlying Islands">U.S. Outlying Islands</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="United States">United States</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Holy See (Vatican City State)">Vatican City</option>
                                            <option value="Wallis And Futuna">Wallis &amp; Futuna</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Western Sahara">Western Sahara</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                            <option value="Zambia">Zambia</option>
                                        </select>
                                    </div>

                                        <div className="order-state">
                                            <label htmlFor="">State</label>
                                            <select name="" id="" onChange={(e) => this.selectState(e, e.target.value) }>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                                <option value="AFA">Armed Forces America</option>
                                                <option value="AFE">Armed Forces Europe</option>
                                                <option value="AFP">Armed Forces Pacific</option>
                                            </select>
                                        </div>

                                    {/* <div> */}
                                        <div className="order-zipcode">
                                            <div className="field">
                                                <label id="zipcode">Zipcode</label>
                                                <input type="text" onChange={(e) => this.inputText(e, 'zipcode')} required/>
                                            </div>
                                        </div>
                                    {/* </div> */}

                                </div>

                                <div className="order-phone">
                                    <div className="field">
                                        <label id="phone">Phone</label>
                                        <input type="text" onChange={(e) => this.inputText(e, 'phone')} required/>
                                    </div>
                                </div>

                            {/* </form> */}

                            <div>
                            <Link to="/cart">Return to cart</Link>
                            <Link to="/account"><button onClick={this.handleSubmit} className="order-form-button">Continue to Shipping</button></Link> 
                            </div>
                        
                
                    
                    </div>
                    : 
                        <button>Your cart is empty! Click here to continue shopping!</button>
                    }
                </div> 

                <div className="items-info">
                    {this.cartItems().map((details) => {
                        return <OrderItemDetails item={details} key={details.product.id}/>
                    })}

                    <div className="price-info"> 

                        <div className="promo">
                            <input type="text" defaultValue="PROMO CODE"/> <button>Apply</button> 
                        </div>

                        <div className="shipping">
                            <p>Shipping + Handling</p>
                            <p>FREE 1 DAY DELIVERY</p>
                        </div>

                        <div className="tax">
                            <p>Taxes</p>
                            <p>NONE</p>
                        </div>

                        <div className="order-total">
                            <div className="price-details">
                                <span>Total</span>
                                <span>usd ${parseFloat(this.state.total).toFixed(2)}</span>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        )
    }
}

export default OrderContactForm; 

/*

    store.dispatch(createOrder({purchaser_id: 26, total: 61.24}, [{product_id: 35, quantity: 2}]))

    needs current user id (for now, should refactor to allow non users to sign in)
    needs the cart, which is in the localStorage
    really only need these two things to create an order 

    should put in an address form 
        on click should save this to the address table, which should return the address
    should put in a credit card form 
        on click should save this to the payments table, which should return just the payment id 

    should make this a protected route forcing users to sign in before placing the order, this way you get the user id 
    should redirect users back to this page after sign in

        this.props.history.goBack(); may serve you 


*/