import React from "react"
import Linkedin from '/src/assets/icon_linkedin.png'
import Discord from '/src/assets/icon_discord.png'
import Github from '/src/assets/icon_github.png'
import Netlify from '/src/assets/icon_netlify.png'

export default function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/jmldomaica/" target="_blank"><img src={Linkedin} alt="linkedin logo" className="contact-icon" /></a>
      <a href="https://www.discordapp.com/users/1024066998835105892" target="_blank"><img src={Discord} alt="Discord logo" className="contact-icon" /></a>
      <a href="https://github.com/mitild" target="_blank"><img src={Github} alt="Github logo" className="contact-icon" /></a>
      <a href="https://app.netlify.com/teams/mitild/overview" target="_blank"><img src={Netlify} alt="Netlify logo" className="contact-icon" /></a>
    </footer>
  )
}

