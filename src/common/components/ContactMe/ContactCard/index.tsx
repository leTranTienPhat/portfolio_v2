import { IContact } from ".."
import "./style.css"

type Props = {
  contact: IContact
}

const ContactCard = ({ contact }: Props) => {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          <div className={`icon flex justify-center items-center ${contact.color}`}>
            <img src={contact.icon} alt="contact icon" className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <h3 className="text-lg">
            <a href={contact.url} target="_blank">{contact.text}</a>
          </h3>
        </div>
      </div>
    </div>)
}

export default ContactCard