import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Index = (): JSX.Element => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="index"
      style={{
        backgroundColor:
          screenWidth < 1349
            ? "#ffffff"
            : (screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920
            ? "transparent"
            : undefined,
      }}
    >
      <div
        className="troll-run-by-html-to"
        style={{
          backgroundColor: screenWidth < 1349 ? "#ffffff" : undefined,
          height:
            screenWidth < 1349
              ? "7035.27px"
              : screenWidth >= 1349 && screenWidth < 1920
              ? "5180.41px"
              : screenWidth >= 1920
              ? "5007.77px"
              : undefined,
          width:
            screenWidth < 1349
              ? "390px"
              : screenWidth >= 1349 && screenWidth < 1920
              ? "1349px"
              : screenWidth >= 1920
              ? "1920px"
              : undefined,
        }}
      >
        {((screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920) && (
          <>
            <div
              className="overlap"
              style={{
                height: screenWidth >= 1349 && screenWidth < 1920 ? "716px" : screenWidth >= 1920 ? "730px" : undefined,
                width:
                  screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <div
                className="section"
                style={{
                  height:
                    screenWidth >= 1349 && screenWidth < 1920 ? "93px" : screenWidth >= 1920 ? "107px" : undefined,
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
              >
                <div
                  className="div-elementor"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "93px" : screenWidth >= 1920 ? "107px" : undefined,
                    left: screenWidth >= 1920 ? "160px" : undefined,
                    width: screenWidth >= 1920 ? "1600px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "93px" : screenWidth >= 1920 ? "107px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "270px" : screenWidth >= 1920 ? "320px" : undefined,
                    }}
                  >
                    <div
                      className="trollface-png"
                      style={{
                        height:
                          screenWidth >= 1349 && screenWidth < 1920 ? "73px" : screenWidth >= 1920 ? "87px" : undefined,
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "91px"
                            : screenWidth >= 1920
                            ? "108px"
                            : undefined,
                        width:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "87px"
                            : screenWidth >= 1920
                            ? "105px"
                            : undefined,
                      }}
                    />
                  </div>
                  <div
                    className="div"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "93px" : screenWidth >= 1920 ? "107px" : undefined,
                      left:
                        screenWidth >= 1349 && screenWidth < 1920 ? "270px" : screenWidth >= 1920 ? "320px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "800px" : screenWidth >= 1920 ? "949px" : undefined,
                    }}
                  >
                    <div
                      className="nav-list-item-link"
                      style={{
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "114px"
                            : screenWidth >= 1920
                            ? "188px"
                            : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "17px" : screenWidth >= 1920 ? "25px" : undefined,
                      }}
                    >
                      <div className="text-wrapper">Home</div>
                    </div>
                    <div
                      className="div-wrapper"
                      style={{
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "207px"
                            : screenWidth >= 1920
                            ? "281px"
                            : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "17px" : screenWidth >= 1920 ? "25px" : undefined,
                      }}
                    >
                      <div className="text-wrapper-2">About</div>
                    </div>
                    <div
                      className="nav-list-item-link-2"
                      style={{
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "302px"
                            : screenWidth >= 1920
                            ? "377px"
                            : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "17px" : screenWidth >= 1920 ? "25px" : undefined,
                      }}
                    >
                      <div className="text-wrapper-3">How To Buy</div>
                    </div>
                    <div
                      className="nav-list-item-link-3"
                      style={{
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "460px"
                            : screenWidth >= 1920
                            ? "534px"
                            : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "17px" : screenWidth >= 1920 ? "25px" : undefined,
                      }}
                    >
                      <div className="text-wrapper-4">Roadmap</div>
                    </div>
                    <div
                      className="nav-list-item-link-4"
                      style={{
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "589px"
                            : screenWidth >= 1920
                            ? "664px"
                            : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "17px" : screenWidth >= 1920 ? "25px" : undefined,
                      }}
                    >
                      <div className="text-wrapper-5">Contact</div>
                    </div>
                  </div>
                  <div
                    className="link-wrapper"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "93px" : screenWidth >= 1920 ? "107px" : undefined,
                      left:
                        screenWidth >= 1349 && screenWidth < 1920
                          ? "1070px"
                          : screenWidth >= 1920
                          ? "1269px"
                          : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "270px" : screenWidth >= 1920 ? "320px" : undefined,
                    }}
                  >
                    <div
                      className="link"
                      style={{
                        left:
                          screenWidth >= 1349 && screenWidth < 1920 ? "65px" : screenWidth >= 1920 ? "90px" : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "26px" : screenWidth >= 1920 ? "33px" : undefined,
                      }}
                    >
                      <div className="text-wrapper-6">Chart</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-wrapper"
                style={{
                  top: screenWidth >= 1349 && screenWidth < 1920 ? "88px" : screenWidth >= 1920 ? "102px" : undefined,
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
              >
                <div
                  className="section-2"
                  style={{
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "114px" : screenWidth >= 1920 ? "400px" : undefined,
                  }}
                >
                  <div className="div-elementor-widget-2">
                    <div className="heading">
                      <div className="text-wrapper-7">TROLL</div>
                    </div>
                    <div className="heading-2">
                      <div className="text-wrapper-8">Trollface is back</div>
                    </div>
                    <div className="div-elementor-widget-3">
                      <div className="link-2">
                        <div className="text-wrapper-9">Buy Now</div>
                      </div>
                    </div>
                  </div>
                  <div className="trollface-png-wrapper">
                    <div className="trollface-png-2" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-3"
              style={{
                height: screenWidth >= 1349 && screenWidth < 1920 ? "714px" : screenWidth >= 1920 ? "717px" : undefined,
                top: screenWidth >= 1349 && screenWidth < 1920 ? "716px" : screenWidth >= 1920 ? "730px" : undefined,
                width:
                  screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape"
                style={{
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-7.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape.svg"
                    : undefined
                }
              />
              <div
                className="heading-listed-in"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "256px" : screenWidth >= 1920 ? "542px" : undefined,
                }}
              >
                LISTED IN MULTIPLE EXCHANGES
              </div>
              <div
                className="section-4"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "104px" : screenWidth >= 1920 ? "390px" : undefined,
                }}
              >
                <div className="div-elementor-column">
                  <div className="link-full-gate-io" />
                </div>
                <div className="link-HTX-logo-wrapper">
                  <div className="link-HTX-logo" />
                </div>
                <div className="div-elementor-column-2">
                  <div className="link-3" />
                </div>
                <div className="link-full-lbank-logo-wrapper">
                  <div className="link-full-lbank-logo" />
                </div>
                <div className="div-elementor-column-3">
                  <div className="link-4" />
                </div>
                <div className="link-full-bitmart-wrapper">
                  <div className="link-full-bitmart" />
                </div>
              </div>
              <div
                className="section-5"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "104px" : screenWidth >= 1920 ? "390px" : undefined,
                }}
              >
                <div className="div-elementor-column-4">
                  <div className="link-5" />
                </div>
                <div className="link-screenshot-wrapper">
                  <div className="link-screenshot" />
                </div>
                <div className="div-elementor-column-5">
                  <div className="link-screenshot-2" />
                </div>
                <div className="link-ac-wrapper">
                  <div className="link-ac" />
                </div>
                <div className="link-review-wrapper">
                  <div className="link-review" />
                </div>
                <div className="link-download-wrapper">
                  <div className="link-download" />
                </div>
              </div>
              <div
                className="section-6"
                style={{
                  height:
                    screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "10px" : screenWidth >= 1920 ? "270px" : undefined,
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1329px" : screenWidth >= 1920 ? "1380px" : undefined,
                }}
              >
                <div
                  className="link-bitrue-logo-wrapper"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-bitrue-logo"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "36px" : screenWidth >= 1920 ? "38px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="link-full-poloniex-wrapper"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-full-poloniex"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "35px" : screenWidth >= 1920 ? "37px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-6"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "332px" : screenWidth >= 1920 ? "345px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-screenshot-3"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "30px" : screenWidth >= 1920 ? "31px" : undefined,
                      top:
                        screenWidth >= 1349 && screenWidth < 1920 ? "39px" : screenWidth >= 1920 ? "40px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="link-images-removebg-wrapper"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "498px" : screenWidth >= 1920 ? "518px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-images-removebg"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "22px" : screenWidth >= 1920 ? "23px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="link-full-tapbit-wrapper"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "664px" : screenWidth >= 1920 ? "690px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-full-tapbit"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "43px" : screenWidth >= 1920 ? "45px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-7"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "831px" : screenWidth >= 1920 ? "862px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-6"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "58px" : screenWidth >= 1920 ? "61px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="div-elementor-column-8"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "997px" : screenWidth >= 1920 ? "1035px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-screenshot-4"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "37px" : screenWidth >= 1920 ? "39px" : undefined,
                      top:
                        screenWidth >= 1349 && screenWidth < 1920 ? "35px" : screenWidth >= 1920 ? "36px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
                <div
                  className="link-digifinex-svg-wrapper"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "108px" : screenWidth >= 1920 ? "111px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "1163px" : screenWidth >= 1920 ? "1208px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "172px" : undefined,
                  }}
                >
                  <div
                    className="link-digifinex-svg"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "21px" : screenWidth >= 1920 ? "22px" : undefined,
                      top:
                        screenWidth >= 1349 && screenWidth < 1920 ? "45px" : screenWidth >= 1920 ? "46px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "116px" : screenWidth >= 1920 ? "122px" : undefined,
                    }}
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div
          className="section-7"
          style={{
            backgroundColor:
              (screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920
                ? "#ffffff"
                : screenWidth < 1349
                ? "#000000"
                : undefined,
            height:
              (screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920
                ? "797px"
                : screenWidth < 1349
                ? "114px"
                : undefined,
            top:
              screenWidth >= 1349 && screenWidth < 1920
                ? "1429px"
                : screenWidth >= 1920
                ? "1447px"
                : screenWidth < 1349
                ? "0"
                : undefined,
            width:
              screenWidth >= 1349 && screenWidth < 1920
                ? "1349px"
                : screenWidth >= 1920
                ? "1920px"
                : screenWidth < 1349
                ? "390px"
                : undefined,
          }}
        >
          {((screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920) && (
            <>
              <img
                className="img"
                style={{
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-8.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-1.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-2"
                style={{
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-9.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-2.svg"
                    : undefined
                }
              />
              <div
                className="div-elementor-2"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "104px" : screenWidth >= 1920 ? "390px" : undefined,
                }}
              >
                <div className="div-elementor-widget-4">
                  <div className="div-2" />
                </div>
                <div className="div-elementor-widget-5">
                  <div className="heading-3">
                    <div className="text-wrapper-10">ABOUT</div>
                  </div>
                  <div className="TROLL-COIN-is-a-wrapper">
                    <p className="TROLL-COIN-is-a">
                      $TROLL COIN is a memebreaking
                      <br />
                      cryptocurrency that embraces the
                      <br />
                      spirit of internet culture. With a<br />
                      strong community and a renounced
                      <br />
                      contract, it aims to bring laughter
                      <br />
                      and fun. Join us on this exciting
                      <br />
                      journey to becoming one of the top
                      <br />
                      meme coins available on thy
                      <br />
                      internet.
                    </p>
                  </div>
                  <div className="screenshot-png" />
                </div>
              </div>
            </>
          )}

          {screenWidth < 1349 && (
            <div className="div-elementor-3">
              <div className="div-elementor-widget-6">
                <div className="trollface-png-3" />
              </div>
              <div className="div-elementor-widget-7">
                <div className="nav" />
                <div className="nav-2" />
                <div className="nav-3" />
              </div>
            </div>
          )}
        </div>
        <div
          className="section-8"
          style={{
            height:
              screenWidth < 1349
                ? "629px"
                : (screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920
                ? "1126px"
                : undefined,
            top:
              screenWidth < 1349
                ? "114px"
                : screenWidth >= 1349 && screenWidth < 1920
                ? "2226px"
                : screenWidth >= 1920
                ? "2244px"
                : undefined,
            width:
              screenWidth < 1349
                ? "390px"
                : screenWidth >= 1349 && screenWidth < 1920
                ? "1349px"
                : screenWidth >= 1920
                ? "1920px"
                : undefined,
          }}
        >
          {screenWidth < 1349 && (
            <div className="section-9">
              <div className="div-elementor-widget-8">
                <div className="heading-4">
                  <div className="text-wrapper-11">TROLL</div>
                </div>
                <div className="heading-5">
                  <div className="text-wrapper-8">Trollface is back</div>
                </div>
                <div className="div-elementor-widget-9">
                  <div className="link-7">
                    <div className="text-wrapper-12">Buy Now</div>
                  </div>
                </div>
              </div>
              <div className="div-elementor-widget-10">
                <div className="trollface-png-4" />
              </div>
            </div>
          )}

          {((screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920) && (
            <>
              <div
                className="heading-HOW-TO-BUY"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "480px" : screenWidth >= 1920 ? "765px" : undefined,
                }}
              >
                HOW TO BUY
              </div>
              <div
                className="div-elementor-wrapper"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "114px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-4">
                  <div className="untitled-design-wrapper">
                    <div className="untitled-design" />
                  </div>
                  <div className="div-elementor-widget-11">
                    <div className="heading-6">
                      <div className="text-wrapper-13">Create a Wallet</div>
                    </div>
                    <div className="download-metamask-or-wrapper">
                      <p className="download-metamask-or">
                        Download metamask or your wallet of choice from the app store
                        <br />
                        or google play store for free. Desktop users, download the
                        <br />
                        google chrome extension by going to metamask.io.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-10"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "114px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-4">
                  <div className="untitled-design-wrapper">
                    <div className="untitled-design-2" />
                  </div>
                  <div className="div-elementor-widget-11">
                    <div className="heading-7">
                      <div className="text-wrapper-14">Get Some ETH</div>
                    </div>
                    <div className="have-ETH-in-your-wrapper">
                      <p className="have-ETH-in-your">
                        Have ETH in your wallet to switch to $TROLL. If you don’t have
                        <br />
                        any ETH, you can buy directly on metamask, transfer from
                        <br />
                        another wallet, or buy on another exchange and send it to your
                        <br />
                        wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-11"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "114px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-5">
                  <div className="uniswap-webp-wrapper">
                    <div className="uniswap-webp" />
                  </div>
                  <div className="div-elementor-widget-12">
                    <div className="heading-7">
                      <div className="text-wrapper-15">Go to Uniswap</div>
                    </div>
                    <div className="connect-to-uniswap-wrapper">
                      <p className="connect-to-uniswap">
                        Connect to Uniswap. Go to app.uniswap.org in google chrome
                        <br />
                        or on the browser inside your Metamask app. Connect your
                        <br />
                        wallet. Paste the $TROLL token address into Uniswap, select
                        <br />
                        Troll, and confirm. When Metamask prompts you for a wallet
                        <br />
                        signature, sign.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="section-12"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "114px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div className="div-elementor-6">
                  <div className="div-elementor-widget-13">
                    <div className="trollface-png-5" />
                  </div>
                  <div className="div-elementor-widget-14">
                    <div className="heading-7">
                      <div className="text-wrapper-16">Switch ETH for Troll</div>
                    </div>
                    <div className="switch-ETH-for-TROLL-wrapper">
                      <p className="switch-ETH-for-TROLL">
                        Switch ETH for $TROLL. We have ZERO taxes so you don’t
                        <br />
                        need to worry about buying with a specific slippage, although
                        <br />
                        you may need to use slippage during times of market volatility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {((screenWidth >= 1349 && screenWidth < 1920) || screenWidth >= 1920) && (
          <>
            <div
              className="section-13"
              style={{
                height: screenWidth >= 1349 && screenWidth < 1920 ? "679px" : screenWidth >= 1920 ? "516px" : undefined,
                top: screenWidth >= 1349 && screenWidth < 1920 ? "3352px" : screenWidth >= 1920 ? "3370px" : undefined,
                width:
                  screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-3"
                style={{
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-10.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-3.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-4"
                style={{
                  top: screenWidth >= 1349 && screenWidth < 1920 ? "620px" : screenWidth >= 1920 ? "457px" : undefined,
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-11.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-4.svg"
                    : undefined
                }
              />
              <div
                className="heading-TOKENOMICS"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "470px" : screenWidth >= 1920 ? "756px" : undefined,
                }}
              >
                TOKENOMICS
              </div>
              <div
                className="section-14"
                style={{
                  height:
                    screenWidth >= 1349 && screenWidth < 1920 ? "389px" : screenWidth >= 1920 ? "226px" : undefined,
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "114px" : screenWidth >= 1920 ? "400px" : undefined,
                }}
              >
                <div
                  className="div-elementor-7"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "383px" : screenWidth >= 1920 ? "220px" : undefined,
                  }}
                >
                  <div
                    className="div-elementor-widget-15"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "383px" : screenWidth >= 1920 ? "220px" : undefined,
                    }}
                  >
                    <div
                      className="heading-8"
                      style={{
                        top:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "102px"
                            : screenWidth >= 1920
                            ? "20px"
                            : undefined,
                      }}
                    >
                      <div className="text-wrapper-17">Token Supply</div>
                    </div>
                    <div
                      className="heading-9"
                      style={{
                        top:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "152px"
                            : screenWidth >= 1920
                            ? "70px"
                            : undefined,
                      }}
                    >
                      <div className="text-wrapper-18">960,420,000,000,000</div>
                    </div>
                    <div
                      className="heading-10"
                      style={{
                        top:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "202px"
                            : screenWidth >= 1920
                            ? "120px"
                            : undefined,
                      }}
                    >
                      <div className="text-wrapper-19">Tax: 0%</div>
                    </div>
                    <div
                      className="heading-11"
                      style={{
                        top:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "252px"
                            : screenWidth >= 1920
                            ? "170px"
                            : undefined,
                      }}
                    >
                      <div className="text-wrapper-20">Liquidity Pool 93.1%</div>
                    </div>
                  </div>
                  <div
                    className="div-elementor-widget-wrapper"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "383px" : screenWidth >= 1920 ? "220px" : undefined,
                    }}
                  >
                    <div
                      className="div-elementor-widget-16"
                      style={{
                        height:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "323px"
                            : screenWidth >= 1920
                            ? "24px"
                            : undefined,
                      }}
                    >
                      {screenWidth >= 1349 && screenWidth < 1920 && <div className="troll-face-gif" />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overlap-group-wrapper"
              style={{
                height: screenWidth >= 1349 && screenWidth < 1920 ? "689px" : screenWidth >= 1920 ? "662px" : undefined,
                top: screenWidth >= 1349 && screenWidth < 1920 ? "4031px" : screenWidth >= 1920 ? "3886px" : undefined,
                width:
                  screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <div
                className="overlap-group"
                style={{
                  height:
                    screenWidth >= 1349 && screenWidth < 1920 ? "689px" : screenWidth >= 1920 ? "662px" : undefined,
                }}
              >
                <div
                  className="div-elementor-8"
                  style={{
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "689px" : screenWidth >= 1920 ? "662px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                  }}
                />
                <div
                  className="heading-ROADMAP"
                  style={{
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "525px" : screenWidth >= 1920 ? "811px" : undefined,
                  }}
                >
                  ROADMAP
                </div>
                <div
                  className="section-15"
                  style={{
                    backgroundColor: screenWidth >= 1920 ? "#0000008f" : undefined,
                    border: screenWidth >= 1920 ? "2px solid" : undefined,
                    borderColor: screenWidth >= 1920 ? "#ffffff" : undefined,
                    height:
                      screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "139px" : undefined,
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "104px" : screenWidth >= 1920 ? "770px" : undefined,
                    width:
                      screenWidth >= 1349 && screenWidth < 1920 ? "1140px" : screenWidth >= 1920 ? "380px" : undefined,
                  }}
                >
                  <div
                    className="dgzmk-fdd-wrapper"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "25px" : undefined,
                      left: screenWidth >= 1349 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "12px" : undefined,
                      top: screenWidth >= 1349 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "12px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "380px" : screenWidth >= 1920 ? "356px" : undefined,
                    }}
                  >
                    <div
                      className="dgzmk-fdd-3"
                      style={{
                        backgroundImage:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "url(https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/dg1zm2k-71066fdd-7241-408d-8b65-34b0fe0373ec-png@2x.png)"
                            : undefined,
                        backgroundPosition: screenWidth >= 1349 && screenWidth < 1920 ? "50% 50%" : undefined,
                        backgroundSize: screenWidth >= 1349 && screenWidth < 1920 ? "cover" : undefined,
                        color: screenWidth >= 1920 ? "#ffffff" : undefined,
                        fontFamily: screenWidth >= 1920 ? "'Inter', Helvetica" : undefined,
                        fontSize: screenWidth >= 1920 ? "24.8px" : undefined,
                        fontWeight: screenWidth >= 1920 ? "500" : undefined,
                        height:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "146px"
                            : screenWidth >= 1920
                            ? "28px"
                            : undefined,
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "100px"
                            : screenWidth >= 1920
                            ? "81px"
                            : undefined,
                        letterSpacing: screenWidth >= 1920 ? "3.00px" : undefined,
                        lineHeight: screenWidth >= 1920 ? "25px" : undefined,
                        position:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "relative"
                            : screenWidth >= 1920
                            ? "absolute"
                            : undefined,
                        textAlign: screenWidth >= 1920 ? "center" : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "10px" : screenWidth >= 1920 ? "-3px" : undefined,
                        whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                        width:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "180px"
                            : screenWidth >= 1920
                            ? "195px"
                            : undefined,
                      }}
                    >
                      {screenWidth >= 1920 && <>Phase 1: Troll</>}
                    </div>
                  </div>
                  <div
                    className="div-elementor-widget-17"
                    style={{
                      backgroundColor: screenWidth >= 1349 && screenWidth < 1920 ? "#0000008f" : undefined,
                      border: screenWidth >= 1349 && screenWidth < 1920 ? "2px solid" : undefined,
                      borderColor: screenWidth >= 1349 && screenWidth < 1920 ? "#ffffff" : undefined,
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "25px" : undefined,
                      left:
                        screenWidth >= 1349 && screenWidth < 1920 ? "380px" : screenWidth >= 1920 ? "12px" : undefined,
                      top: screenWidth >= 1349 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "57px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "380px" : screenWidth >= 1920 ? "356px" : undefined,
                    }}
                  >
                    {screenWidth >= 1349 && screenWidth < 1920 && (
                      <>
                        <div className="heading-12">
                          <div className="text-wrapper-21">Phase 1: Troll</div>
                        </div>
                        <div className="heading-13">
                          <p className="p">Phase 2: Troll and HODL</p>
                        </div>
                        <div className="heading-14">
                          <div className="text-wrapper-22">Phase 3: Troll Takeover</div>
                        </div>
                      </>
                    )}

                    {screenWidth >= 1920 && <p className="p">Phase 2: Troll and HODL</p>}
                  </div>
                  <div
                    className="div-elementor-widget-18"
                    style={{
                      height:
                        screenWidth >= 1349 && screenWidth < 1920 ? "166px" : screenWidth >= 1920 ? "25px" : undefined,
                      left:
                        screenWidth >= 1349 && screenWidth < 1920 ? "760px" : screenWidth >= 1920 ? "12px" : undefined,
                      top: screenWidth >= 1349 && screenWidth < 1920 ? "0" : screenWidth >= 1920 ? "102px" : undefined,
                      width:
                        screenWidth >= 1349 && screenWidth < 1920 ? "380px" : screenWidth >= 1920 ? "356px" : undefined,
                    }}
                  >
                    <div
                      className="dgzmk-fdd-3"
                      style={{
                        backgroundImage:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "url(https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/dg1zm2k-71066fdd-7241-408d-8b65-34b0fe0373ec-png@2x.png)"
                            : undefined,
                        backgroundPosition: screenWidth >= 1349 && screenWidth < 1920 ? "50% 50%" : undefined,
                        backgroundSize: screenWidth >= 1349 && screenWidth < 1920 ? "cover" : undefined,
                        color: screenWidth >= 1920 ? "#ffffff" : undefined,
                        fontFamily: screenWidth >= 1920 ? "'Inter', Helvetica" : undefined,
                        fontSize: screenWidth >= 1920 ? "23.6px" : undefined,
                        fontWeight: screenWidth >= 1920 ? "500" : undefined,
                        height:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "146px"
                            : screenWidth >= 1920
                            ? "28px"
                            : undefined,
                        left:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "100px"
                            : screenWidth >= 1920
                            ? "13px"
                            : undefined,
                        letterSpacing: screenWidth >= 1920 ? "3.00px" : undefined,
                        lineHeight: screenWidth >= 1920 ? "25px" : undefined,
                        position:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "relative"
                            : screenWidth >= 1920
                            ? "absolute"
                            : undefined,
                        textAlign: screenWidth >= 1920 ? "center" : undefined,
                        top:
                          screenWidth >= 1349 && screenWidth < 1920 ? "10px" : screenWidth >= 1920 ? "-3px" : undefined,
                        transform: screenWidth >= 1349 && screenWidth < 1920 ? "rotate(180deg)" : undefined,
                        whiteSpace: screenWidth >= 1920 ? "nowrap" : undefined,
                        width:
                          screenWidth >= 1349 && screenWidth < 1920
                            ? "180px"
                            : screenWidth >= 1920
                            ? "330px"
                            : undefined,
                      }}
                    >
                      {screenWidth >= 1920 && <>Phase 3: Troll Takeover</>}
                    </div>
                  </div>
                </div>
                <div
                  className="section-16"
                  style={{
                    left:
                      screenWidth >= 1349 && screenWidth < 1920 ? "434px" : screenWidth >= 1920 ? "720px" : undefined,
                    top:
                      screenWidth >= 1349 && screenWidth < 1920 ? "306px" : screenWidth >= 1920 ? "279px" : undefined,
                  }}
                >
                  <div className="heading-15">
                    <div className="text-wrapper-23">$TROLL</div>
                  </div>
                  <div className="div-elementor-9">
                    <div className="list-item-strong">
                      Launch
                      <br />
                      CoinGecko/ Coinmarketcap 
                      <br />
                      Listings
                    </div>
                    <p className="list-item-strong-2">
                      1,000+ Holders
                      <br />
                      Get $TROLL 
                      <br />
                      Trending on twitter
                      <br />
                      with our memetic power
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="section-17"
              style={{
                top: screenWidth >= 1349 && screenWidth < 1920 ? "4720px" : screenWidth >= 1920 ? "4548px" : undefined,
                width:
                  screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <img
                className="div-elementor-shape-5"
                style={{
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-12.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-5.svg"
                    : undefined
                }
              />
              <img
                className="div-elementor-shape-6"
                style={{
                  width:
                    screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
                }}
                alt="Div elementor shape"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-13.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/div-elementor-shape-6.svg"
                    : undefined
                }
              />
              <div
                className="heading-CONTACT"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "557px" : screenWidth >= 1920 ? "842px" : undefined,
                }}
              >
                CONTACT
              </div>
              <img
                className="link-8"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "534px" : screenWidth >= 1920 ? "820px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-3.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link.svg"
                    : undefined
                }
              />
              <img
                className="link-9"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "634px" : screenWidth >= 1920 ? "920px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-4.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-1.svg"
                    : undefined
                }
              />
              <img
                className="link-10"
                style={{
                  left:
                    screenWidth >= 1349 && screenWidth < 1920 ? "734px" : screenWidth >= 1920 ? "1020px" : undefined,
                }}
                alt="Link"
                src={
                  screenWidth >= 1349 && screenWidth < 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-5.svg"
                    : screenWidth >= 1920
                    ? "https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65af88a07b6be51fbc227fda/img/link-2.svg"
                    : undefined
                }
              />
            </div>
            <div
              className="heading-by-wrapper"
              style={{
                top: screenWidth >= 1349 && screenWidth < 1920 ? "5124px" : screenWidth >= 1920 ? "4952px" : undefined,
                width:
                  screenWidth >= 1349 && screenWidth < 1920 ? "1349px" : screenWidth >= 1920 ? "1920px" : undefined,
              }}
            >
              <p
                className="heading-by"
                style={{
                  left: screenWidth >= 1349 && screenWidth < 1920 ? "476px" : screenWidth >= 1920 ? "761px" : undefined,
                }}
              >
                © 2023 by TROLL. All rights reserved!
              </p>
            </div>
          </>
        )}

        {screenWidth < 1349 && (
          <>
            <div className="section-18">
              <img
                className="div-elementor-shape-7"
                alt="Div elementor shape"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/div-elementor-shape-7.svg"
              />
              <div className="heading-listed-in-2">
                LISTED IN
                <br />
                MULTIPLE
                <br />
                EXCHANGES
              </div>
              <div className="section-19">
                <div className="link-full-gate-io-wrapper">
                  <div className="link-full-gate-io-2" />
                </div>
                <div className="div-elementor-column-9">
                  <div className="link-HTX-logo-2" />
                </div>
                <div className="div-elementor-column-10">
                  <div className="link-11" />
                </div>
                <div className="div-elementor-column-11">
                  <div className="link-full-lbank-logo-2" />
                </div>
                <div className="div-elementor-column-12">
                  <div className="link-12" />
                </div>
                <div className="div-elementor-column-13">
                  <div className="link-full-bitmart-2" />
                </div>
              </div>
              <div className="section-20">
                <div className="div-elementor-column-14">
                  <div className="link-13" />
                </div>
                <div className="div-elementor-column-15">
                  <div className="link-screenshot-5" />
                </div>
                <div className="div-elementor-column-16">
                  <div className="link-screenshot-6" />
                </div>
                <div className="div-elementor-column-17">
                  <div className="link-14" />
                </div>
                <div className="link-review-cfdac-wrapper">
                  <div className="link-review-cfdac" />
                </div>
                <div className="div-elementor-column-18">
                  <div className="link-download-2" />
                </div>
              </div>
              <div className="section-21">
                <div className="div-elementor-column-19">
                  <div className="link-bitrue-logo-2" />
                </div>
                <div className="div-elementor-column-20">
                  <div className="link-full-poloniex-2" />
                </div>
                <div className="div-elementor-column-21">
                  <div className="link-screenshot-7" />
                </div>
                <div className="div-elementor-column-22">
                  <div className="link-images-removebg-2" />
                </div>
                <div className="div-elementor-column-23">
                  <div className="link-full-tapbit-2" />
                </div>
                <div className="div-elementor-column-24">
                  <div className="link-15" />
                </div>
                <div className="div-elementor-column-25">
                  <div className="link-screenshot-8" />
                </div>
                <div className="div-elementor-column-26">
                  <div className="link-digifinex-svg-2" />
                </div>
              </div>
            </div>
            <div className="section-22">
              <img
                className="div-elementor-shape-7"
                alt="Div elementor shape"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/div-elementor-shape-8.svg"
              />
              <img
                className="div-elementor-shape-8"
                alt="Div elementor shape"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/div-elementor-shape-9.svg"
              />
              <div className="div-elementor-10">
                <div className="div-elementor-widget-19">
                  <div className="div-3" />
                </div>
                <div className="div-elementor-widget-20">
                  <div className="heading-16">
                    <div className="text-wrapper-24">ABOUT</div>
                  </div>
                  <div className="heading-17">
                    <p className="TROLL-COIN-is-a-2">
                      $TROLL COIN is a<br />
                      memebreaking cryptocurrency
                      <br />
                      that embraces the spirit of
                      <br />
                      internet culture. With a strong
                      <br />
                      community and a renounced
                      <br />
                      contract, it aims to bring
                      <br />
                      laughter and fun. Join us on
                      <br />
                      this exciting journey to
                      <br />
                      becoming one of the top meme
                      <br />
                      coins available on thy internet.
                    </p>
                  </div>
                  <div className="screenshot-png-2" />
                </div>
              </div>
            </div>
            <div className="section-23">
              <div className="heading-HOW-TO-BUY-2">HOW TO BUY</div>
              <div className="section-24">
                <div className="div-elementor-11">
                  <div className="div-elementor-widget-21">
                    <div className="untitled-design-3" />
                  </div>
                  <div className="div-elementor-widget-22">
                    <div className="heading-18">
                      <div className="text-wrapper-25">Create a Wallet</div>
                    </div>
                    <div className="heading-19">
                      <p className="download-metamask-or-2">
                        Download metamask or
                        <br />
                        your wallet of choice
                        <br />
                        from the app store or
                        <br />
                        google play store for
                        <br />
                        free. Desktop users,
                        <br />
                        download the google
                        <br />
                        chrome extension by
                        <br />
                        going to metamask.io.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-25">
                <div className="div-elementor-12">
                  <div className="div-elementor-widget-21">
                    <div className="untitled-design-4" />
                  </div>
                  <div className="div-elementor-widget-23">
                    <div className="heading-18">
                      <div className="text-wrapper-26">Get Some ETH</div>
                    </div>
                    <div className="heading-20">
                      <p className="have-ETH-in-your-2">
                        Have ETH in your wallet
                        <br />
                        to switch to $TROLL. If
                        <br />
                        you don’t have any ETH,
                        <br />
                        you can buy directly on
                        <br />
                        metamask, transfer from
                        <br />
                        another wallet, or buy
                        <br />
                        on another exchange
                        <br />
                        and send it to your
                        <br />
                        wallet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-26">
                <div className="div-elementor-13">
                  <div className="div-elementor-widget-21">
                    <div className="uniswap-webp-2" />
                  </div>
                  <div className="div-elementor-widget-24">
                    <div className="heading-18">
                      <div className="text-wrapper-27">Go to Uniswap</div>
                    </div>
                    <div className="heading-21">
                      <p className="connect-to-uniswap-2">
                        Connect to Uniswap. Go
                        <br />
                        to app.uniswap.org in
                        <br />
                        google chrome or on the
                        <br />
                        browser inside your
                        <br />
                        Metamask app. Connect
                        <br />
                        your wallet. Paste the
                        <br />
                        $TROLL token address
                        <br />
                        into Uniswap, select
                        <br />
                        Troll, and confirm. When
                        <br />
                        Metamask prompts you
                        <br />
                        for a wallet signature,
                        <br />
                        sign.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-27">
                <div className="div-elementor-14">
                  <div className="div-elementor-widget-25">
                    <div className="trollface-png-6" />
                  </div>
                  <div className="div-elementor-widget-26">
                    <div className="switch-ETH-for-troll-wrapper">
                      <div className="switch-ETH-for-troll">
                        Switch ETH for
                        <br />
                        Troll
                      </div>
                    </div>
                    <div className="heading-22">
                      <p className="switch-ETH-for-TROLL-2">
                        Switch ETH for $TROLL.
                        <br />
                        We have ZERO taxes so
                        <br />
                        you don’t need to worry
                        <br />
                        about buying with a<br />
                        specific slippage,
                        <br />
                        although you may need
                        <br />
                        to use slippage during
                        <br />
                        times of market
                        <br />
                        volatility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-28">
              <img
                className="div-elementor-shape-7"
                alt="Div elementor shape"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/div-elementor-shape-10.svg"
              />
              <img
                className="div-elementor-shape-9"
                alt="Div elementor shape"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/div-elementor-shape-11.svg"
              />
              <div className="heading-TOKENOMICS-2">TOKENOMICS</div>
              <div className="section-29">
                <div className="div-elementor-15">
                  <div className="div-elementor-widget-27">
                    <div className="heading-23">
                      <div className="text-wrapper-28">Token Supply</div>
                    </div>
                    <div className="heading-24">
                      <div className="text-wrapper-29">960,420,000,000,000</div>
                    </div>
                    <div className="heading-25">
                      <div className="text-wrapper-30">Tax: 0%</div>
                    </div>
                    <div className="liquidity-pool-wrapper">
                      <div className="liquidity-pool">
                        Liquidity Pool
                        <br />
                        93.1%
                      </div>
                    </div>
                  </div>
                  <div className="div-elementor-column-27">
                    <div className="troll-face-gif-wrapper">
                      <div className="troll-face-gif-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-30">
              <div className="overlap-group-2">
                <div className="div-elementor-16" />
                <div className="heading-ROADMAP-2">ROADMAP</div>
                <div className="section-31">
                  <div className="div-elementor-widget-28">
                    <div className="dgzmk-fdd" />
                  </div>
                  <div className="div-elementor-widget-29">
                    <div className="heading-26">
                      <div className="text-wrapper-31">Phase 1: Troll</div>
                    </div>
                    <div className="phase-troll-and-wrapper">
                      <div className="phase-troll-and">
                        Phase 2: Troll and
                        <br />
                        HODL
                      </div>
                    </div>
                    <div className="heading-27">
                      <div className="text-wrapper-32">Phase 3: Troll Takeover</div>
                    </div>
                  </div>
                  <div className="div-elementor-widget-30">
                    <div className="dgzmk-fdd-2" />
                  </div>
                </div>
                <div className="section-32">
                  <div className="heading-28">
                    <div className="text-wrapper-33">$TROLL</div>
                  </div>
                  <div className="div-elementor-17">
                    <div className="list-item-strong-3">
                      Launch
                      <br />
                      CoinGecko/
                      <br />
                      Coinmarketcap 
                      <br />
                      Listings
                    </div>
                    <p className="list-item-strong-4">
                      1,000+ Holders
                      <br />
                      Get $TROLL 
                      <br />
                      Trending on twitter
                      <br />
                      with our memetic
                      <br />
                      power
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-33">
              <img
                className="div-elementor-shape-10"
                alt="Div elementor shape"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/div-elementor-shape-12.svg"
              />
              <img
                className="div-elementor-shape-11"
                alt="Div elementor shape"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/div-elementor-shape-13.svg"
              />
              <div className="heading-CONTACT-2">CONTACT</div>
              <img
                className="link-16"
                alt="Link"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/link-3.svg"
              />
              <img
                className="link-17"
                alt="Link"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/link-4.svg"
              />
              <img
                className="link-18"
                alt="Link"
                src="https://cdn.animaapp.com/projects/65af85adf997dd23632d8f48/releases/65b070f176e619e130ddb4fa/img/link-5.svg"
              />
            </div>
            <div className="section-34">
              <p className="heading-by-2">
                © 2023 by TROLL. All rights
                <br />
                reserved!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
