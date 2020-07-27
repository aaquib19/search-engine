import React, { Component } from "react";
import "./search.scss";
import { MDBIcon, MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      q: "",
      circles_names: [
        "circlesmall1",
        "circlesmall2",
        "circlesmall3",
        "circlesmall4",
        "circlesmall5",
        "circlesmall6",
        "circlesmall7",
        "circlesmall8",
      ],
      circlesmall1: "cities",
      circlesmall2: "cities",
      circlesmall3: "cities",
      circlesmall4: "cities",
      circlesmall5: "cities",
      circlesmall6: "cities",
      circlesmall7: "cities",
      circlesmall8: "cities",
      data: {
        delhi: {
          Monuments: [
            "Qutub Minar",
            "Lotus temple",
            "Red Fort",
            "India Gate",
            "Iron Pillar",
            "Raj Ghat",
            "Sultan Ghani",
            "Delhi Gate",
          ],
          Hotel: [
            "Hyat Regency",
            "Hotel Le Roi",
            "Palm Springs",
            "International Inn",
            "Hotel Aero Star",
            "Roseate",
            "JW Mariott",
            "Radisson Blue",
          ],
          Restaurant: [
            "Mumtaj",
            "Fifty Five",
            "JW Cafe",
            "Kenny star",
            "Afzal ",
            "Akash Sagar",
            "73 bar & bistro",
            "Shivneri ",
          ],
          School: [
            "Kendriya Vidhalaya",
            "DPS",
            "Central academy",
            "Saint marry",
            "Bright land",
            "Army School",
            "Aakash school",
            "Scindia School",
          ],
          College: [
            "Hansraj College",
            "Zakir Husain  College",
            "Vivekananda College",
            "Shivaji College",
            "College of Arts & Commerce",
            "Dyal Singh College",
            "Hindu College ",
            "Maharaja Agrasen",
          ],
          Hospitals: [
            "Fortis Hospital",
            "Kalra Hospital",
            "Aashlok Hospital",
            "Swasthik Hospital",
            "Fortis ",
            "Apollo Spectra ",
            "Air Ambulance",
            "Primus Super Speciality",
          ],
          Markets: [
            "Khan Market",
            "Daryaganj Market",
            "Janpath Market",
            "Shankar Market",
            "Monastery Market",
            "Karol Bagh Market",
            "Chandni Chowk Market",
            "Delhi Organic Market",
          ],
          Malls: [
            "Select CITYWALK",
            "Pacific Mall",
            "DLF Promenade",
            "DLF Avenue Saket",
            "DLF Emporio",
            "Ambience Mall",
            "City Square Mall",
            "Cross River Mall",
          ],
        },
        kolkata: {
          Monuments: [
            "Victoria Memorial",
            "Fort William",
            "Belur Math",
            "Marble Palace",
            "Jorasanko Thakur",
            "Shaheed Minar",
            "Indian Museum",
            "Paul’s Cathedral",
          ],
          Hotel: [
            "The Oberoi Grand",
            "The Westin Kolkata",
            "The Park Kolkata",
            "Vedic Village Resort",
            "Raajkutir ",
            "Pride Plaza Hotel",
            "JW Mariott",
            "Fortune Park",
          ],
          Restaurant: [
            "Indies",
            "Grand Market ",
            "Ottimo Cucina Italiana",
            "Seasonal Tastes",
            "Dum Pukht ",
            " Vintage Asia",
            "Pan Asian",
            "Eden Pavilion ",
          ],
          School: [
            "Calcutta Boys' School",
            "The Newtown School,Kolkata",
            "Modern High School for Girls",
            "Calcutta International School",
            "Calcutta Girls' High School",
            "The Heritage School",
            "Don Bosco School",
            "Mahadevi Birla World Academy",
          ],
          College: [
            "City College",
            "Loreto College",
            "Scottish Church College",
            "Asutosh College",
            "The Bhawanipur College",
            "Gokhale Memorial College",
            "Calcutta Girls' College",
            "Maulana Azad College",
            "Gurudas College",
          ],
          Hospitals: [
            "kolkata hospital",
            "Fortis Hospital",
            "Lions North Calcutta Hospital",
            "RSV Hospital",
            "Calcutta Gujarati Hospital",
            "ILS Hospitals",
            "DESUN Hospital",
            "Kothari Medical Centre",
          ],
          Markets: [
            "Hatibagan Market",
            "Gariahat Market",
            "Chowringhee Market",
            "Koley Market",
            "Fruit Market",
            "Mechhua Fruit",
            "GD Market",
            "Agriculture Market",
          ],
          Malls: [
            "Quest Mall",
            "City Centre Mall",
            "Acropolis Mall",
            "Forum Courtyard Mall",
            "South City Mall",
            "Axis Mall",
            "Diamond Plaza",
            "E-Mall",
          ],
        },
        mumbai: {
          Hotel: [
            "Mumbai Palace Hotel",
            "The Taj Mahal Palace, Mumbai",
            "Mumbai Palace Hotel",
            "Grand Hyatt Mumbai Hotel",
            "The Oberoi, Mumbai",
            "Four Seasons Hotel Mumbai",
            "JW Marriott",
            "Fariyas Hotel Mumbai",
          ],
          Restaurant: [
            "Mumtaj",
            "Fifty Five",
            "JW Cafe",
            "Kenny star",
            "Afzal ",
            "Akash Sagar",
            "73 bar & bistro",
            "Shivneri ",
          ],
          School: [
            "Bright land",
            "Saint marry",
            "Central academy",
            "DPS",
            "Kendriya Vidhalaya",
            "Army School",
            "Aakash school",
            "Scindia School",
          ],
          College: [
            "Elphinstone College",
            "Jai Hind College",
            "Sathaye College",
            "Wilson College",
            "Sophia College",
            "M.H. Saboo Siddik ",
            "Siddharth Law College",
            "IIT Bombay",
          ],
          Hospital: [
            "Sujyot Heart Clini",
            "Saifee Hospital",
            "Holy Spirit",
            "Wockhardt Hospital",
            "Seven Hills Hospital",
            "Hinduja Hospital",
            "Lilavati Hospital",
            "Thunga Hospital",
          ],
          Market: [
            "Mangaldas Market",
            "Fashion Street",
            "Colaba Causeway Market",
            "Colaba Market",
            "Manish Market",
            "Dadar Flower Market.",
            "Bombay Super Market",
            "New Hindmata Cloth Market",
          ],
          Mall: [
            "High Street Phoenix",
            "nfiniti Mall",
            "Oberoi Mall",
            "R City Mall",
            "Growel's 101",
            "Infiniti Mall",
            "norbit Mall, Malad",
            "Palladium",
          ],
          Monuments: [
            "Bombay Castle",
            "Gateway of India",
            "Ballard Bunder Gatehouse",
            "South Court",
            "Gateway Of India Mumbai",
            "Khada Parsi Statue",
            "Gandhi Monument",
            "Gandhi Statue",
          ],
        },
      },
    };
    this.toggleDiv = this.toggleDiv.bind(this);
    this.onhit = this.onhit.bind(this);
    this.change = this.change.bind(this);
    this.updateCircle = this.updateCircle.bind(this);
  }
  toggleDiv = () => {
    const { show } = this.state;
    this.setState({ show: true });
  };
  onhit() {
    if (this.state.q.length) {
      this.setState({ show: true });

      for (let c in this.state.circles_names) {
        // this.state.circles_names;
        // console.log(circle);
        const { circles_names, data } = this.state;
        console.log(c, circles_names[c]);
        // const
        try {
          const keys = Object.keys(data[this.state.q]);
          // con

          this.setState({ [circles_names[c]]: keys[c] });
        } catch (err) {
          console.log(err);
          this.setState({ [circles_names[c]]: "No Data" });
        }
      }
      console.log(this.state);
    } else {
      this.setState({
        show: false,
      });
    }
  }

  updateCircle(aspect) {
    try {
      console.log("click-aspect", aspect);
      const { data, circles_names } = this.state;
      const vals = data[this.state.q][aspect];
      for (let c in circles_names) {
        this.setState({
          [circles_names[c]]: vals[c],
        });
      }
    } catch (err) {
      console.log(err);
      // const string = "asdfa"
      // string.toLowerCase()
    }
  }
  change(e) {
    // console.log(e);
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    });
  }

  render() {
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="row mt-5 ">
            <div class="col-md-4 ">
              {this.state.show && (
                <div
                  id="circlesmall1"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall1)}
                >
                  <p>{this.state.circlesmall1}</p>
                  {/* {this.state.circlesmall1} */}
                </div>
              )}
            </div>
            <div class="col-md-4">
              {this.state.show && (
                <div
                  id="circlesmall2"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall2)}
                >
                  <p>{this.state.circlesmall2}</p>
                </div>
              )}
            </div>
            <div class="col-md-4 ">
              {this.state.show && (
                <div
                  id="circlesmall3"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall3)}
                >
                  <p>{this.state.circlesmall3}</p>
                </div>
              )}
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-4 ">
              {this.state.show && (
                <div
                  id="circlesmall4"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall4)}
                >
                  <p>{this.state.circlesmall4}</p>
                </div>
              )}
            </div>
            <div class="col-md-4">
              <div id="searchbar" class="main_search">
                <div class="input-group">
                  <MDBFormInline>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                      name="q"
                      value={this.state.q}
                      onChange={this.change}
                      style={{ width: "350px" }}
                    />
                    <MDBBtn
                      color="unique"
                      rounded
                      size="md"
                      className="mr-auto"
                      onClick={this.onhit}
                    >
                      <MDBIcon icon="search" />
                    </MDBBtn>
                  </MDBFormInline>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              {this.state.show && (
                <div
                  id="circlesmall5"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall5)}
                >
                  <p>{this.state.circlesmall5}</p>
                </div>
              )}
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-md-4">
              {this.state.show && (
                <div
                  id="circlesmall6"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall6)}
                >
                  <p>{this.state.circlesmall6}</p>
                </div>
              )}
            </div>
            <div class="col-md-4">
              {this.state.show && (
                <div
                  id="circlesmall7"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall7)}
                >
                  <p>{this.state.circlesmall7}</p>
                </div>
              )}
            </div>
            <div class="col-md-4">
              {this.state.show && (
                <div
                  id="circlesmall8"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.updateCircle(this.state.circlesmall8)}
                >
                  <p>{this.state.circlesmall8}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Search;
