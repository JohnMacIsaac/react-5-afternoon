const initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
}

const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERY_TYPE = 'UPDATE_PROPERY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND'; 
const UPDATE_REAL_ESTATE_AGENT = 'REAL_ESTATE_AGENT'; 
const UPDATE_COST = 'COST'; 
const UPDATE_DOWN_PAYMENT = 'DOWN_PAYMENT'; 

const UPDATE_CREDIT = 'CREDIT'; 
const UPDATE_HISTORY = 'HISTORY'; 
const UPDATE_ADDRESS_ONE = 'ADDRESS_ONE'; 
const UPDATE_ADDRESS_TWO = 'ADDRESS_TWO'; 
const UPDATE_ADDRESS_THREE = 'ADDRESS_THREE'; 
const UPDATE_FIRST_NAME = 'FIRST_NAME'; 
const UPDATE_LAST_NAME = 'LAST_NAME'; 
const UPDATE_EMAIL = 'EMAIL'; 



// action creator for wizardOne
export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  }
}
export function updatePropertyType(propertyType) {
  return {
    type: UPDATE_PROPERY_TYPE,
    payload: propertyType
  }
}

// action creator for wizardTwo
export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}

// action creator for wizardThree 
export function updateProp (prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

// action creator for wizardFour 
export function updateFound(found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  }
}

export function updateAgent(realEstateAgent) {
  return {
    type: UPDATE_REAL_ESTATE_AGENT,
    payload: realEstateAgent
  }
}
export function updateCost(cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  }
}
export function updateDownPayment(downPayment) {
  return {
    type: UPDATE_DOWN_PAYMENT,
    payload: downPayment
  }
}
export function updateCredit(credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  }
}
export function updateHistory(history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  }
}
export function updateAddressOne(addressOne) {
  return {
    type: UPDATE_ADDRESS_ONE,
    payload: addressOne
  }
}
export function updateAddressTwo(addressTwo) {
  return {
    type: UPDATE_ADDRESS_TWO,
    payload: addressTwo
  }
}
export function updateAddressThree(addressThree) {
  return {
    type: UPDATE_ADDRESS_THREE,
    payload: addressThree
  }
}
export function updateFirst(first) {
  return {
    type: UPDATE_FIRST_NAME,
    payload: first
  }
}
export function updateLast(last) {
  return {
    type: UPDATE_LAST_NAME,
    payload: last
  }
}
export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  }
}

export default function reducer(state = initialState, action){
  switch (action.type) {
    case 'UPDATE_LOAN_TYPE': 
      // return Object.assign({}, state, { loanType: action.payload } ); //ES6
      return { ...state, loanType: action.payload }; //ES8 

    case 'UPDATE_PROPERTY_LOAN': 
      // return Object.assign({}, state, { propertyType: action.payload }); 
      return { ...state, propertyType: action.payload };

    case 'UPDATE_CITY': 
      // return Object.assign({}, state, { city: action.payload }); 
      return { ...state, city: action.payload };

    case 'UPDATE_PROP':
    // return Object.assign({}, state, { prop: action.payload });
      return { ...state, propToBeUsedOn: action.payload };

    case 'UPDATE_FOUND':
      return { ...state, found: action.payload }; 

    case 'REAL_ESTATE_AGENT': 
      return { ...state, realEstateAgent: action.payload };
        
    case 'COST': 
      return { ...state, cost: action.payload };
        
    case 'DOWN_PAYMENT': 
      return { ...state, downPayment: action.payload };
        
    case 'CREDIT': 
      return { ...state, credit: action.payload };
        
    case 'HISTORY': 
      return { ...state, history: action.payload };
        
    case 'ADDRESS_ONE': 
      return { ...state, addressOne: action.payload };
        
    case 'ADDRESS_TWO': 
      return { ...state, addressTwo: action.payload };
        
    case 'ADDRESS_THREE': 
      return { ...state, addressThree: action.payload };
        
    case 'FIRST_NAME': 
      return { ...state, firstName: action.payload };
        
    case 'LAST_NAME': 
      return { ...state, lastName: action.payload };
        
    case 'EMAIL': 
      return { ...state, email: action.payload };
      
    default: 
      return state;
  }
}
