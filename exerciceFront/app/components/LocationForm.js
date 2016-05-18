var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PropTypes = React.PropTypes;
var GooglePlacesSuggest = require('react-google-places-suggest');

function LocationForm (props) {
  return(
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1> {props.header} </h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div id="locationField" className="form-group">
            <input
              id="autocomplete"
              className="form-control"
              placeholder="Enter your address"
              type="text"
              onChange={props.onUpdateAdresse}
              value={props.adresse}/>
          </div>

          <GooglePlacesSuggest onSelectSuggest={ this.handleSelectSuggest } search={ props.search }>
            <input
              type="text"
              value={ props.search }
              placeholder="Search a location"
              onChange={ props.handleSearchChange }
            />
          </GooglePlacesSuggest>


          <table id="address">
            <tbody>
              <tr>
                <td className="label">Street address</td>
                <td className="slimField"><input className="field" id="street_number"
                      disabled="true"></input></td>
                <td className="wideField" colSpan="2"><input className="field" id="route"
                      disabled="true"></input></td>
              </tr>
              <tr>
                <td className="label">City</td>
                <td className="wideField" colSpan="3"><input className="field" id="locality"
                      disabled="true"></input></td>
              </tr>
              <tr>
                <td className="label">State</td>
                <td className="slimField"><input className="field"
                      id="administrative_area_level_1" disabled="true"></input></td>
                <td className="label">Zip code</td>
                <td className="wideField"><input className="field" id="postal_code"
                      disabled="true" onChange={props.onUpdatePostalCode}></input></td>
              </tr>
              <tr>
                <td className="label">Country</td>
                <td className="wideField" colSpan="3"><input className="field"
                      id="country" disabled="true"></input></td>
              </tr>
            </tbody>
          </table>



          <div className=" form-group col-sm-4 col-sm-offset-4">
            <button className="btn btn-block btn-success" type="submit"> Continue </button>
          </div>
        </form>
      </div>
    </div>
  )
}

LocationForm.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateAdresse: PropTypes.func.isRequired,
  onUpdatePostalCode: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  adresse: PropTypes.string.isRequired,
  search: PropTypes.object.isRequired,
  onSearchChange : PropTypes.func.isRequired,
  onSelectSuggest :PropTypes.func.isRequired
}

module.exports = LocationForm;
