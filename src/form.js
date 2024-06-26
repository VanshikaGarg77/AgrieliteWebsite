const Form = () => {
    return ( 
<div className="form">
<div className="row">
<div className="col-md-7">
<h1 className="form-contact">Contact Us</h1>
<br/>
<form action="https://formsubmit.co/vanshikagarg249177@gmail.com" method="POST">
<div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">First Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name="firstname" placeholder="First Name"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="inputPassword3"  class="col-sm-2 col-form-label">Last Name:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name="lastname" placeholder="Last Name"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
    <div class="col-sm-10">
      <input type="email" class="form-control"  name="email" placeholder="Email"/>
    </div>
  </div>
  <br/>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Mobile no.:</label>
    <div class="col-sm-10">
      <input type="number" class="form-control" name="mobile" placeholder="Mobile"/>
    </div>
  </div>
<br/>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Message:</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" name="message" placeholder="Type a Message"/>
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
<div className="col-md-5">
<img src="green.avif" className="contact-pic"/>
</div>
</div>
</div>
     );
}
 
export default Form;