import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai"
import {FaPinterest} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 One Thousand Synths - All rights reserved</p>
      <p className="icons">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <FaPinterest />
      </p>
    </div>
  )
}

export default Footer