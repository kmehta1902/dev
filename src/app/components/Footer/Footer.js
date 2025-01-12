 'use client'
 import React from 'react';
 import Image from 'next/image';
 import styles from './Footer.module.css';

 const Footer = () => {
   return (
//     <footer className={styles.footer}>
//       <div className={styles.footerContent}>
//         {/* Top Row */}
//         <div className={styles.footerGrid}>
//           {/* Company Section */}
//           <div className={styles.company}>
//             <Image
//               src="/logo-dark.jpg"
//               alt="DevionX Technologies Logo"
//               width={150}
//               height={50}
//               className={styles.logo}
//             />
//             <h2>DevionX Technologies</h2>
//             <p>Providing innovative software solutions for businesses worldwide.</p>
//             <div className={styles.socialLinks}>
//               <a href="#"><i className="fab fa-facebook"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-linkedin"></i></a>
//             </div>
//           </div>

//           {/* Services Section */}
//           <div className={styles.section}>
//             <h3>Services</h3>
//             <ul>
//               <li><a href="#">Customised Software Development</a></li>
//               <li><a href="#">Enterprise Solutions</a></li>
//               <li><a href="#">Cloud Solutions</a></li>
//               <li><a href="#">IT Consultancy</a></li>
//               <li><a href="#">Web Application Development</a></li>
//               <li><a href="#">IOS/Android App Development</a></li>
//               <li><a href="#">MVP Product Development</a></li>
//               <li><a href="#">UI/UX Design</a></li>
//               <li><a href="#">Tech Resources</a></li>
//             </ul>
//           </div>

//           {/* Products Section */}
//           <div className={styles.section}>
//             <h3>Products</h3>
//             <ul>
//               <li><a href="#">LMS</a></li>
//               <li><a href="#">ERP</a></li>
//               <li><a href="#">CRM</a></li>
//               <li><a href="#">E-Commerce</a></li>
//             </ul>
//           </div>

//           {/* Industries Section */}
//           <div className={styles.section}>
//             <h3>Industries</h3>
//             <ul>
//               <li><a href="#">BFSI</a></li>
//               <li><a href="#">Manufacturing</a></li>
//               <li><a href="#">Pharmaceuticals</a></li>
//               <li><a href="#">Education</a></li>
//             </ul>
//           </div>
//         </div>



//         {/* Bottom Row */}
//         <div className={styles.footerGridSecondary}>
//           {/* Company Links Section */}
//           <div className={styles.section}>
//             <h3>Company</h3>
//             <ul>
//               <li><a href="#">Leadership</a></li>
//               <li><a href="#">Testimonials</a></li>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Career</a></li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div className={styles.section}>
//             <h3>Contact Us</h3>
//             <p><i className="fas fa-user"></i> DevionX- Mr. Ajay Bade</p>
//             {/* <p><i className="fas fa-envelope"></i> </p> */}
//             <p><i className="fas fa-phone"></i> +91 9370613157</p>

//             <p><i className="fas fa-user"></i> DevionX- Mr. Shrikrushna Patil</p>
//             {/* <p><i className="fas fa-envelope"></i> </p> */}
//             <p><i className="fas fa-phone"></i> +91 7666675306</p>
//           </div>
//         </div>
//       </div>

//       <div className={styles.copyright}>
//         <p>© 2024 DevionX Technologies. All rights reserved.</p>
//       </div>
//     </footer>

<footer className={styles.footer}>
<div className={styles.footerContent}>
  {/* Top Row */}
  <div className={styles.footerGrid}>
    {/* Company Section */}
    <div className={styles.company}>
      <Image
        src="/logo.png"
        alt="DevionX Technologies Logo"
        width={150}
        height={50}
        className={styles.logo}
      />
      <h2>DevionX Technologies</h2>
      <p>Providing innovative software solutions for businesses worldwide.</p>
      <div className={styles.socialLinks}>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </div>

    {/* Services Section */}
    <div className={styles.section}>
      <h3>Services</h3>
      <ul>
        <li><a href="#">Customised Software Development</a></li>
        <li><a href="#">Enterprise Solutions</a></li>
        <li><a href="#">Cloud Solutions</a></li>
        <li><a href="#">IT Consultancy</a></li>
        <li><a href="#">Web Application Development</a></li>
        <li><a href="#">IOS/Android App Development</a></li>
        <li><a href="#">MVP Product Development</a></li>
        <li><a href="#">UI/UX Design</a></li>
        <li><a href="#">Tech Resources</a></li>
      </ul>
    </div>

    {/* Products Section */}
    <div className={styles.section}>
      <h3>Products</h3>
      <ul>
        <li><a href="#">LMS</a></li>
        <li><a href="#">ERP</a></li>
        <li><a href="#">CRM</a></li>
        <li><a href="#">E-Commerce</a></li>
      </ul>
    </div>

    {/* Industries Section */}
    <div className={styles.section}>
      <h3>Industries</h3>
      <ul>
        <li><a href="#">BFSI</a></li>
        <li><a href="#">Manufacturing</a></li>
        <li><a href="#">Pharmaceuticals</a></li>
        <li><a href="#">Education</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Row */}
  <div className={styles.footerGridSecondaryWrapper}>
    <div className={styles.footerGridSecondary}>
      {/* Company Links Section */}
      <div className={styles.section}>
        <h3>Company</h3>
        <ul>
          <li><a href="#">Leadership</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className={styles.section}>
             <h3>Contact Us</h3>
             <p><i className="fas fa-user"></i> DevionX- Mr. Ajay Bade</p>
             {/* <p><i className="fas fa-envelope"></i> </p> */}
             <p><i className="fas fa-phone"></i> +91 9370613157</p>

             <p><i className="fas fa-user"></i> DevionX- Mr. Shrikrushna Patil</p>
             {/* <p><i className="fas fa-envelope"></i> </p> */}
             <p><i className="fas fa-phone"></i> +91 7666675306</p>
           </div>
    </div>
  </div>
</div>

<div className={styles.copyright}>
  <p>© 2024 DevionX Technologies. All rights reserved.</p>
</div>
</footer>
   );
 };

 export default Footer;


