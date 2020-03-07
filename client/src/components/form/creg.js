import React, {Component} from 'react';
import $ from 'jquery';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

const form = {
  marginLeft: '20rem',
  marginTop: '10rem'
};
const blur ={
  textAlign:'-webkit-auto'
}

export default class CRegistration extends Component {
  componentDidMount () {
        const script = document.createElement("script");

        script.src = "/public/js/form/creg.js";
        script.async = true;

        document.body.appendChild(script);
        //form js
        $(document).ready(function() {
          //Initialize tooltips
          $('.nav-tabs > li a[title]').tooltip();

          //Wizard
          $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

            var $target = $(e.target);

            if ($target.parent().hasClass('disabled')) {
              return false;
            }
          });

          $(".next-step").click(function(e) {

            var $active = $('.wizard .nav-tabs li.active .show ');
            $active.next().removeClass('disabled');
            nextTab($active);

          });
          $(".prev-step").click(function(e) {

            var $active = $('.wizard .nav-tabs li.active .show');
            prevTab($active);

          });
        });

        function nextTab(elem) {
          $(elem).next().find('a[data-toggle="tab"]').click();
        }

        function prevTab(elem) {
          $(elem).prev().find('a[data-toggle="tab"]').click();
        }
        //Logo
        $(document).ready(function() {


          var readURL = function(input) {
            if (input.files && input.files[0]) {
              var reader = new FileReader();

              reader.onload = function(e) {
                $('.avatar').attr('src', e.target.result);
              }

              reader.readAsDataURL(input.files[0]);
            }
          }


          $(".file-upload").on('change', function() {
            readURL(this);
          });
        });
        //add input field1
        $(function() {
          $(document).on('click', '.btn-add', function(e) {
            e.preventDefault();

            var controlForm = $('.controls .form:first'),
              currentEntry = $(this).parents('.entry:first'),
              newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            controlForm.find('.entry:not(:last) .btn-add')
              .removeClass('btn-add').addClass('btn-remove')
              .removeClass('btn-success').addClass('btn-danger')
              .html('<div class="glyphicon glyphicon-minus"></div>');
          }).on('click', '.btn-remove', function(e) {
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
          });
        });

        //add Department
        $(document).ready(function() {
          var next = 0;
          $("#add-more").click(function(e) {
            e.preventDefault();
            var addto = "#field" + next;
            var addRemove = "#field" + (next);
            next = next + 1;
            var newIn = ' <div id="field' + next + '" name="field' + next +'" class="col-xs-12 blur" style="text-align:-webkit-auto"><!-- Text input--><div class="col-xs-6 col-sm-6 col-md-6 "><div class="form-group"><label for="first_name"><h4>Department name</h4></label><input type="text" name="last_name" id="last_name" class="form-control input-sm" placeholder="Department Name"></div></div><div class="form-group"><div class="col-xs-6"><label for="Website"><h4>head of Department(Name)</h4></label><input type="text" class="form-control" name="website" id="website" placeholder="head of Department(Name)" title="enter your email."></div></div><div class="form-group"><div class="col-xs-6"><label for="email"><h4>Email</h4></label><input type="text" class="form-control" name="email" id="email" placeholder="Company Email Id" title="enter your email."></div></div><div class="form-group"><div class="col-xs-6"><label for="email"><h4>Contact Number</h4></label><input type="text" class="form-control" name="email" id="email" placeholder="Contact Number" title="enter your email."></div></div><div class="col-lg-12 top"><h4>Please mark the appropriate box to give Access to Frames:</h4><table class="table table-primary"><thead><tr><th>Frame Name</th><th>Only Read</th><th>Read and Write</th></tr></thead><tbody><tr><td>Advertisement</td><td><label class="control-label"><input type="radio" name="addv"></label></td><td><label class="control-label"><input type="radio" name="addv"></label></td></tr><tr><td>Connection</td><td><label class="control-label"><input type="radio" name="conn"></label></td><td><label class="control-label"><input type="radio" name="conn"></label></td></tr><tr><td>Content upload</td><td><label class="control-label"><input type="radio" name="cont"></label></td><td><label class="control-label"><input type="radio" name="cont"></label></td></tr><tr><td>Discussion</td><td><label class="control-label"><input type="radio" name="disc" ></label></td><td><label class="control-label"><input type="radio" name="disc"></label></td></tr><tr><td>Expert and Mentors</td><td><label class="control-label"><input type="radio" name="exp"></label></td><td><label class="control-label"><input type="radio" name="exp"></label></td></tr><tr><td>Product Controls</td><td><label class="control-label"><input type="radio" name="prod"></label></td><td><label class="control-label"><input type="radio" name="prod"></label></td></tr><tr><td>Recruitments</td><td><label class="control-label"><input type="radio" name="rec"></label></td><td><input type="radio" name="rec"></label></td></tr><tr><td>Wall Control</td><td><label class="control-label"><input type="radio" name="wall"></label></td><td><label class="control-label"><input type="radio" name="wall"></label></td></tr><tr><td>Product Auto-Suggestion</td><td><label class="control-label"><input type="radio" name="prods"></label></td><td><label class="control-label"><input type="radio" name="prods"></label></td></tr><tr><td>Department</td><td><label class="control-label"><input type="radio" name="Dep"></label></td><td><label class="control-label"><input type="radio" name="Dep"></label></td></tr></tbody></table></div></div>';
            var newInput = $(newIn);
            var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me top" >Remove</button></div></div><div id="field">';
            var removeButton = $(removeBtn);
            $(addto).after(newInput);
            $(addRemove).after(removeButton);
            $("#field" + next).attr('data-source', $(addto).attr('data-source'));
            $("#count").val(next);

            $('.remove-me').click(function(e) {
              e.preventDefault();
              var fieldNum = this.id.charAt(this.id.length - 1);
              var fieldID = "#field" + fieldNum;
              $(this).remove();
              $(fieldID).remove();
            });
          });

        });
        //add Branch
        $(document).ready(function() {
          var next = 0;
          $("#add-more").click(function(e) {
            e.preventDefault();
            var addto = "#field" + next;
            var addRemove = "#field" + (next);
            next = next + 1;
            var newIn = ' <div id="field' + next + '" name="field' + next + '"';
            var newInput = $(newIn);
            var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me top" >Remove</button></div></div><div id="field">';
            var removeButton = $(removeBtn);
            $(addto).after(newInput);
            $(addRemove).after(removeButton);
            $("#field" + next).attr('data-source', $(addto).attr('data-source'));
            $("#count").val(next);

            $('.remove-me').click(function(e) {
              e.preventDefault();
              var fieldNum = this.id.charAt(this.id.length - 1);
              var fieldID = "#field" + fieldNum;
              $(this).remove();
              $(fieldID).remove();
            });
          });

        });


    }
  render() {
    return (<div className="App">
      <link  rel="stylesheet" href="/public/style/form/reg.css" />

    <div className="col s6">
    <img src="images/Lib.png" id="img" alt="" border="3" height="70" width="70"/>
		<h4 className="branding">Liberate</h4>
	</div>
	<div className="container">
		<div className="row form" style={form}>
			<section>
				<div className="wizard">
					<div className="wizard-inner">
						<div className="connecting-line"></div>
						<ul className="nav nav-tabs" role="tablist">

							<li role="presentation" className="active">
								<a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" title="Step 1">
									<span className="round-tab">
										<i className="glyphicon glyphicon-folder-open"></i>
									</span>
								</a>
							</li>

							<li role="presentation" className="disabled">
								<a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
									<span className="round-tab">
										<i className="glyphicon glyphicon-pencil"></i>
									</span>
								</a>
							</li>
							<li role="presentation" className="disabled">
								<a href="#step3" data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
									<span className="round-tab">
										<i className="glyphicon glyphicon-picture"></i>
									</span>
								</a>
							</li>

							<li role="presentation" className="disabled">
								<a href="#complete" data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
									<span className="round-tab">
										<i className="glyphicon glyphicon-ok"></i>
									</span>
								</a>
							</li>
						</ul>
					</div>

					<form role="form">
						<div className="tab-content">
							<div className="tab-pane active" role="tabpanel" id="step1">
								<h3>Step 1: Company Details</h3>
								<div className="col-xs-6 col-sm-6 col-md-6">
									<div className="text-center">
										<img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
										<h6>Upload Logo....</h6>
										<input type="file" className="text-center center-block file-upload"/>
									</div>
								</div>
								<div className="col-xs-6 col-sm-6 col-md-6">
									<div className="form-group">
										<label >
											<h4>Company name</h4>
										</label>
										<input type="text" name="comp_name" id="comp_name" className="form-control input-sm" placeholder="Company Name"/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label >
											<h4>Website</h4>
										</label>
										<input type="text" className="form-control" name="website" id="website" placeholder="Company Website.com" title="enter your email."/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label >
											<h4>Email</h4>
										</label>
										<input type="email" className="form-control" name="email" id="email" placeholder="Company Email Id" title="enter your email."/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label >
											<h4> Company Est. Date</h4>
										</label>
										<div className="input-group date" data-provide="datepicker">
											<input type="text" className="form-control" data-date-format="mm/dd/yyyy"/>
											<div className="input-group-addon">
												<div className="glyphicon glyphicon-th"></div>
											</div>
										</div>
									</div>
								</div>

								<div className="control-group form-group" id="fields">

									<div className="controls col-xs-6">
										<label className="control-label" >
											<h4>Contact Number</h4>
										</label>
										<div role="form" className="form form-group">
											<div className="entry input-group ">
												<input className="form-control" name="fields[]" id="mobile" type="text" placeholder="Comapny Contact Number" />
												<div className="input-group-btn">
													<button className="btn btn-success btn-add" type="button">
														<div className="glyphicon glyphicon-plus"></div>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label >
											<h4>Company Registration Number</h4>
										</label>
										<input type="text" className="form-control" name="Register" id="Reg_no" placeholder="Comapny Registration Number" title="enter your mobile number if any."/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-xs-6">
										<label >
											<h4>Company Address</h4>
										</label>
										<input type="text" className="form-control" name="comp_Address" id="comp_Address" placeholder="Comapny Address" title="enter your mobile number if any."/>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-12 blur">
										<label >
											<h4>Branch</h4>
										</label>
										<input type="text" className="form-control top" name="branch" id="branch" placeholder="Branch Name" title="enter your mobile number if any."/>
										<div className=" col-xs-6 top">
											<input id="branch_address" name="branch_address" type="text" placeholder="Address" className="form-control input-md "/>
										</div>
										<div className=" col-xs-6 top">
											<input id="branch_no" name="branch_no" type="text" placeholder="Contact Number" className="form-control input-md "/>
										</div>
										<button type="button" className="btn btn-primary next-step top ">Add more branch</button>
									</div>

								</div>
								<div className="form-group">
									<div className="col-md-12 blur">
										<label >
											<h4>Admin Details</h4>
										</label>
										<div className=" col-xs-6 top">
											<input id="admin_name" name="admin_name" type="text" placeholder="Name" className="form-control input-md "/>
										</div>
										<div className=" col-xs-6 top">
											<input id="admin_no" name="admin_no" type="text" placeholder="Contact Number" className="form-control input-md "/>
										</div>
										<div className=" col-xs-6 top">
											<input id="admin_email" name="admin_email" type="text" placeholder="email Address" className="form-control input-md "/>
										</div>
										<div className=" col-xs-6 top">
											<input id="admin_desig" name="Permanent Address" type="text" placeholder="Designation" className="form-control input-md "/>
										</div>
									</div>


								</div>
								<ul className="list-inline pull-right top">
									<li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
								</ul>
							</div>
							<div className="tab-pane" role="tabpanel" id="step2">
								<h3>Step 2: Add Departments</h3>
								<div id="field">
									<div id="field0" className="col-xs-12 blur" style={blur}>
										<div className="col-xs-6 col-sm-6 col-md-6 ">
											<div className="form-group">
												<label >
													<h4>Department name</h4>
												</label>
												<input type="text" name="dept_name" id="dept_name" className="form-control input-sm" placeholder="Department Name"/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>head of Department(Name)</h4>
												</label>
												<input type="text" className="form-control" name="hod_name" id="hod_name" placeholder="head of Department(Name)" title="enter your email."/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>Email</h4>
												</label>
												<input type="text" className="form-control" name="hod_email" id="hod_email" placeholder="Company Email Id" title="enter your email."/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>Contact Number</h4>
												</label>
												<input type="text" className="form-control" name="hod_no" id="hod_no" placeholder="Contact Number" title="enter your email."/>
											</div>
										</div>
										<div className="col-lg-12 top">
											<label className="control-label">
												<h4>Please mark the appropriate box to give Access to Frames:</h4>
											</label>

											<table className="table table-primary">
												<thead>
													<tr>
														<th>
															Frame Name
														</th>


														<th>
															Only Read
														</th>

														<th>
															Read and Write
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															Advertisement
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="addv"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="addv"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Connection
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="conn"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="conn"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Content upload
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="cont"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="cont"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Discussion
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="disc"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="disc"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Expert and Mentors
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="exp"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="exp"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Product Controls
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="prod"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="prod"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Recruitments
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="rec"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="rec"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Wall Control
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="wall"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="wall"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Product Auto-Suggestion
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="prods"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="prods"/>
															</label>
														</td>
													</tr>
													<tr>
														<td>
															Department
														</td>

														<td>
															<label className="control-label">
																<input type="radio" name="Dep"/>
															</label>
														</td>
														<td>
															<label className="control-label">
																<input type="radio" name="Dep"/>
															</label>
														</td>
													</tr>
												</tbody>

											</table>

										</div>
									</div>
									<button id="add-more" type="button" className="btn btn-primary top">Add Department</button>

								</div>
								<ul className="list-inline pull-right top">
									<li><button type="button" className="btn btn-default prev-step">Previous</button></li>
									<li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
								</ul>
							</div>

							<div className="tab-pane" role="tabpanel" id="step3">
								<h3>Step 3:Add Sub-Company</h3>
								<div className="col-xs-12 blur" style={blur}>
									<div className="col-xs-6 col-sm-6 col-md-6 ">
										<div className="form-group">
											<label >
												<h4>Company name</h4>
											</label>
											<input type="text" name="sub_comp_name" id="sub_comp_name" className="form-control " placeholder="Department Name"/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs-6">
											<label >
												<h4>CEO(Name)</h4>
											</label>
											<input type="text" className="form-control" name="sub_comp_ceo" id="sub_comp_ceo" placeholder="CEO (Name)" title="enter your email."/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs-6">
											<label >
												<h4>CEO Email</h4>
											</label>
											<input type="text" className="form-control" name="sub_comp_ceo_email" id="sub_comp_ceo_email" placeholder="CEO Email Id" title="enter your email."/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs-6 top">
											<label >
												<h4>CEO Contact Number</h4>
											</label>
											<input type="text" className="form-control" name="sub_comp_ceo_no" id="sub_comp_ceo_no" placeholder="CEO Contact Number" title="enter your email."/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs-6">
											<button type="button" className="btn btn-primary btn-info-full next-step">Add Sub-company </button>
										</div>
									</div>
								</div>
								<ul className="list-inline pull-right top">
									<li><button type="button" className="btn btn-default prev-step">Previous</button></li>
									<li><button type="button" className="btn btn-default next-step">Skip</button></li>
									<li><button type="button" className="btn btn-primary btn-info-full next-step">Save and continue</button></li>
								</ul>
							</div>
							<div className="tab-pane" role="tabpanel" id="complete">

								<div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4 blur">
									<div className="form-group">
										<div className="col-xs">
											<label >
												<h4>Username</h4>
											</label>
											<input type="text" className="form-control" name="uname" id="uname" placeholder="Username" title="enter your email."/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs">
											<label >
												<h4>Password</h4>
											</label>
											<input type="password" className="form-control" name="pass" id="pass" placeholder="password" title="enter your email."/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs top">
											<label >
												<h4>Confirm Password</h4>
											</label>
											<input type="text" className="form-control" name="conf_pass" id="conf_pass" placeholder="Confirm Password" title="enter your email."/>
										</div>
									</div>

									<div className="form-group ">
										<div className="col-xs top ">
											<a className="btn btn-primary btn-info-full next-step" href="http://localhost/Liberate_Beta_lite/threeee/Company Control Panel/rotation/info2.html">Register</a>
										</div>
									</div>
								</div>
							</div>
							<div className="clearfix"></div>
						</div>
					</form>
				</div>
			</section>
		</div>
	</div>
  </div>)
    }
}
