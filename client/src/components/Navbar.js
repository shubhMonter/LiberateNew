import React,{Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
class AppNavbar extends Component {
  /*constructor(props){
    super(props);
    this.state={
      isOpen:false
    }
    }*/
  state ={
    isOpen:false
  }
  toggle =()=>{
    this.setState=({
      isOpen:!this.state.isOpen
    });
  }
  render(){
    return(<div>
        <Navbar color="dark" expand="sm" className="mb-5">
        <Container>
          <NavbarBrand  href="/"> Liberate </NavbarBrand>
          <NavbarToggler onClick={this.toogle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className='ml-auto' navbar>
          <NavItem>
          <NavLink href='/'>
          Home
          </NavLink>
          </NavItem>
          </Nav>
          </Collapse>
          </Container>
        </Navbar>
    </div>)
  }

}
export default AppNavbar;
