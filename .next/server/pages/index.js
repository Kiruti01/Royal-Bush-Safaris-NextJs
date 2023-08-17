"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/sliderProps.js
var sliderProps = __webpack_require__(5968);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(8096);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/sliders/Home3.js





class Home3Slider extends external_react_.Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "hero-section",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hero-wrapper-three",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "hero-arrows",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "prev slick-arrow",
                                onClick: this.previous,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "far fa-arrow-left"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "next slick-arrow",
                                onClick: this.next,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "far fa-arrow-right"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_slick_default()), {
                        ...sliderProps/* home3Slider */.RV,
                        ref: (c)=>this.slider = c,
                        className: "hero-slider-three",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "single-slider",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "image-layer bg_cover",
                                        style: {
                                            backgroundImage: "url(assets/images/hero/hero-three_img-1.jpg)"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "row align-items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-7",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hero-content text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "sub-title",
                                                            children: "Welcome to Royal Bush Safaris"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".4s",
                                                            children: "Tour & Travel"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "hero-button",
                                                            "data-animation": "fadeInRight",
                                                            "data-delay": ".6s",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/about",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "main-btn primary-btn",
                                                                        children: [
                                                                            "About Us",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-paper-plane"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/destination",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "main-btn secondary-btn",
                                                                        children: [
                                                                            "Destinations",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-paper-plane"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "single-slider",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "image-layer bg_cover",
                                        style: {
                                            backgroundImage: "url(assets/images/hero/hero-three_img-2.jpg)"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "row align-items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-7",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hero-content text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "sub-title",
                                                            children: "Welcome to Royal Bush Safaris"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".4s",
                                                            children: "Tour  & Travel"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "hero-button",
                                                            "data-animation": "fadeInRight",
                                                            "data-delay": ".6s",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/about",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "main-btn primary-btn",
                                                                        children: [
                                                                            "About Us",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-paper-plane"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/destination",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "main-btn secondary-btn",
                                                                        children: [
                                                                            "Destinations",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-paper-plane"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "single-slider",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "image-layer bg_cover",
                                        style: {
                                            backgroundImage: "url(assets/images/hero/hero-three_img-3.jpg)"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "container",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "row align-items-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-xl-7",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "hero-content text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "sub-title",
                                                            children: "Welcome to Royal Bush Safaris"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                            "data-animation": "fadeInDown",
                                                            "data-delay": ".4s",
                                                            children: "Tour  & Travel"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "hero-button",
                                                            "data-animation": "fadeInRight",
                                                            "data-delay": ".6s",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/about",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "main-btn primary-btn",
                                                                        children: [
                                                                            "About Us",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-paper-plane"
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    legacyBehavior: true,
                                                                    href: "/destination",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        className: "main-btn secondary-btn",
                                                                        children: [
                                                                            "Destinations",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "fas fa-paper-plane"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        });
    }
}

// EXTERNAL MODULE: ./src/layout/Layout.js + 14 modules
var Layout = __webpack_require__(6234);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: external "react-player/youtube"
const youtube_namespaceObject = require("react-player/youtube");
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube_namespaceObject);
;// CONCATENATED MODULE: ./pages/index.jsx








const Counter = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "@/src/components/Counter"
        ]
    },
    ssr: false
});
const Index3 = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        header: 3,
        footerBG: "gray",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Home3Slider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "features-section pt-100 pb-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-xl-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "features-content-box pr-lg-70 mb-50",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "Availability"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "Explore with us"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-30",
                                            children: "we have diffrent varieties of activites and places you can visit to make those perfect memories!"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "/about",
                                            className: "main-btn filled-btn",
                                            children: [
                                                "Learn More",
                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "far fa-paper-plane"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "features-item-area mb-20",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row pl-lg-70",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fancy-icon-box-two mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "flaticon-camping"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "title",
                                                                children: "Team Building Packages"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fancy-icon-box-two mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "flaticon-biking-mountain"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "title",
                                                                children: "Group Joining Events"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fancy-icon-box-two mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "flaticon-fishing-2"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "title",
                                                                children: "Boat & rides"
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fancy-icon-box-two mb-30",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "flaticon-caravan"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                className: "title",
                                                                children: "Bush Safaris &  Game Drives"
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "about-section bg_cover pt-165 pb-210",
                style: {
                    backgroundImage: "url(assets/images/bg/about-bg-1.jpg)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-xl-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "about-image-box mb-50",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "assets/images/about/about-2.jpg",
                                        className: "rounded-2",
                                        alt: "About Image"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "about-content-box text-white pl-lg-40 mb-50",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "About Us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "We’re the Number 1 Tours and Travel Company in Kenya"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "mb-30",
                                            children: "Book your long awaited Get-Away trip with us for an unforgettable Experience"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "cta-bg overlay bg_cover pt-150 pb-150",
                style: {
                    backgroundImage: "url(assets/images/bg/cta-bg2.jpg)"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-7 col-lg-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "cta-content-box text-white",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "mb-35",
                                            children: "Ready to Travel With Real Adventure and Enjoy Natural"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            legacyBehavior: true,
                                            href: "/about",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                className: "main-btn secondary-btn",
                                                children: [
                                                    "Check Availability",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "far fa-paper-plane"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-5 col-lg-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "play-box text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((youtube_default()), {
                                        url: "https://www.youtube.com/watch?v=CP5k2gRabvc",
                                        playing: true,
                                        loop: true,
                                        muted: true,
                                        width: "100%",
                                        height: "100%",
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                        }
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "we-section pt-100 pb-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-xl-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 order-2 order-xl-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "we-two_image-box mb-20",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row align-items-end",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "we-image mb-30",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "https://royalbushsafaris.co.ke/assets/images/about/about002.jpg",
                                                        alt: "we Image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-6",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "we-image mb-30",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "https://royalbushsafaris.co.ke/assets/images/about/about001.jpg",
                                                        alt: "we Image"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "col-md-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "we-image mb-30 pr-lg-30 text-md-end",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "https://royalbushsafaris.co.ke/assets/images/about/about003.jpg",
                                                        alt: "we Image"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-xl-6 order-1 order-xl-2",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "we-content-box pl-lg-50 mb-10",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "section-title mb-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sub-title",
                                                    children: "Explore with us"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                    children: "An Awesome Opportunity For Tours & Travels"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "features-list_one",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "single-features-list mb-40",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "icon-inner d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon-check",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-badge-check"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "flaticon-helmet"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "content",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                children: "Safety is Always First "
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "single-features-list mb-40",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "icon-inner d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon-check",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-badge-check"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "flaticon-best-price"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "content",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                children: "Budget & Friendly"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "single-features-list mb-40",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "icon-inner d-flex align-items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon-check",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fas fa-badge-check"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "flaticon-travel"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "content",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                children: "We are Trusted Travel Guide"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const pages = (Index3);


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 9051:
/***/ ((module) => {

module.exports = require("react-nice-select");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,152,234,968], () => (__webpack_exec__(6218)));
module.exports = __webpack_exports__;

})();