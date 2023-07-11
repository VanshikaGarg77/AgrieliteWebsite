const Contact = () => {
    return ( 
        <div className="contact" id="contact">
        
            <h1 className="us">CONTACT US</h1>
            
            <div className="c_logo">
            <div className="row">
            <div className="col-md-2">
            <img src="whitelogo.png" className="c"/>
            </div>
            <div className="col-md-5">
            <h3>
            <p className="email">
              <br/>  AGRI E-LITE,KD Complex,Near Maheshwari Chowk,100 Feet road,Bathinda.<br/>
                Corp. Office</p>
            <h4><br/>E-mail id : 
            <p className="email actual-email">canreachnaveen@gmail.com</p></h4>
            <h4>Mobile :<p className="email">79734-96784<br/>
            70099-96784</p></h4>
            </h3>
            </div>
            <div className="col-md-5">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.767982024519!2d74.95214867502628!3d30.21516887483811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391732a52bd4b15f%3A0xdd00ea48d73589c!2sPotencia%20Academy%20For%20IIT-JEE%20%7C%20NEET%20%7C%20CUET%20%7C%20Foundation!5e0!3m2!1sen!2sin!4v1686914632981!5m2!1sen!2sin"></iframe>
            </div>
            </div>
            </div>
           
        </div>
     );
}
 
export default Contact;