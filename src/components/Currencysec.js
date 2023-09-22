import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Currencysec() {
  return (
    <>
        <section className="CurrencySec">
        <Container >
          <div className="section-title">
            <h2 className="theme-h2">Top Forex Currency</h2>
            <p className="theme-para">
              Here are the most popular forex assets and you must have for
              investment <a href="#">Let’s know more</a>
            </p>
          </div>
        </Container>
        <Container fluid>
          <div id="currency_slider" className="owl-carousel owl-theme">
            <div className="item">
              <div className="currencybox">
                <div className="coin-img">
                  <img src="assets/images/bitcpin.png" />
                </div>
                <div className="coin-con">
                  <h3>Bitcoin</h3>
                  <p className="price">
                    USD 34879.4 <span className="diff-color pink">-5.48%</span>
                  </p>
                  <img src="assets/images/p-vector.png" />
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="currencybox">
                <div className="coin-img">
                  <img src="assets/images/ethereum.png" />
                </div>
                <div className="coin-con">
                  <h3>Ethereum</h3>
                  <p className="price">
                    USD 34879.4 <span className="diff-color blue">-3.86%</span>
                  </p>
                  <img src="assets/images/b-vector.png" />
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="currencybox">
                <div className="coin-img">
                  <img src="assets/images/solana.png" />
                </div>
                <div className="coin-con">
                  <h3>Solana</h3>
                  <p className="price">
                    USD 34879.4 <span className="diff-color pink">-5.48%</span>
                  </p>
                  <img src="assets/images/p-vector.png" />
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="currencybox">
                <div className="coin-img">
                  <img src="assets/images/bnb.png" />
                </div>
                <div className="coin-con">
                  <h3>BNB</h3>
                  <p className="price">
                    USD 34879.4 <span className="diff-color blue">-5.48%</span>
                  </p>
                  <img src="assets/images/b-vector.png" />
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="currencybox">
                <div className="coin-img">
                  <img src="assets/images/bnb.png" />
                </div>
                <div className="coin-con">
                  <h3>BNB</h3>
                  <p className="price">
                    USD 34879.4 <span className="diff-color pink">-5.48%</span>
                  </p>
                  <img src="assets/images/b-vector.png" />
                  <a href="#">Learn More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="slideState">
            <span></span>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Currencysec
