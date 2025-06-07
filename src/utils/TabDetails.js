import { pen, stars, tick } from '../assets'
const PersonalInfo = [
    {
        label: "Full Name",
        type: "text",
        placholder: "Enter Full Name"
    },
    {
        label: "Date of Birth",
        type: "date",
        placholder: "DD/MM/YY"
    },
    {
        label: " Time of Birth",
        type: "date",
        placholder: "HH/MM/SS  "
    },
    {
        label: "Place of Birth",
        type: "text",
        placholder: "Enter  place of birth"
    },
    {
        label: " Manglik",
        type: "text",
        placholder: "Please Select"
    },
    {
        label: "Marital Status",
        type: "text",
        placholder: "Enter marital stauts"
    },
    {
        label: "Marital Status",
        type: "text",
        placholder: "Enter marital stauts"
    },
    {
        label: "Rashii",
        type: "text",
        placholder: "Enter Rashi"
    },
    {
        label: "Gotra/ Cast",
        type: "text",
        placholder: "Enter gotra/cast"
    },
    {
        label: "Gotra/ Cast",
        type: "text",
        placholder: "Enter gotra/cast"
    },
    {
        label: "Nationality",
        type: "text",
        placholder: "Enter nationality "
    },
    {
        label: "Religion",
        type: "text",
        placholder: "Enter Religion "
    },
    {
        label: "Complexion",
        type: "text",
        placholder: " Enter complexion "
    },
    {
        label: "Height",
        type: "text",
        placholder: " Enter Height "
    },
    {
        label: "Gender",
        type: "text",
        placholder: " Enter gender "
    },
    {
        label: "Blood group",
        type: "text",
        placholder: " Enter blood group "
    },
    {
        label: "Education",
        type: "text",
        placholder: " Enter education "
    },
    {
        label: "Occupation",
        type: "text",
        placholder: " Enter occupation "
    },
    {
        label: "Income",
        type: "text",
        placholder: " Enter income "
    },

    {
        label: "Hobbies",
        type: "text",
        placholder: " Enter hobbies "
    },

]



const FamilyInfo = [
    {
        label: "Grand Father's Name",
        type: "text",
        placholder: "Enter Father's name"
    },
    {
        label: "Father's Name",
        type: "text",
        placholder: "Enter Father's name"
    },
    {
        label: "Mother's Name",
        type: "text",
        placholder: "Enter Mother's name"
    },
    {
        label: "Father's Occupation",
        type: "text",
        placholder: "Enter occupatione"
    },
    {
        label: "Mother's  Occupation",
        type: "text",
        placholder: "Enter occupatione"
    },
    {
        label: "Brother ",
        type: "text",
        placholder: " Enter total brother's count"
    },
    {
        label: "Sister ",
        type: "text",
        placholder: " Enter total Sister's count"
    },

]

const ContactInfo = [
    {
        label: "Phone",
        type: "text",
        placholder: "Enter phone number"
    },
    {
        label: "Email",
        type: "email",
        placholder: "Enter e-mail"
    },
    {
        label: "Address",
        type: "text",
        placholder: "Enter address"
    }
];



const Card = [
    {
        img: tick,
        title: "Easy to use",
        description: "Enter your details, choose template and voila! your Biodata in pdf format is ready."
    },
    {
        img: pen,
        title: "Customization made simple",
        description: "You have full control of what you want in your marriage biodata. You can add new fields and delete or rename the existing fields"
    },
    {
        img: stars,
        title: "Great looking tamplates ",
        description: "Enter your details, choose template and voila! your Biodata in pdf format is ready."
    }
]

export { PersonalInfo, FamilyInfo, ContactInfo, Card }