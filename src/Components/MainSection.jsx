import React from "react";
import "./MainSection.css";

function MainSection() {
  return (
    <>
      <div className="conatine-final-divide">
        <div className="part-1">
          <div className="Container-Main-text-form">
            <div
              className="Cover_tokenPresaleContainerInner__H1ylz"
              id="presale-container"
            >
              <div className="Cover_cardHeader__X_UpS">
                <div>
                  <img
                    src="https://www.kredict.com/kredict-k.png"
                    alt="token-image"
                    className="Cover_tokenImagePrime__nbkuP"
                  />
                </div>
                <div className="Cover_primeBlock__Qf8Iu">
                  <h2 className="Cover_tokenNamePrime__rV2h_">KRDICT</h2>
                  <p className="Cover_exchangeMode__VMBGi">KDT / BNB</p>
                  <a
                    target="_blank"
                    href="https://bscscan.com/token/0xe1F8787b35f76C7C138c8330BE86ada000006c68"
                    rel="noreferrer"
                  >
                    View on Bscscan
                  </a>
                </div>
                <div className="Cover_badgeHeader__hof9l">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/HireCA/audit/blob/main/kredictaudit.pdf"
                    className="Cover_auditedBadge___qkkN"
                    title="Smart Contract Audited"
                    id="audited"
                  >
                    <i className="las la-check-circle"></i>Audited
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/HireCA/audit/blob/main/kredictkyc.pdf"
                    className="Cover_verifiedBadge__wJkVn"
                    title="KYC Verified"
                    id="verified"
                  />
                  <i className="las la-shield-alt"></i>Verified
                </div>
              </div>
            </div>
            <div className="Cover_countdownContainer__tIK86">
              <div className="Cover_countdownWrapper__6qedm">
                <p>
                  <span id="days"></span>
                </p>
                :
                <p>
                  <span id="hours"></span>
                </p>
                :
                <p>
                  <span id="minutes"></span>
                </p>
                :
                <p>
                  <span id="seconds"></span>
                </p>
              </div>
            </div>
            <div className="Cover_actionBlockPrime__DpaQH">
              <input
                type="number"
                className="Cover_quantityInput__TICnW"
                placeholder="Exchange Quantity"
                id="quantity"
              />
              <small className="Cover_balanceText__9I9e_">
                Balance: <small id="balance-text"></small> BNB
              </small>
              <small
                id="notice-text"
                className="Cover_noticeText__8oeoO"
              ></small>
              <small id="error-text" className="Cover_errorText__ZqqOx"></small>
              <button className="Cover_buyButton__VROqp" id="buy-button">
                Buy
              </button>
            </div>
            <div>
              <p className="Cover_currencyToToken__nbExm">
                1 BNB= <span id="rate">1000</span>KDT
              </p>
            </div>
            <div className="jsx-2538481861 Cover_barBlockPrime__eeyD_">
              <div className="jsx-2538481861 Cover_upperStatLine__x4iwj">
                <p id="presale-status" className="jsx-2538481861 "></p>
                <p
                  id="target-percentage"
                  className="jsx-2538481861 Cover_upperStatPercentage__3fzd_"
                ></p>
              </div>
              <div className="jsx-2538481861 Cover_barActualPrime__wfn9G">
                <div
                  id="bar-percentage"
                  className="jsx-2538481861 barRatePrime"
                ></div>
              </div>
              <div className="jsx-2538481861 Cover_lowerStatLine__1DtxB">
                <p
                  id="amount-raised"
                  className="jsx-2538481861 Cover_lowerStatCurrency__W2pxt"
                ></p>
                <p className="jsx-2538481861 Cover_lowerStatToken__gyg_j">
                  Hard Cap{" "}
                  <span id="hard-cap" className="jsx-2538481861">
                    4000
                  </span>{" "}
                  BNB
                </p>
              </div>
            </div>
            <div className="Cover_leastDetailBlockPrime__DxW0T">
              <a
                className="Cover_leastDetailTagPrime__jBoAi"
                href="https://bscscan.com/address/0x509e2AfCAF74E6Ad87A9bDD1a80a60Ee630Ae969"
                rel="noreferrer"
                target="_blank"
              >
                View Presale Smart Contract Address
              </a>
            </div>
          </div>
        </div>
        {/* part 2 */}

        <div className="part-2-adding-my-content">
          <div className="constiner-part-2">
            <div className="text-Conatiner-part02_onVideo">
              <div class="Cover_textSection__mvFzJ">
                <h2 class="Cover_header__3VzeM">KREDICT ICO</h2>
                <h4 class="Cover_tag__UinKM">
                  Kredict is a decentralized launchpad that allows users to
                  launch their token and create their initial token sale with
                  staking benefits to their holders and they don't require any
                  Coding Knowledge For this.
                </h4>
                <div>
                  <a class="Cover_actionBtn__nrwSy" href="/#whitepaper">
                    Whitepaper
                  </a>
                  <a class="Cover_actionBtn__nrwSy">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* part-3  */}
      <section className="Part-3-main-Section">
        <div class="Cover_contractNoteSection__cW65e">
          <p class="Cover_contractNote__qwT7E">
            You can buy KDT also by sending BNB directly to Presale Contract
          </p>
          <p id="contract-address" class="Cover_contractAddress__SSZFG">
            0x509e2AfCAF74E6Ad87A9bDD1a80a60Ee630Ae969
          </p>
          <a class="Cover_actionBtnCopy__rvRsZ">Copy Address</a>
        </div>
      </section>
    </>
  );
}

export default MainSection;
