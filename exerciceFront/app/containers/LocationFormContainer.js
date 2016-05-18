import React, { Component } from 'react'
import LocationForm from '../components/LocationForm'

class LocationFormContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      adresse:'',
      postal_code: '',
      'height': '',
      'length': '',
      'width': '',
      'weight': '',
      search: '',
      selectedCoordinate: null
    }
  }

  handleSearchChange (e){
    this.setState({ search: e.target.value })
  }
   
  handleSelectSuggest  (suggestName, coordinate){
    this.setState({ search: suggestName, selectedCoordinate: coordinate })
  }

  handleUpdateAdresse(e) {
    this.setState({
     adresse : e.target.value
    })

  }

  handleUpdatePostalCode(e) {
    this.setState({
     postal_code : e.target.value
    })

  }

  handleFocusUser(e) {
  }

  handleSubmitUser(e) {
    e.preventDefault();
    var postal_code = this.state.postal_code;
    this.setState({
     postal_code:''
    });

    if (this.props.routeParams.pickup) {
     //go to battle
      console.log(this.context);
      this.context.router.push({
        pathname: '/recap',
        query: {
          pickup: this.props.routeParams.pickup,
          shipping: this.state.postal_code
        }
      })
    } else {
     //go to playerTwo
      console.log(this.context);
      this.context.router.push('/shipping/' + this.state.postal_code)

    }
  }

  render() {
    return (
      <LocationForm
        onSubmitUser={this.handleSubmitUser}
        onUpdateAdresse={this.handleUpdateAdresse}
        onUpdatePostalCode={this.handleUpdatePostalCode}
        header={this.props.route.header}
        adresse={this.state.adresse}
        search = {this.state}
        onSearchChange ={this.handleSearchChange}
        onSelectSuggest = {this.handleSelectSuggest}>

      </LocationForm>
    )
  }
}

LocationFormContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default LocationFormContainer
