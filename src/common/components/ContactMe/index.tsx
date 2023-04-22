import ContactCard from "./ContactCard"
import linkedin from "../../../common/assets/Icons/linkedin.png"
import gmail from "../../../common/assets/Icons/gmail.png"
import github from "../../../common/assets/Icons/github.png"

export type IContact = {
  id: number,
  icon: string,
  color: string,
  text: string,
  url: string,
}

const contactLinks: IContact[] = [
  {
    id: 1,
    icon: gmail,
    color: 'bg-gmail',
    text: 'tienphat0707@gmail.com',
    url: '',
  },
  {
    id: 2,
    icon: linkedin,
    color: 'bg-linkedin',
    text: 'linkedin.com/in/letrantienphat/',
    url: 'https://www.linkedin.com/in/letrantienphat/',
  },
  {
    id: 3,
    icon: github,
    color: 'bg-github',
    text: 'github.com/leTranTienPhat',
    url: 'https://github.com/leTranTienPhat',
  },
]

const ContactMe = () => {
  return (
    <div className="container flex flex-col  justify-center items-center  rounded-3xl py-10">
      <h3 className="font-bold text-[60px] dark:text-white py-10">{"<Contact />"}</h3>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
        {contactLinks.map((contact) => {
          return (
            <ContactCard key={contact.id} contact={contact} />
          )
        })}
      </div>
    </div>
  )
}

export default ContactMe