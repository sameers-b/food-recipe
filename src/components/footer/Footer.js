import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import './footer.css'

const Footer = () => {
   return (
      <>
       <div className="footer-container">
          <div className="row">
             <div className="footer-detail">
                <p>Logo</p>
                <p>
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
             </div>
             <div className="footer-option">
                <table>
                   <tr>
                      <th>WebName</th>
                      <th>Legal</th>
                      <th>Follow</th>
                   </tr>
                   <tr>
                      <td>About us</td>
                      <td>Terms</td>
                      <td>Facebook</td>
                   </tr>
                   <tr>
                      <td>Careers</td>
                      <td>Conditions</td>
                      <td>Twitter</td>
                   </tr>
                   <tr>
                      <td>Contact us</td>
                      <td>Cookies</td>
                      <td>Instagram</td>
                   </tr>
                   <tr>
                      <td>Feedback</td>
                      <td>Copyright</td>
                      <td>Youtube</td>
                   </tr>
                </table>
             </div>
          </div>
          <hr/>
          <div className="row">
            <div className="rights">
            © 2020 Tastebite - All rights reserved
            </div>
            <div className="social-icons">
             <div><FiFacebook /></div>
             <div><FiInstagram/></div>
             <div><FiTwitter/></div>
             <div><FiYoutube/></div>
            </div>
          </div>
       </div>  
      </>
   )
}

export default Footer ;
