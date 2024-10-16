import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>حيث نأخذكم في رحلة من النكهات الرائعة والإبداعات الفنية! نحن متحمسون لتقديم كعكات مصنوعة بأفضل المكونات الطازجة، مع اهتمام خاص بالتفاصيل.

سواء كنتم تبحثون عن كعكة مميزة لمناسبة خاصة أو ترغبون في تذوق شيء جديد، فإن متجرنا يقدم مجموعة متنوعة تناسب جميع الأذواق. من الكعكات الكلاسيكية إلى النكهات الفريدة، نعدكم بتجربة لا تُنسى.

نحن نؤمن بأن كل كعكة تحكي قصة، لذا نخصص وقتاً في تصميم كل واحدة لتكون فريدة وتعكس ذوقكم. زورونا اليوم واكتشفوا سحر "كيك هش"!</p>
            {/* <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div> */}
        </div>
        <div className="footer-content-center">
            <h2>CakeFlake_</h2>
            <ul>
                <li>الرئيسية</li>
                <li>من نحن</li>
                {/* <li>Delivery</li> */}
                <li>السياية و الخصوصية</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>ابقوا على تواصل معنا</h2>
            <ul>
                <li><a href="https://www.instagram.com/_cakeflake/?next=%2F_cakeflake%2F&hl=en">Instagram: CakeFlake_ </a></li>
                <li><a href="https://www.tiktok.com/@cakeflake_">Tiktok: CakeFlake_</a></li>
                <li><a href="https://wa.me/+966581290378">Whatsup: 0581290378</a></li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © CakeFlake_  All Right Reserved.</p>
    </div>
  )
}

export default Footer
