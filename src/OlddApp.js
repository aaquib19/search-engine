import React, { Component } from "react";
import "./App.css";
import "./mysearch.css";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      q: "",
      circles_names: ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"],
      c1: "cities",
      c2: "cities",
      c3: "cities",
      c4: "cities",
      c5: "cities",
      c6: "cities",
      c7: "cities",
      c8: "cities",
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
            "Indian Accent",
            "IPIE - Homely and Healthy",
            "Bukhara Restaurant",
            "The GT Road",
            "AnnaMaya",
            "Sorrento",
            "The Hong Kong Club",
            "Brotherhood fast food",
          ],
          School: [
            "The British School, New Delhi",
            "Springdales School South Campus",
            "Delhi Public School R.K.Puram",
            "The Mother's International School",
            "Carmel Convent School",
            "Sardar Patel Vidyalaya",
            "Loreto Convent School",
            "Gyan Bharati School",
          ],
          College: [
            "Hansraj College, University of Delhi",
            "Zakir Husain Delhi College",
            "Vivekananda College, University Of Delhi",
            "Shivaji College, University of Delhi",
            "Delhi College of Arts & Commerce",
            "Dyal Singh College, Delhi",
            "Hindu College University Of Delhi",
            "Maharaja Agrasen College, University Of Delhi",
          ],
          Hospitals: [
            "Fortis Hospital, Shalimar Bagh",
            "Delhi Institute of Trauma & Orthopedics (DITO) - Best Orthopaedic Hospital in Delhi NCR India",
            "Aashlok Hospital",
            "Swasthik Hospital - Best Hospital in Najafgarh,Delhi",
            "Fortis ",
            "Apollo Spectra Hospitals ",
            "Air Ambulance",
            "Primus Super Speciality Hospital",
          ],
          Markets: [
            "Khan Market",
            "Daryaganj Sunday Book Market",
            "Janpath Market",
            "Shankar Market",
            "Monastery Market",
            "Karol Bagh Market",
            "Chandni Chowk Market",
            "Delhi Organic Farmers Market (DOFM)",
          ],
          Malls: [
            "Select CITYWALK",
            "Pacific Mall Tagore Garden",
            "DLF Promenade",
            "DLF Avenue Saket",
            "DLF Emporio",
            "Ambience Mall, Vasant Kunj",
            "City Square Mall",
            "Cross River Mall",
          ],
        },
        mumbai: {
          Hotel: ["1a", "2a", "3a", "4a", "5a", "6a", "7a", "8a"],
          Restaurant: ["1b", "2b", "3b", "4b", "5b", "6b", "7b", "8b"],
          School: ["1c", "2c", "3c", "4c", "5c", "6c", "7c", "8c"],
          College: ["1d", "2d", "3d", "4d", "5d", "6d", "7d", "8d"],
          Hospital: ["1e", "2e", "3e", "4e", "5e", "6e", "7e", "8e"],
          Market: ["1f", "2f", "3f", "4f", "5f", "6f", "7f", "8f"],
          Mall: ["1g", "2g", "3g", "4g", "5g", "6g", "7g", "8g"],
          More: ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h"],
        },
      },
    };
    this.onhit = this.onhit.bind(this);
    this.change = this.change.bind(this);
    this.updateCircle = this.updateCircle.bind(this);
  }
  // async componentDidMount
  change(e) {
    // console.log(e);
    this.setState({
      [e.target.name]: e.target.value,
    });
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
    }
  }
  // let display = "none";

  onhit() {
    if (this.state.q.length) {
      this.setState({
        display: true,
      });

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
        // display:!this.state.display
        display: false,
      });
    }
  }
  //   style = {{ display: display ? 'block' : 'none' }}
  // style = {{ display: display ? 'block' : 'none' }}

  render() {
    const { display } = this.state;

    var style = { display: display ? "block" : "none", cursor: "pointer" };

    return (
      <React.Fragment>
        <div>
          <h1>Search Engine</h1>
          <div style={{ position: "relative", top: "62px" }}>
            <div id="container0">
              <div style={{ clear: "both" }}></div>
              <div id="left0" style={{ position: "relative", left: "272px" }}>
                <div id="circlelarge" style={style}>
                  <div
                    style={{
                      position: "absolute",
                      left: "35px",
                      top: "65px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                    onClick={() => this.updateCircle(this.state.c1)}
                  >
                    {this.state.c1}
                  </div>
                </div>
              </div>
              <div id="right0">
                <div id="circlelarge" style={style}>
                  <div
                    style={{
                      position: "absolute",
                      left: "1200px",
                      top: "65px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    {this.state.c2}
                  </div>
                </div>
              </div>
              <div id="center0" style={{ position: "relative", top: "15px" }}>
                <div id="circlesmall" style={style}>
                  <div
                    style={{
                      position: "absolute",
                      left: "20px",
                      top: "50px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    {this.state.c3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ position: "relative", top: "119px" }}>
            <div id="container0">
              <div style={{ clear: "both" }}></div>
            </div>
            <div
              id="left0"
              style={{ position: "relative", left: "287px", cursor: "pointer" }}
            >
              <div id="circlesmall" style={style}>
                <div
                  style={{
                    position: "absolute",
                    left: "30px",
                    top: "51px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  {this.state.c4}
                </div>
              </div>
            </div>
            <div id="right0" style={{ position: "relative", left: "15px" }}>
              <div id="circlesmall" style={style}>
                <div
                  style={{
                    position: "absolute",
                    left: "25px",
                    top: "51px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  {this.state.c5}
                </div>
              </div>
            </div>
            <div id="center0">
              <div className="searchBox">
                <MDBFormInline onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    name="q"
                    value={this.state.q}
                    onChange={this.change}
                  />
                  <MDBBtn
                    color="unique"
                    rounded
                    size="sm"
                    className="mr-auto"
                    onClick={this.onhit}
                  >
                    Search
                  </MDBBtn>
                </MDBFormInline>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ position: "relative", top: "162px" }}>
            <div id="container0">
              <div style={{ clear: "both" }}></div>
              <div id="left0" style={{ position: "relative", left: "272px" }}>
                <div id="circlelarge" style={style}>
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                      top: "65px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    {this.state.c6}
                  </div>
                </div>
              </div>
              <div id="right0">
                <div id="circlelarge" style={style}>
                  <div
                    style={{
                      position: "absolute",
                      left: "1200px",
                      top: "175px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    {this.state.c7}
                  </div>
                </div>
              </div>
              <div id="center0" style={{ position: "relative", top: "15px" }}>
                <div id="circlesmall" style={style}>
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                      top: "50px",
                      color: "black",
                      fontWeight: "bolder",
                    }}
                  >
                    {this.state.c8}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
