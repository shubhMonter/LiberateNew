
import React, {Component} from 'react';
import $ from 'jquery';
import '../../../node_modules/popper.js/dist/popper.js';
import '../../../node_modules/bootstrap/dist/js/bootstrap.js';
const form = {
	marginLeft: '20rem',
	marginTop: '10rem'
};
const blur ={
	textAlign:'-webkit-auto'
}
export default class URegistration extends Component {
	constructor(){
		super();
		this.state={
			name:'',

		}
	}
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
							.html('<div className="glyphicon glyphicon-minus"></div>');
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
						var newIn = ' <div id="field' + next + '" name="field' + next +'" className="col-xs-12 blur" style="text-align:-webkit-auto"><!-- Text input--><div className="col-xs-6 col-sm-6 col-md-6 "><div className="form-group"><label ><h4>Department name</h4></label><input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Department Name"></div></div><div className="form-group"><div className="col-xs-6"><label ><h4>head of Department(Name)</h4></label><input type="text" className="form-control" name="website" id="website" placeholder="head of Department(Name)" title="enter your email."></div></div><div className="form-group"><div className="col-xs-6"><label ><h4>Email</h4></label><input type="text" className="form-control" name="email" id="email" placeholder="Company Email Id" title="enter your email."></div></div><div className="form-group"><div className="col-xs-6"><label ><h4>Contact Number</h4></label><input type="text" className="form-control" name="email" id="email" placeholder="Contact Number" title="enter your email."></div></div><div className="col-lg-12 top"><h4>Please mark the appropriate box to give Access to Frames:</h4><table className="table table-primary"><thead><tr><th>Frame Name</th><th>Only Read</th><th>Read and Write</th></tr></thead><tbody><tr><td>Advertisement</td><td><label className="control-label"><input type="radio" name="addv"></label></td><td><label className="control-label"><input type="radio" name="addv"></label></td></tr><tr><td>Connection</td><td><label className="control-label"><input type="radio" name="conn"></label></td><td><label className="control-label"><input type="radio" name="conn"></label></td></tr><tr><td>Content upload</td><td><label className="control-label"><input type="radio" name="cont"></label></td><td><label className="control-label"><input type="radio" name="cont"></label></td></tr><tr><td>Discussion</td><td><label className="control-label"><input type="radio" name="disc" ></label></td><td><label className="control-label"><input type="radio" name="disc"></label></td></tr><tr><td>Expert and Mentors</td><td><label className="control-label"><input type="radio" name="exp"></label></td><td><label className="control-label"><input type="radio" name="exp"></label></td></tr><tr><td>Product Controls</td><td><label className="control-label"><input type="radio" name="prod"></label></td><td><label className="control-label"><input type="radio" name="prod"></label></td></tr><tr><td>Recruitments</td><td><label className="control-label"><input type="radio" name="rec"></label></td><td><input type="radio" name="rec"></label></td></tr><tr><td>Wall Control</td><td><label className="control-label"><input type="radio" name="wall"></label></td><td><label className="control-label"><input type="radio" name="wall"></label></td></tr><tr><td>Product Auto-Suggestion</td><td><label className="control-label"><input type="radio" name="prods"></label></td><td><label className="control-label"><input type="radio" name="prods"></label></td></tr><tr><td>Department</td><td><label className="control-label"><input type="radio" name="Dep"></label></td><td><label className="control-label"><input type="radio" name="Dep"></label></td></tr></tbody></table></div></div>';
						var newInput = $(newIn);
						var removeBtn = '<button id="remove' + (next - 1) + '" className="btn btn-danger remove-me top" >Remove</button></div></div><div id="field">';
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
						var removeBtn = '<button id="remove' + (next - 1) + '" className="btn btn-danger remove-me top" >Remove</button></div></div><div id="field">';
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
		<div className="row" style={form}>
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
								<h3>Step 1: Personal Details</h3>
								<div className=" bootstrap snippet blur">
									<div className="row">
										<div className="col-sm-12">

											<div className="text-center">
												<img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar"/>
												<h6>Upload a different photo...</h6>
												<input type="file" className="text-center center-block file-upload"/>
											</div>
											<hr/><br/>
										</div>


										<div className="col-sm-9 " style={{marginLeft: "15%"}}>

											<form className="form" action="##" method="post" id="registrationForm">
												<div className="form-group">
													<div className="col-xs-6">
														<label >
															<h4>First name</h4>
														</label>
														<input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any."/>
													</div>
												</div>
												<div className="form-group">
													<div className="col-xs-6">
														<label >
															<h4>Last name</h4>
														</label>
														<input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any."/>
													</div>
												</div>

												<div className="form-group">
													<div className="col-xs-6">
														<label >
															<h4>Gender</h4>
														</label>
														<select id="input_sex" className="form-control">
															<option value="Mr."></option>
															<option value="Mr.">Male</option>
															<option value="Ms.">Female</option>
															<option value="Ms.">other</option>
														</select>
													</div>
												</div>

												<div className="form-group">
													<div className="col-xs-6">
														<label >
															<h4>Mobile</h4>
														</label>
														<input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any."/>
													</div>
												</div>
												<div className="form-group">

													<div className="col-xs-6">
														<label >
															<h4>Email</h4>
														</label>
														<input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email."/>
													</div>
												</div>
												<div className="form-group">

													<div className="col-xs-6">
														<label >
															<h4>Location</h4>
														</label>
														<input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location"/>
													</div>
												</div>

												<div className="form-group">

													<div className="col-xs-6">
														<label >
															<h4>Languages</h4>
														</label>
														<input type="password" className="form-control" name="password2" id="password2" placeholder="add languages you know" title=""/>
													</div>
													<div className="col-xs-6">
														<label >
															<h4>Work Expeirence</h4>
														</label>
														<input type="password" className="form-control" name="password2" id="password2" placeholder="expierience from other companies" title=""/>
													</div>
													<div className="col-xs-6">
														<label >
															<h4>Honors and Awards</h4>
														</label>
														<input type="password" className="form-control" name="password2" id="password2" placeholder="upload certificates" title="enter your password2."/>
													</div>
													<div className="col-xs-6">
														<label >
															<h4>Projects</h4>
														</label>
														<input type="password" className="form-control" name="password2" id="password2" placeholder="add link of project" title="enter your password2."/>
													</div>
													<div className="col-xs-6">
														<label >
															<h4>Publication</h4>
														</label>
														<input type="password" className="form-control" name="password2" id="password2" placeholder="links of published documents" title="enter your password2."/>
													</div>
													<div className="col-xs-6">
														<label >
															<h4>Patents</h4>
														</label>
														<input type="password" className="form-control" name="password2" id="password2" placeholder="patent Number" title="enter your password2."/>
													</div>
												</div>
											</form>
											<hr/>
										</div>
									</div>
								</div>

								<ul className="list-inline pull-right top">
									<li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
								</ul>
							</div>
							<div className="tab-pane" role="tabpanel" id="step2">
								<h3>Step 2:Job Details</h3>
								<div id="field">
									<div id="field0" className="col-xs-12 blur" style={blur}>
										<div className="col-xs-6 col-sm-6 col-md-6 ">
											<div className="form-group">
												<label >
													<h4>Department name</h4>
												</label>
												<input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Department Name"/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>Title</h4>
												</label>
												<input type="text" className="form-control" name="website" id="website" placeholder="Job Profiles" title="enter your email."/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>Job Description</h4>
												</label>
												<input type="text" className="form-control" name="email" id="email" placeholder="Describe your work" title="enter your email."/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>Company Project</h4>
												</label>
												<input type="text" className="form-control" name="email" id="email" placeholder="add your project you are working on" title="enter your email."/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>from</h4>
												</label>
												<input type="password" className="form-control" name="password2" id="password2" placeholder="Join Date" title="enter your password2."/>
											</div>
										</div>
										<div className="form-group">
											<div className="col-xs-6">
												<label >
													<h4>to</h4>
												</label>
												<input type="password" className="form-control" name="password2" id="password2" placeholder="Leave Date" title="enter your password2."/>
											</div>
										</div>
										<hr/>
										<div className="btn-group" data-toggle="buttons">
											<label className="btn btn-success active" style={{width: '37px'}}>
												<div className="checkBoxAllow fas fa-check"></div>
												<div className="nonCheckBoxAllow fas fa-times"></div>
											</label>
										</div>
										 Currently working
									</div>
								</div>
								<ul className="list-inline pull-right top">
									<li><button type="button" className="btn btn-default prev-step">Previous</button></li>
									<li><button type="button" className="btn btn-primary next-step">Save and continue</button></li>
								</ul>
							</div>
							<div className="tab-pane" role="tabpanel" id="step3">
								<h3>Step 3:Skills</h3>
								<div id="field">
									<div id="field0" className="col-xs-12 blur" style={blur}>
										<div className=" col-md-12 ">

											<div className="form-group">
												<label >
													<h4>Education</h4>
												</label>
												<div className="row">
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="10th"/>
													</div>
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="Institute Name"/>
													</div>
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="marks/grade"/>
													</div>
												</div>
												<hr/>
												<div className="row">
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="12th/Diploma"/>
													</div>
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="Institute Name"/>
													</div>
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="marks/grade"/>
													</div>
												</div>
												<hr/>
												<div className="row">
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="Degree"/>
													</div>
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="Institute Name"/>
													</div>
													<div className="col-md-4">
														<input type="text" name="last_name" id="last_name" className="form-control " placeholder="marks/grade"/>
													</div>
												</div>
											</div>
											<hr/>
										</div>

										<div className="col-md-12 ">
											<div className="form-group">
												<div className="col-xs-6">
													<label >
														<h4>field of study</h4>
													</label>
													<input type="text" className="form-control" name="website" id="website" placeholder="filed of study" title="enter your email."/>
												</div>
											</div>
										</div>
										<div className="col-md-12 ">
											<div className="form-group">
												<div className="col-xs-6">
													<label >
														<h4>Add your skills</h4>
													</label>
													<input type="text" className="form-control" name="email" id="email" placeholder="add skills" title="enter your email."/>
												</div>
												<div className="col-xs-6">
													<label >
														<h4>Rate your skills</h4>
													</label>
													<input type="text" className="form-control" name="email" id="email" placeholder="Rate between 1-10" title="enter your email."/>
												</div>
											</div>
										</div>
										<div className="col-md-12 ">
											<div className="form-group">
												<div className="col-xs-6">
													<label >
														<h4>upload certificates (if any)</h4>
													</label>
													<input type="password" className="form-control" name="password2" id="password2" placeholder="certificates" title="enter your password2."/>
												</div>
											</div>
										</div>
									</div>
									<ul className="list-inline pull-right top">
										<li><button type="button" className="btn btn-default prev-step">Previous</button></li>
										<li><button type="button" className="btn btn-default next-step">Skip</button></li>
										<li><button type="button" className="btn btn-primary btn-info-full next-step">Save and continue</button></li>
									</ul>
								</div>
							</div>

							<div className="tab-pane" role="tabpanel" id="complete">

								<div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4 blur">
									<div className="form-group">
										<div className="col-xs">
											<label >
												<h4>Username</h4>
											</label>
											<input type="text" className="form-control" name="website" id="website" placeholder="Username" title="enter your email."/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs">
											<label >
												<h4>Password</h4>
											</label>
											<input type="password" className="form-control" name="email" id="email" placeholder="password" title="enter your email."/>
										</div>
									</div>
									<div className="form-group">
										<div className="col-xs top">
											<label >
												<h4>Confirm Password</h4>
											</label>
											<input type="text" className="form-control" name="email" id="email" placeholder="Confirm Password" title="enter your email."/>
										</div>
									</div>

									<div className="form-group ">
										<div className="col-xs top ">
											<a className="btn btn-primary btn-info-full next-step" href="http://localhost/Liberate_Beta_lite/threeee/user%20control%20panel/PAGES/classroom/tech.html">Register</a>
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
