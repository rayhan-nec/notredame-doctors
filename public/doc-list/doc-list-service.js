angular.module('notredemian-doc-list.services')

//Service to call back end checkout REST API

.factory( 'Doctors', function(){

	let allDoctors = [
    {
      name: "Dr. Muhammad Asaduzzaman",
      primary_contact: "+8801711736692",
      secondary_contact: "N/A",
      description: "Assistant Professor, Critical care medicine",
      institute: "Kuwait Bangladesh Moitry Govt hospital ( designated for covid 19)",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Sharifuzzaman",
      primary_contact: "+8801712012907",
      secondary_contact: "N/A",
      description: "Assistant Scientist",
      institute: "Dhaka Hospital, Nutrition and Clinical Services Division, ICDDR,B",
      email: "drsharif@icddrb.org",
      location: "Dhaka"
    },
    {
      name: "Dr. Sabbir Karim",
      primary_contact: "+8801712222078",
      secondary_contact: "N/A",
      description: "Asst. Professor, Paediatric Surgery",
      institute: "Dhaka Shishu Hospital and Bangladesh Institute of Child Health",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Md Ashiqur Rahman Akanda",
      primary_contact: "+8801712222078",
      secondary_contact: "N/A",
      description: "Asst. Professor, Paediatric Opthalmology",
      institute: "Directorate General of Health Services",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Md Abdur Rahim",
      primary_contact: "+8801729208433",
      secondary_contact: "N/A",
      description: "Asst. Professor, General and Laparoscopic and Colorectal Surgeon",
      institute: "Sher-e-Bangla Medical College and Hospital",
      email: "N/A",
      location: "Barisal"
    },
    {      
      name: "Dr. Mridha Md Shahinuzzaman",
      primary_contact: "+8801711730694",
      secondary_contact: "N/A",
      description: "Junior consultant ( Medicine)",
      institute: "Narail Sadar Hospital, Narail",
      email: "N/A",
      location: "Narail"
    },
    {
      name: "Dr. Md. Harun-or-Rashid",
      primary_contact: "+8801711130118",
      secondary_contact: "N/A",
      description: "Assistant Professor of Surgery",
      institute: "Chandpur Medical College",
      email: "N/A",
      location: "Chandpur"
    },    
    {
      name: "Dr Md Uzzwal Mallik",
      primary_contact: "+8801711472900",
      secondary_contact: "N/A",
      description: "Assistant Professor ((Medicine specialist and Rheumatologist))",
      institute: "Department of Medicine, Dhaka Medical College",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Kazi Manwar Hossain",
      primary_contact: "+8801711363819",
      secondary_contact: "N/A",
      description: "Assisstant professor - Surgery",
      institute: "Shaheed Suhrawardy Medical College Hospital , Dhaka",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Mohammad Mahfuzul Gani (Mahfuz)",
      primary_contact: "+8801819910590",
      secondary_contact: "N/A",
      description: "Orthodontist",
      institute: "Cleft, Comprehensive Cleft & Craniofacial Center, Sheikh Hasina National Institute of Burn & Plastic Surgery",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr Mohammad Rashedul Hasan",
      primary_contact: "N/A",
      secondary_contact: "N/A",
      description: "Senior Consultant(Cardiology)",
      institute: "Noakhali General Hospital",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Mohammad Mahfuzur Rahman",
      primary_contact: "+8801711464101",
      secondary_contact: "+8801611464101",
      description: "Professor",
      institute: "Dept. of Prosthodontics, City Dental College and Hospital",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Mir Mohammad Rifat Chowdhury",
      primary_contact: "+8801764014105",
      secondary_contact: "N/A",
      description: "Jr. Consultant",
      institute: "National Heart Foundation Hospital and Research Institute",
      email: "chowrifat@gmail.com",
      location: "Dhaka"
    },
    {
      name: "Dr. Mir Mohammad Rifat Chowdhury",
      primary_contact: "+8801764014105",
      secondary_contact: "N/A",
      description: "Jr. Consultant",
      institute: "Dept. of Cardiac Anaesthesia and ICU, National Heart Foundation Hospital and Research Institute",
      email: "",
      location: "Dhaka"
    },
    {
      name: "Dr. Md. Mehedi Hasan",
      primary_contact: "+8801819378345",
      secondary_contact: "N/A",
      description: "Dental Surgeon",
      institute: "Dental unit, Chattogram Medical College",
      email: "N/A",
      location: "Chittagong"
    },
    {
      name: "Dr. Md. Mustafizur Rahman",
      primary_contact: "+8801715490304",
      secondary_contact: "N/A",
      description: "General and Orthpedic Surgeon",
      institute: "Orthopedic Division, Holy Family Red Crescent Hospital",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Md.Shahjahan Sarker",
      primary_contact: "+8801757844857",
      secondary_contact: "N/A",
      description: "Assistant Professor (ENT)",
      institute: "National Institute of ENT, Tejgaon, Dhaka",
      email: "N/A",
      location: "Dhaka"
    },
    {
      name: "Dr. Ziaur Rahman Chowdhury",
      primary_contact: "+8801552638491",
      secondary_contact: "N/A",
      description: "MD (Physical Medicine & Rehabilitation)",
      institute: "Dept. of PM&R, BSMMU",
      email: "N/A",
      location: "Dhaka"
    }
    
  ]

	return allDoctors;
} );
