import React from 'react'
import ProfileImg from '/src/assets/my-img.jpg'

export default function Info() {
  return (
    <header className="hero-section">
      <img src={ProfileImg} alt=" a portrait of Juanma"  className="profile-img" />
      <h1 className="name">Juanma López Domaica</h1>
      <h3 className="job-title">Frontend Developer</h3>
      <a className="projects" href="https://github.com/mitild">My Projects</a>
      <button className="btn light-btn"><i className="fa-solid fa-envelope"></i><a href="mailto:mitild82@gmail.com" target="_blank">Email</a></button>
      <button className="btn dark-btn"><i className="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/jmldomaica/" target="_blank">Linkedin</a></button>
    </header>
  )
}