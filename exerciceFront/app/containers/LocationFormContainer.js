var React = require('react');
var LocationForm = require('../components/LocationForm');
var ShippingOptions = require('../utils/shippingOptions.js')

var LocationFormContainer = React.createClass ({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      adresse:'',
      postal_code: '',
      'height': '',
      'length': '',
      'width': '',
      'weight': ''
    }
  },

  handleUpdateAdresse:function(e) {
    document.getElementById('submitLocation').disabled = false
    if(this.state.adresse === '') {
      document.getElementById('submitLocation').disabled = true
    }
    this.setState({
     adresse : e.target.value,
     postal_code: document.getElementById("postal_code").value
    });
    console.log("adresse1"+ this.state.adresse);
    console.log("postal_code"+ this.state.postal_code)
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    var postal_code = this.state.postal_code;

    this.setState({
     adresse : document.getElementById("autocomplete").value,
     postal_code: document.getElementById("postal_code").value
    });
    setTimeout(function(){
      if(this.state.postal_code === '') {
        alert("L'adresse n'est pas complète");
      }else{
          if (this.props.routeParams.pickup) {
           //go to battle
            ShippingOptions.body.route[1].location.postal_code = this.state.postal_code;
            this.context.router.push({
              pathname: '/recap',
              query: {
                pickup: this.props.routeParams.pickup,
                shipping: this.state.postal_code
              }
            })
            ShippingOptions.getDateInfo(ShippingOptions.body);
          } else {
              this.context.router.push('/shipping/' + this.state.postal_code)
              ShippingOptions.body.route[0].location.postal_code = this.state.postal_code;
              this.setState({
               adresse : '',
               postal_code: ''
              });
          }
      }}.bind(this), 500);
    console.log(ShippingOptions.body);
  },

  componentWillMount: function() {
    var script = document.createElement("script");
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCzFfVxfxvIqCQotZVnF5_b5ETTh5i3L40&signed_in=true&libraries=places&callback=initAutocomplete&location=37.76999,-122.44696";
    script.async = true;
    document.body.appendChild(script);
  },

  render : function() {
    return (
      <LocationForm
        onSubmitUser={this.handleSubmitUser}
        onUpdateAdresse={this.handleUpdateAdresse}
        onUpdatePostalCode={this.handleUpdatePostalCode}
        header={this.props.route.header}
        adresse={this.state.adresse}
        postal_code={this.state.postal_code}
        search = {this.state}
        onSearchChange ={this.handleSearchChange}
        onSelectSuggest = {this.handleSelectSuggest}>

      </LocationForm>
    )
  }
});


module.exports =  LocationFormContainer
