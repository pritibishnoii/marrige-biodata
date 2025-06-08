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




const featurBioData = {
    header: {
        title: "Features of marriage biodata maker",
        description: "We have designed the best looking, well formatted marriage biodata formats for you to just choose and make biodata without any hassle. No need to invest time on layouts, designs and getting that perfect biodata for marriage."
    },
    features: [
        {
            id: 1,
            cardTitle: "Photo in Marriage Biodata",
            cardDes: "You can create marriage biodata with photo or without photo. It depends upon your personal preference whether you want to include photo in your marriage biodata or not. Below we have..."
        },
        {
            id: 2,
            cardTitle: "Height in Marriage biodata",
            cardDes: "Height is an important aspect of personal details in marriage biodata. It should be accurate and in right format. Height can be present in marriage biodata in cm, feet or inches..."
        },
        {
            id: 3,
            cardTitle: "How to share biodata for marriage?",
            cardDes: "To share bio data for marriage you must first create marriage biodata in PDF or image format. These two formats can be opened on any device such as mobile, tablet, laptop etc.."
        },
        {
            id: 4,
            cardTitle: "Marriage Biodata in different Communities",
            cardDes: "The marriage resume can be created online for different communities of India such as Agarwal, Gupta, Hindu, Maheshwari, Muslim, Brahmin, Gujarati, Parsi...."
        }
    ]
};

const sectionBioData = {
    header: {
        title: "Sections in Marriage Biodata",
        description: "A marriage biodata should be created carefully to create the best impression on your potential matches. Each biodata is divided in different sections and sub-sections. We have included each of the below sections in our biodata form. Let us discuss each part of marriage biodata in detail :-"
    },
    features: [
        {
            id: 1,
            cardTitle: "Personal Information",
            cardDes: "The first section that needs to be filled is Personal Information. This section includes important details about the person seeking marriage, such as their full name, date of birth, and gender."
        },
        {
            id: 2,
            cardTitle: "Family Details",
            cardDes: "Family details should be included in marriage biodata so that the potential partner can know about the parents, siblings, their occupations and other relatives information."
        },
        {
            id: 3,
            cardTitle: "Contact Information",
            cardDes: "Contact information is important and should be included in marriage biodata. It is the way by which potential matches can contact each other..."
        }
    ]
};

export { PersonalInfo, FamilyInfo, ContactInfo, Card, featurBioData, sectionBioData };