import {
  CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
  DELETE_SELECTED_CONTACT,
  SHOW_DISC,
  SEARCH_CONTACT
} from "../constant/types";

const intialState = {
  contacts: [
    {
      id: 1,
      name: "Swati",
      username: "Bret",
      email: "swati@gmail.com",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Google",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
      disc:false,
    },
    {
      id: 2,
      name: "Siddharth",
      username: "Antonette",
      email: "siddharth@gmail.com",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Bosch",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
      disc:false,
    },
    {
      id: 3,
      name: "Janukeesh",
      username: "Samantha",
      email: "janukeesh@gmail.com",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Infoedge",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
      disc:false,
    },
    {
      id: 4,
      name: "Shekhar",
      username: "Karianne",
      email: "shekhar@gmail.com",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Bosch",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
      disc:false,
    },
    {
      id: 5,
      name: "Priya",
      username: "Kamren",
      email: "priya@gmail.com",
      address: {
        street: "Skiles Walks",
        suite: "Suite 351",
        city: "Roscoeview",
        zipcode: "33263",
        geo: {
          lat: "-31.8129",
          lng: "62.5342",
        },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
        name: "Adobe",
        catchPhrase: "User-centric fault-tolerant solution",
        bs: "revolutionize end-to-end systems",
      },
      disc:false,
    },
    {
      id: 6,
      name: "Ishan",
      username: "Leopoldo_Corkery",
      email: "Ishan@gmail.com",
      address: {
        street: "Norberto Crossing",
        suite: "Apt. 950",
        city: "South Christy",
        zipcode: "23505-1337",
        geo: {
          lat: "-71.4197",
          lng: "71.7478",
        },
      },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: {
        name: "DE Shaw",
        catchPhrase: "Synchronised bottom-line interface",
        bs: "e-enable innovative applications",
      },
      disc:false,
    },
    
    {
      id: 7,
      name: "Pankaj",
      username: "Elwyn.Skiles",
      email: "pankaj@gmail.com",
      address: {
        street: "Rex Trail",
        suite: "Suite 280",
        city: "Howemouth",
        zipcode: "58804-1099",
        geo: {
          lat: "24.8918",
          lng: "21.8984",
        },
      },
      phone: "210.067.6132",
      website: "elvis.io",
      company: {
        name: "Airnb",
        catchPhrase: "Configurable multimedia task-force",
        bs: "generate enterprise e-tailers",
      },
      disc:false,
    },
    {
      id: 8,
      name: "Vivek",
      username: "Maxime_Nienow",
      email: "vivek@gmail.com",
      address: {
        street: "Ellsworth Summit",
        suite: "Suite 729",
        city: "Aliyaview",
        zipcode: "45169",
        geo: {
          lat: "-14.3990",
          lng: "-120.7677",
        },
      },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: {
        name: "Siemens",
        catchPhrase: "Implemented secondary concept",
        bs: "e-enable extensible e-tailers",
      },
      disc:false,
    },
    {
      id: 9,
      name: "Mohit",
      username: "Delphine",
      email: "mohit@gmail.com",
      address: {
        street: "Dayna Park",
        suite: "Suite 449",
        city: "Bartholomebury",
        zipcode: "76495-3109",
        geo: {
          lat: "24.6463",
          lng: "-168.8889",
        },
        disc:false,
      },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: {
        name: "Oyo",
        catchPhrase: "Switchable contextually-based project",
        bs: "aggregate real-time technologies",
      },
      disc:false,
    },
    {
      id: 10,
      name: "Ramesh",
      username: "ramesh@gmail.com",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        zipcode: "31428-2261",
        geo: {
          lat: "-38.2386",
          lng: "57.2232",
        },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "MasterCard",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
      disc:false,
    },
  ],
  contact: null,
  selectedContacts: [],
  searchedcontacts:[],
  searchflag:false,
};

export const contactReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: action.payload,
      };

    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    case SHOW_DISC:
      return{
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? {...contact,disc:true} :{...contact,disc:false}
        ),
      };
      case SEARCH_CONTACT:
        return{
          ...state,
          searchflag:true,
          searchedcontacts:state.contacts.map(contact =>
            contact.name.toLowerCase().includes(action.payload.toLowerCase())  ? contact : null
          )
        }
    default:
      return state;
  }
};
