import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import OrderedProduct from './ordered_products';

const OrderShow = (props) => {
    
    const [order, updateOrder] = useState(Object.assign({}, props.order));
    const [orderedProducts, updateProducts] = useState([...props.orderedProducts]);
    const [total, updateTotal] = useState(props.order.total);
    const [contact, updateContact] = useState({});
    const [destroy, updateDestroy] = useState([])


    useEffect(() => {
        
        let inputs = document.getElementsByClassName("product-quantity")
        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = orderedProducts[i].quantity
        }
        
    })

    useEffect(() => {
        calcTotal()
    }, [orderedProducts])

    // useEffect(() => {
    //     props.retrieveContact(props.currentUser.id).then( res => {
    //         updateContact(Object.values(res.contacts)[0])
    //     })

    // }, [])

    useEffect(() => {
        props.retrieveContact(props.currentUser.id).then( res => {
            updateContact(Object.values(res.contacts)[0])
        })
        return () => {
            props.removeContactError()
        }
    }, [])


    const updateQuantity = (e, id) => {

        // prevents NaN from being put into state 
        let notNumber = isNaN(parseInt(e.target.value));

        updateProducts(
            orderedProducts.map(product => {
            if(product.id === id) {
                if(notNumber) {
                    product.quantity = 0;
                    return product
                } else {
                    product.quantity = parseInt(e.currentTarget.value);
                    return product;
                }
            } else {
                return product; 
            }
            }))
    }

    const removeItem = (id) => {

        let toBeDestroyed = [...destroy];
        toBeDestroyed.push({id: id, _destroy: '1'})
        updateDestroy(toBeDestroyed)

        updateProducts( orderedProducts.filter((product) => product.id !== id ))
    }

    const calcTotal = () => {

        if(Object.values(props.products).length) {

            let newTotal = 0; 
            orderedProducts.forEach(order => {
                newTotal += (order.quantity * parseInt(props.products[order.product_id].price))
            })
            updateTotal(newTotal)

            updateOrder(Object.assign({}, order, {total: newTotal}))
        }
    }

    const submitUpdate = () => {

        props.removeContactError()

        props.editOrder(order, orderedProducts.concat(destroy)).then(() => {
            props.editContact(contact).then(() => {

                if(Object.values(props.contactErrors).length === 0) {
                    props.history.push("/account")
                }

            })
        })

        

    }

    const inputText = (e, id) => {
        
        let label = document.getElementById(id)
        if(e.target.value === "") {
            label.classList.remove("filled_label")
        } else {
            label.classList.add("filled_label")
        }
        
        updateContact(Object.assign({}, contact, {[id]: e.target.value}))

    }

    const selectCountry = (e, country) => {
        updateContact(Object.assign({}, contact, {country}))
    }

    const selectState = (e, state) => {
        updateContact(Object.assign({}, contact, {state}))
    }


    return (

        
        <div className="order-summary-container">

            {Object.values(props.order).length ? 
                    <div className="order-show-container">

                        <div className="order-address-payment">

                            <div>
                                <h2 className="payment-shipping-title">Shipping and Billing Information</h2>
                            </div>
                            

                            <div id="contact-name-field">
                                <div className='field-first-name'>
                                    <label id="first_name" className="filled_label" htmlFor="">First Name</label>
                                    <input type="text" onChange={(e) => inputText(e, 'first_name')} defaultValue={contact.first_name} required/>
                                    <span className="contact-error">{props.contactErrors.first ? props.contactErrors.first : null}</span>
                                </div>


                                <div className="field-last-name">
                                    <div className="last-name-container">
                                        <div className="last-name-align">
                                            <label id="last_name" className="filled_label">Last Name</label>
                                            <input type="text" onChange={(e) => inputText(e, 'last_name')} defaultValue={contact.last_name} required/>
                                            <span className="contact-error">{props.contactErrors.last ? props.contactErrors.last : null}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-address-one">
                                <div className="field">
                                    <label id="address_one" className="filled_label">Address</label>
                                    <input type="text" onChange={(e) => inputText(e, 'address_one')} defaultValue={contact.address_one} required/>
                                    <span className="contact-error">{props.contactErrors.address ? "Address can't be blank" : null}</span>
                                </div>
                            </div> 

                            <div className="order-address-two">
                                <div className="field">
                                    <label id="address_two" className="filled_label">Apartment, suite, etc. (optional)</label>
                                    <input type="text" onChange={(e) => inputText(e, 'address_two')} defaultValue={contact.address_two}/>
                                </div>
                            </div>

                            <div className="order-city">
                                <div className="field">
                                    <label id="city" className="filled_label">City</label>
                                    <input type="text" onChange={(e) => inputText(e, 'city')} defaultValue={contact.city} required/>
                                    <span className="contact-error">{props.contactErrors.city ? props.contactErrors.city : null}</span>
                                </div>
                            </div>

                            <div className="order-country-state-zipcode">
                                    <div className="order-country">
                                        <label>Country/Region</label>
                                        <select name="" id="" onChange={(e) => selectCountry(e, e.target.value)} value={contact.country}>
                                            <option value="United States">United States</option>
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
                                            <select name="" id="" onChange={(e) => selectState(e, e.target.value)} value={contact.state}>
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

                                        <div className="order-zipcode" >
                                            <div className="field" className="filled_label">
                                                <label id="zipcode" className="filled_label">Zipcode</label>
                                                <input type="text" onChange={(e) => inputText(e, 'zipcode')} defaultValue={contact.zipcode} required/>
                                                <span className="contact-error">{props.contactErrors.zipcode ? props.contactErrors.zipcode : null}</span>
                                            </div>
                                        </div>
                                </div>

                                <div className="order-phone">
                                    <div className="field" className="filled_label">
                                        <label id="phone" className="filled_label">Phone</label>
                                        <input type="text" onChange={(e) => inputText(e, 'phone')} defaultValue={contact.phone} required/>
                                        <span className="contact-error">{props.contactErrors.phone ? this.props.contactErrors.phone : null}</span>
                                    </div>
                                </div>

                            <div>

                                <h2 className="payment-shipping-title">Payment Information</h2>

                                <div className="credit-card-container">

                                    <div className="credit-card-header">
                                        <span>Credit card</span>
                                        <div className="card-icons">
                                            <li className="card-list-item"><i className="fa fa-cc-visa fa-2x" id="visa"></i></li>
                                            <li className="card-list-item"><i className="fa fa-cc-mastercard fa-2x" id="mastercard"></i></li>
                                            <li className="card-list-item"><i className="fa fa-cc-amex fa-2x" id="americanexpress"></i></li>
                                            <li className="card-list-item"><i className="fa fa-cc-discover fa-2x" id="discover"></i></li>
                                            <span> and more ...</span>
                                        </div>
                                    </div>

                                    <div className="card-info">
                                        <div className="card-number">
                                            <label id="card-number">Card numbers</label>
                                            <input type="text" className="required-input" onChange={(e) => inputText(e, 'card-number')} required/>
                                        </div>

                                        <div className="card-name">
                                            <label id="card-name">Name on card</label>
                                            <input type="text" className="required-input" onChange={(e) => inputText(e, 'card-name')} required/>
                                        </div>

                                        <div className="card-date-code">
                                            <div className="card-exp-date">
                                                <label id="card-exp-date">Expiration date (MM/YY)</label>
                                                <input type="text" className="required-input" onChange={(e) => inputText(e, 'card-exp-date')} required/>
                                            </div>

                                            <div className="card-security-code">
                                                <label id="card-security-code">Security code</label>
                                                <input type="text" className="required-input" onChange={(e) => inputText(e, 'card-security-code')} required/>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="order-summary-buttons">
                                <Link className="order-redirect-cart" to="/account"><span className="cart-arrow">&#60;</span> Return to account</Link>
                                <button id="update-order-button" onClick={() => submitUpdate()}>Update Order</button>
                            </div>

                        </div>

                        <div className="ordered-products-container">
                            
                            <div id="order-metrics">
                                <div className="metrics" id="metric-top-bar">
                                    <h2>Order Number:</h2>
                                    <span>{order.id}</span>
                                </div>

                                <div className="metrics">
                                    <h2>Order Total:</h2>
                                    <span>${parseFloat(total).toFixed(2)}</span>
                                </div>
                            </div>

                            <div id="order-product-list">

                            <h2 >Ordered Products:</h2>

                                {orderedProducts.map((details, idx) => {
                                    return <div key={idx} className="product-item-container">

                                                <OrderedProduct key={details.id} details={details} product={props.products[details.product_id]}/> 

                                                <div className="order-input-fields">
                                                    <input type="number" className="product-quantity" onChange={(e) => updateQuantity(e, details.id)} value={details.quantity} min='0'/>
                                                    <button onClick={() => removeItem(details.id)}>Remove Item</button>
                                                </div>
                                            </div>
                                })}

                            </div>
                        </div>

                    </div>                  
                : 
                    <div className="no-existing-orders">
                        <div className="form-logo-container">
                            <Link to="/"><img src={window.productImages.mainLogoBlack} alt="" width="200" height="200"/></Link>
                        </div>
                        <h1>Order Not Found</h1> 
                        <Link to="/allproducts"><button>Browse Products</button></Link>
                        {/* {redirect()} */}
                    </div>
                }

                <div className="fill-container">
                    <div className="left-container"></div>
                    <div className="right-container"></div>
                </div>

        </div>
    )
    // }
}


export default OrderShow