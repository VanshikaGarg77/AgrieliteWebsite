const Form = () => {
    return ( 
        // <div className="form">
        //  First Name:   <input type="text"></input>
        //  <br/>
        //  Last Name:<input type="text"></input>
        //  <br/>
        //  Mobile no.:<input type="number"></input>
        //  <br/>
        //  Email id:<input type="email"/><br/>
        //  Message:<input type="text" className="msg"/>
        // </div>
       /* <div className="form">
        <h1>Contact Us</h1>
        <section class="contact-wrap">
  <form action="" class="contact-form">
    <div class="col-sm-4">
      <div class="input-block">
        <label for="">First Name</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="input-block">
        <label for="">Last Name</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-block">
        <label for="">Email</label>
        <input type="text" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-block">
        <label for="">Mobile no.:</label>
        <input type="number" class="form-control"/>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="input-block textarea">
        <label for="">Drop your message here</label>
        <textarea rows="3" type="text" class="form-control"></textarea>
      </div>
    </div>
    <div class="col-sm-5">
      <button class="square-button">Send</button>
    </div>
  </form>
</section>
</div>*/
<div className="form">
<h1>Contact Us</h1>
<br/>
<form>
<div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">First Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="First Name"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Last Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="Last Name"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control"  placeholder="Email"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile no.:</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" placeholder="Mobile"/>
    </div>
  </div>
<br/>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Message:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  placeholder="Message"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button> 
    </div>
  </div>
</form>
</div>
     );
}
 
export default Form;